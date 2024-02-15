import React, { useState } from "react";

function Register({ onRegister, onToggle }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle register click
  const handleRegister = () => {
    onRegister({ firstName, lastName, email, password });
  };

  // Form fields
  return (
    <div>
      <h2 class="Register-title">Register Form</h2>
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

export default Register;
