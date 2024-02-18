import React, { useState, useEffect } from "react";
import Room from "./Room";


function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    // Fetch the list of rooms from the server
    async function fetchRooms() {
      const response = await fetch("/rooms"); //https://localhost:3000?
      const roomsData = await response.json();
      console.log(roomsData);
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
