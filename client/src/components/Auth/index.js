import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Auth({ updateToken }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (data) => {
    //TODO: Implement login logic here and update token
    updateToken(data.token);
  };

  const handleRegister = (data) => {
    //TODO: Implement registration logic here and update token
    updateToken(data.token);
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
