import React, { useState } from "react";
import Auth from "./components/Auth";
import Rooms from "./components/Rooms"; // Make sure to import Rooms
import "./App.css";

function App() {
  console.log("rendering app component now") //! temp keep for testing
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  const updateToken = (token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
  };

  // console.log("auth token", authToken);

  return (
    <div className="App">
      {/* if token is present, render Room component. Otherwise, render Auth component. */}
      {authToken ? <Rooms /> : <Auth updateToken={updateToken} />}
      <Rooms />
    </div>
  );
}

export default App;
