// Logic for handling 'User' operations:
    // Use 'User' model to create new users in db 
        // createUser
const router = require('express').Router();
const User = require('../models/user') 
const bcrypt = require('bcryptjs')
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

        // Respond with the created user (excluding the password)
        res.status(201).json({
            message: 'User created successfully',
            userId: user._id,
        });
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
  


