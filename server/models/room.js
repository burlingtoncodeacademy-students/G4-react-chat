const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: String,
    description: String,
    addedUsers: [String]
});

module.exports = mongoose.model('Room', roomSchema)