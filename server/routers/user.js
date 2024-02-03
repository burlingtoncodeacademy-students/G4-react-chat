const router = require('express').Router();
const User = require('../models/user') 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT;
// Note for self (delete later): '../' refers to parent dir (server)

router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        //Hash the user password
        const hashedPassword = await bcrypt.hash(password, 10); //! 

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


        // Respond with the created user (excluding the password)
        res.status(201).json({
            message: 'User created successfully',
            newUser,
            token
        })

    } catch (error) {
        res.status(500).send({ message: 'Failed to create the user', error: error.message });
    }
// Keep for testing

// } catch (err) {
//     res.status(500).json({
//         ERROR: err.message
//     })
// }

})
  

router.post("/login", async(req, res) => {
    try {

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

router.put("/update/:id", async(req, res) => { //! icebox
    console.log('test upate')
})

router.delete("/:id", async(req, res) => { //! icebox
    console.log('test delete')
})


module.exports = router