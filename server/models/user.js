const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "email": { type: String, unique: true },
    "password": String
});

module.export = mongoose.model('User'. userSchemaSchema)