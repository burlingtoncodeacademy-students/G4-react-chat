import React, { useState } from "react";
import Auth from "./components/Auth";
import Rooms from "./components/Rooms"; // Make sure to import Rooms
import "./App.css";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  const updateToken = (token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
  };

  return (
    <div className="App">
      {authToken ? <Rooms /> : <Auth updateToken={updateToken} />}
    </div>
  );
}

export default App;
