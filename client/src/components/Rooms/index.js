import React, { useState, useEffect } from "react";
import Room from "./Room";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  const fetchRooms = () => {
    const url = `${process.env.REACT_APP_API_URL}/rooms`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.log(err));
    // const response = fetch("/rooms"); //https://localhost:3000?
    // console.log("response", response);
    // const roomsData = response.json();
    // console.log("roomsData", roomsData);
    // console.log(roomsData);
    // setRooms(roomsData);
  };

  useEffect(() => {
    // Fetch the list of rooms from the server
    // async function fetchRooms() {
    //   const response = await fetch("/rooms"); //https://localhost:3000?
    //   console.log("response", response);
    //   const roomsData = await response.json();
    //   console.log("roomsData", roomsData);
    //   console.log(roomsData);
    //   setRooms(roomsData);
    // }

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
