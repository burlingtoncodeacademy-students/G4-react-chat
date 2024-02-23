import React, { useState, useEffect } from "react";

function Room({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Function to fetch messages for the room
    const fetchMessages = async () => {
      // const response = await fetch(`/src/rooms/${roomId}/messages`);
      const response = await fetch(
        `../../server/routers/rooms/${roomId}/messages`
      );
      const messagesData = await response.json();
      setMessages(messagesData);
    };

    fetchMessages();
  }, [roomId]);

  const sendMessage = async () => {
    // Send the message to the server
    // const response = await fetch(`/src/rooms/${roomId}/send`, {
    const response = await fetch(`http://localhost:3000/room/${roomId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Use the authToken from localStorage
      },
      body: JSON.stringify({ text: newMessage }),
    });

    if (response.ok) {
      setNewMessage("");
      // Optionally fetch messages again to update the list
    }
  };

  return (
    <>
    <h1>{`Hello World!!! ${roomId}`}</h1>
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage()}>Send</button>
    </div>
    </>
  );
}

export default Room;
