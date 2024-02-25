const router = require('express').Router();
const User = require('../models/user') 

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT;


router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        //Hash the user password
        const hashedPassword = await bcrypt.hash(password, 10); 

        //Create the user instance
        const newUser = new User({ 
            firstName, 
            lastName, 
            email, 
            password: hashedPassword 
        })


        //Save the user instance to the db
        await newUser.save(); 

        const token = jwt.sign({id: newUser._id}, SECRET, {expiresIn: "1 day"});

        // Instead of sending JSON, send a simple success message
          res.status(201).send('User created successfully. Token generated.');
        } catch (error) {
            res.status(500).send({ message: 'Failed to create the user', error: error.message });
        }
    });

  

router.post("/login", async(req, res) => {
    try {
        // console.log("server received a login request") //! temp keep for testing

        const { email, password } = req.body;

        const user = await User.findOne({email: email});

        if(!user) throw new Error('Email or Password does not match.');
        
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) throw new Error('Email or Password does not match.');

        const token = jwt.sign({id: user._id}, SECRET, {expiresIn: 60 * 60 * 12});

        res.status(200).json({
            message: "Logged in!",
            user,
            token
        })

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
})

router.put("/users/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body; // Exclude password for simplicity

        const updatedUser = await User.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email
        }, { new: true }); // Returns the updated document

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Failed to update user", error: error.message });
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user", error: error.message });
    }
});


module.exports = router;