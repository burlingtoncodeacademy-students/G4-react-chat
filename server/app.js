const mongoose = require('mongoose')
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { createUser } = require('./controllers/user.js')
const { createRoom } = require('./controllers/room.js')
const { createMessage } = require('./controllers/message.js')

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies


// Use the user routes with the base path '/users'
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});