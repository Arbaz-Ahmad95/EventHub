import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left logo */}
        <div className="navbar-logo">
          EventHub
        </div>

        {/* Center links */}
        <div className="navbar-links">
          <Link to="/">Events</Link>
          <Link to="/create">Create Event</Link>
          <Link to="/dashboard">My Dashboard</Link>
          <Link to="/about">About us</Link>
        </div>

        {/* Right section */}
        <div className="navbar-buttons">
          {user ? (
            <>
              <span className="user-name">Hi, {user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn">Log in</Link>
              <Link to="/register" className="signup-btn">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
