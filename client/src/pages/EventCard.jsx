import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EventCardd.css";

function EventCard({ event }) {
  const navigate = useNavigate();

  if (!event) return null; // safety

  const handleJoin = () => {
    navigate(`/join/${event._id}`);
  };

  return (
    <div className="event-card">
      
      {/* TOP */}
      <div className="event-top">
        <span className="live-badge">LIVE</span>
      </div>

      {/* IMAGE */}
      {event.image && (
        <img
          src={`http://localhost:5000/uploads/${event.image}`}
          alt={event.title}
          className="event-image"
        />
      )}

      {/* BODY */}
      <div className="event-body">
        <h3>{event.title}</h3>

        <p className="desc">{event.description}</p>

        <p>📍 {event.location}</p>

        <p>
          📅 {new Date(event.dateTime).toLocaleDateString()}
        </p>

        {/* BUTTON */}
        <button className="join-btn" onClick={handleJoin}>
          Register Now
        </button>
      </div>
    </div>
  );
}

export default EventCard;
