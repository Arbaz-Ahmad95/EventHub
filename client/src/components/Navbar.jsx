import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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

        {/* Right buttons */}
        <div className="navbar-buttons">
          <Link to="/login" className="login-btn">Log in</Link>
          <Link to="/register" className="signup-btn">Sign up</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
