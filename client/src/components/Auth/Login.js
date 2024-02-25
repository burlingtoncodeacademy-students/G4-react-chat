import React, { useState } from "react";

function Login({ onLogin, onToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Handle login click
  const handleLogin = () => {
    console.log("Handle Login clicked") //! temp keep for testing. log should appear when button is clicked
    // Perform the fetch request to the login endpoint
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        console.log("response status:", response.status) //! temp keep for testing
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data from the server:", data) //! temp keep for testing
        // Call the onLogin prop with the token received (or the entire data)
        onLogin(data.token); // Assuming the token is in the data response
      })
      .catch((error) => {
        console.error("Error logging in:", error); //! temp keep for testing
        setError("Invalid email or password"); //updated for clarity
      });
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
        <h2 className="login-title" style={{ textAlign: 'center' }}>Login Form</h2>
        {error && <p className="error" style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
        
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
          className="login-btn"
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px', // Increased space below button
          }}
        >
          Login
        </button>
        
        <div style={{ textAlign: 'center' }}> {/* Center the sign-up link */}
          <p>
            New user? <button onClick={onToggle}>Sign up here!</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
