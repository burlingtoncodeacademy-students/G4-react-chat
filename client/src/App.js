import React from "react";
import "./App.css";
import Auth from "./components/Auth"; // Import Auth component

function App() {
  // Function to update token in localStorage
  const updateToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <div className="App">
      {/* Other components can also be added here */}
      <Auth updateToken={updateToken} />
      {/* Further components can be rendered here... */}
    </div>
  );
}

export default App;
