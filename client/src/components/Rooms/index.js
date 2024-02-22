import React, { useState, useEffect } from "react";
import Room from "./Room";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const url = "http://localhost:3000/room";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRooms(data.rooms); // Ensure the backend sends an object with a 'rooms' property
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchRooms();
  }, []);

  const handleRoomClick = (room) => {
    setCurrentRoom(room);
  };

  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room._id} onClick={() => handleRoomClick(room)}>
            {room.name} - {room.description}
          </li>
        ))}
      </ul>
      {currentRoom && <Room roomId={currentRoom._id} />}{" "}
      {/* Adjust this if necessary to match your data structure */}
    </div>
  );
}

export default Rooms;
