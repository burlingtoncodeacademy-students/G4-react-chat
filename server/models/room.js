const mongoose = require ('mongoose');

const roomSchema = new mongoose.Schema({
    "name": String,
    "description": String,
    "addedUsers": [String]
});

module.export = mongoose.model('room'. roomSchema)