import React, { useState } from "react";

function Register({ onRegister, onToggle }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle register click
  const handleRegister = () => {
    //TODO: Implement registration logic here and update the token
    onRegister({ firstName, lastName, email, password });
  };

  // Form fields
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="Register-title" style={{ textAlign: 'center' }}>Register Form</h2>
        
        <div style={{ marginBottom: '10px' }}>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}> {/* Increased space for password */}
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        
        <button
          onClick={handleRegister}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '20px', // Increased space below button
          }}
        >
          Register
        </button>
        
        <div style={{ textAlign: 'center' }}> {/* Center the login link */}
          <p>
            Already have an account? <button onClick={onToggle}>Login here!</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
