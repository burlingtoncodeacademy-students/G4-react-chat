const router = require('express').Router()
const Message = require('../models/message')

//display messages w/ room endpoint
router.get('/room/:roomID/messages', async (req, res) => {
    try {
        const { roomID } = req.params;
        const messages = await message.find({ room: roomID })
        res.status(200).json({ message: 'Success!'});
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch messages'. error})
    }
});
   
//create messages w/ room endpoint
router.post('/rooms/:roomId/messages', async (req, res) => {
    try {
        const { roomId } = req.params;
        const { user, body } = req.body;

        // create a new message instance
        const newMessage = new Message({ 
            room: roomId, 
            user,
            body
        })
        
        //save new message to the database
        await newMessage.save()

        res.status(200).json({ message: 'Message created successfully', newMessage })

    } catch (error) {
        res.status(500).json({ message: 'Failed to create message', error: error.message })
    }
})

//update ""
router.patch('rooms/:roomId/messages/:messageId', async (req,res) => {
    try {
        const { messageId } = req.params;
        const { body } = req.body
        
        const updatedMessage = await Message.findByIdAndUpdate(
            messageId,
            { $set: { body } },
            { new: true } // Returns the modified document rather than the original
        );

        if (!updatedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }

        res.status(200).json({ message: 'Message updated successfully', updatedMessage });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update message', error: error.message });
    }
});

//delete ""
router.delete('/rooms/:roomId/messages/:messageId', async (req, res) => {
    try {
        const { messageId } = req.params;

        const deletedMessage = await Message.findByIdAndDelete(messageId);

        if (!deletedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete message', error: error.message });
    }
});

module.exports = router;