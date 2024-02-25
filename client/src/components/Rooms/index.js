import React, { useState, useEffect } from "react";
import Room from "./Room";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  const fetchRooms =  async () => {
    const url = `http://localhost:3000/room`;
    // console.log(url);
     await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("fetch rooms GET");
        // console.log('rooms data', data.rooms);
        setRooms(data.rooms);
        // console.log('typeof', typeof(data.rooms))
      })
      .catch((err) => console.log(err));
    // const response = fetch("/rooms"); //https://localhost:3000?
    // console.log("response", response);
    // const roomsData = response.json();
    // console.log("roomsData", roomsData);
    // console.log(roomsData);
    // setRooms(roomsData);
  };

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

  /* 
  let variable = roomList[index]
  return (
    button - onClick setCurrentRoom
  )
  */



  return (
    <div>
      <h1>Rooms</h1>
      
      <ul>
        {rooms.map((room) => (
          <button key={room.id} onClick={() => 
            setCurrentRoom(room)}>
            {room.name}
          </button>
        ))}
      </ul>
      {currentRoom && <Room roomId={currentRoom.id} />}
    </div>
  );
}

export default Rooms;
