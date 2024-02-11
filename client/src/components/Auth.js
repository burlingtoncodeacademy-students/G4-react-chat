//Handles user registration and login functionality

import React from "react";
import { useState } from "react"; // main hook

//login component
function userLogin({ onToggle, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle login click
  function handleLogin() {
    onLogin({ email, password }); //login logic for 'onClick' below
  }
  //form for logging in
  return (
    <div>
      <h2>Login Form</h2>

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button onClick={handleLogin}>Login</button>
      <p>
        New user? <span onClick={onToggle}>Sign up here!</span>
      </p>
    </div>
  );
}

//Registration component
function userRegister({ onToggle, onRegister }) {
  //use states for firstName, lastName, email, password
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle registration click
  function handleRegister() {
    onRegister({ firstName, lastName, email, password });
  }

  //form for user registration
  return (
    <div>
      <h2>Registration Form</h2>

      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <label>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <span onClick={onToggle}>Login here!</span>
      </p>
    </div>
  );
}

//Auth main component
function Auth() {
  const [isLogin, setIsLogin] = useState(true); //sets the login as the default form

  //function for toggling the login and registration forms
  function handleToggle() {
    setIsLogin(isLogin ? false : true); // function for toggling between the forms
  }

  //fuction for handling user registration
  function handleRegister(userData) {
    //! need registration logic here??
    console.log("Register:", userData);
  }

  //render either form
  return (
    <div>
      {isLogin ? (
        <UserLogin onToggle={handleToggle} onLogin={handleLogin} />
      ) : (
        <UserRegister onToggle={handleToggle} onRegister={handleRegister} />
      )}
    </div>
  );
}

export default Auth;
