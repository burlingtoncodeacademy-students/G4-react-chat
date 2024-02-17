import React, { useState } from "react";

function Login({ onLogin, onToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Handle login click
  const handleLogin = () => {
    // Perform the fetch request to the login endpoint
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        // Call the onLogin prop with the token received (or the entire data)
        onLogin(data.token); // Assuming the token is in the data response
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError(error.message);
      });
  };

  // Form fields
  return (
    <div>
      <h2 className="login-title">Login Form</h2>
      {error && <p className="error">{error}</p>}{" "}
      {/* Display any login errors */}
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
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
      <p>
        New user? <button onClick={onToggle}>Sign up here!</button>
      </p>
    </div>
  );
}

export default Login;
