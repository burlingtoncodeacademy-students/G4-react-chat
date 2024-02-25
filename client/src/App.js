import React, { useState } from "react";
import Auth from "./components/Auth";
import RoomsList from "./components/Rooms/RoomsList.js"; 

import "./App.css";

function App() {
  console.log("rendering app component now"); //! temp keep for testing
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  const token = 1;

  // localStorage.setItem(key, value)
  //ex. localStorage.setItem(room._id, JSON.stringify(room))

  // localStorage.getItem(key)
  //ex. localStorage.setItem(room._id)

  // localStorage.clear()

  // Approach:
  /* 
  1. pretend you are a user visiting this site for the first time
  2. go through the website from start to finish 
  3. and fill in the functionality gaps 

  register user: 
  - once a user has registered, we can create/set the localStorage authToken key to a value. - if that key exists, then that means the user has already signed in and/or registered 
  so if they were to refresh the browser, the browser will not redirect them to the Login page but instead the Rooms

  login: 
  - user inputs email and password
  - functionality: check to see if that email and password exists in the database
  - if true, go to Rooms page.

  Exit:
  - upon exit, clear forms (upon render, clear form fields)
  */



  const updateToken = (token) => {
    localStorage.setItem("authToken", JSON.stringify(token));
    setAuthToken(token);
  };

  console.log("auth token", authToken);

  return (
    <div className="App">
      {/* if token is present, render Room component. Otherwise, render Auth component. */}
      {authToken ? <RoomsList /> : <Auth updateToken={updateToken} />}
    </div>
  );
}

export default App;
