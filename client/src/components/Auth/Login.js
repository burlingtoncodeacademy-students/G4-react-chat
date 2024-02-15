import React, { useState } from "react";

function Login({ onLogin, onToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login click
  const handleLogin = () => {
    onLogin({ email, password });
  };

  // Form fields
  return (
    <div>
      <h2 class="login-title">Login Form</h2>
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

export default Login;
