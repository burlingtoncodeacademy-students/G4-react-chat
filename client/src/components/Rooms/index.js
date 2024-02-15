import React, { useState, useEffect } from "react";
import Room from "./Room";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    // Fetch the list of rooms from the server
    async function fetchRooms() {
      const response = await fetch("/api/rooms");
      const roomsData = await response.json();
      setRooms(roomsData);
    }

    fetchRooms();
  }, []);

  return (
    <div>
      <ul>
        {rooms.map((room) => (
          <li key={room.id} onClick={() => setCurrentRoom(room)}>
            {room.name}
          </li>
        ))}
      </ul>
      {currentRoom && <Room roomId={currentRoom.id} />}
    </div>
  );
}

export default Rooms;
