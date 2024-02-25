const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
});

//TODO: Hash the password in this model so the password isn't saved?

//TODO: Functionality for comparing the password to the login?



module.exports = mongoose.model('User', User)
