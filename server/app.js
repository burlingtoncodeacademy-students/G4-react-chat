const mongoose = require('mongoose')
const express = require('express');
const user = require('./routers/user.js')
const room = require('./routers/room.js')
const message = require('./routers/message.js')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

//check browser response
app.get('/', (req, res) => {
    console.log('sdfsdff')
    res.send('it works!')
})
// Use the user routes with the base path '/users'
app.use('/user', user);

app.use('/room', room);

app.use('/message', message);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

