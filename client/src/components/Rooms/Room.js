import React, { useState, useEffect } from "react";

function Room({ roomId, index }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
// console.log(roomId) //! temp keep for testing
  // useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/rooms/${roomId}/messages`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const messagesData = await response.json();
        console.log(messagesData); //! temp keep to check the structure of the fetched data
        setMessages(messagesData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    useEffect(() => {
      fetchMessages();
    }, [roomId]);

  const sendMessage = async () => {
    // Send the message to the server
    const response = await fetch(`${process.env.REACT_APP_API_URL}/rooms/${roomId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: "currentUserId", body: newMessage }),
    });

    if (response.ok) {
      setNewMessage("");
      // Optionally fetch messages again to update the list
      fetchMessages();
    }
  };

  return (
    <>
    <h1>{`${index}`}</h1>
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.body}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
    </>
  );
}

export default Room;
