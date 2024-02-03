const router = require('express').Router()
const room = require('../models/room')

router.post('/rooms', async (req, res) => {
    try {
        const { name, description, addedUsers } = req.body;

        // Create a new Room instance
        const newRoom = new Room({
            name,
            description,
            addedUsers, // Assuming this is an array of user IDs
        });

        // Save the room to the database
        await newRoom.save();

        // Respond with the created room
        res.status(201).json({
            message: 'Room created successfully',
            room: newRoom,
        });
    } catch (error) {
        res.status(500).send({ message: 'Failed to create the room', error: error.message });
    }
});

router.get('/rooms', async (req, res) => {
    try {
        // Fetch all rooms from the database
        const rooms = await Room.find({});

        // Respond with the list of rooms
        res.status(200).json({
            message: 'Rooms fetched successfully',
            rooms,
        });
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch rooms', error: error.message });
    }
});


router.put("/rooms/update/:id", async (req, res) => {
    try {
        const { id } = req.params; // The room's ID from the URL
        const updateData = req.body; // Data for updating the room

        const updatedRoom = await Room.findByIdAndUpdate(id, updateData, { new: true });
        
        if (!updatedRoom) {
            return res.status(404).send({ message: 'Room not found' });
        }

        res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update room', error: error.message });
    }
});

//delete

router.delete("/rooms/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRoom = await Room.findByIdAndDelete(id);

        if (!deletedRoom) {
            return res.status(404).json({ message: "Room not found" });
        }

        res.status(200).json({ message: "Room deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete room", error: error.message });
    }
});

module.exports = router;