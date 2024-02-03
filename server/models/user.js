const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = new mongoose.Schema({ //! may need to add userId to the schema?
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

//! Hash the password in this model so the password isn't saved?

//! Functionality for comparing the password to the login?



module.exports = mongoose.model('User', User)
