import React, { useState, useEffect } from "react";
import Room from "./Room";
import "./Rooms.css"

function RoomsList() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  const fetchRooms =  async () => {
    const url = `http://localhost:3000/room`;
    // console.log(url); //! temp keep for testing
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
    // const fetchRooms = async () => {
    //   const url = "http://localhost:3000/room";
    //   try {
    //     const response = await fetch(url);
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setRooms(data.rooms); // Ensure the backend sends an object with a 'rooms' property
    //   } catch (error) {
    //     console.error("Fetch error:", error);
    //   }
    // };

    fetchRooms();
  }, []);

  /* 
  let variable = roomList[index]
  return (
    button - onClick setCurrentRoom
  )
  */
 const handleRoomClick = (room) => {
  setCurrentRoom(room);
 }


  return (
    <div>
      <h1 className="room-select">Select Your Room:</h1>
      
      <ul>
        {rooms.map((room, index) => (
          <button key={room._id} onClick={() => 
            handleRoomClick(room)}>
            {room.name}
          </button>
        ))}
      </ul>
      {currentRoom && <Room roomId={currentRoom._id} index={currentRoom.name} />}
    </div>
  );

}


export default RoomsList;
