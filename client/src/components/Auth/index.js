import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Auth({ updateToken }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (data) => {
    // Implement login logic here and update token
    updateToken(/* token from login response */);
  };

  const handleRegister = (data) => {
    // Implement registration logic here and update token
    updateToken(/* token from registration response */);
  };

  return (
    <div>
      {isLogin ? (
        <Login onLogin={handleLogin} onToggle={toggleAuthMode} />
      ) : (
        <Register onRegister={handleRegister} onToggle={toggleAuthMode} />
      )}
    </div>
  );
}

export default Auth;
