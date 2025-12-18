import React from "react";
import API from "../services/api";
import "./EventCard.css";

function EventCard({ event, refresh }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleDelete = async () => {
    if (!window.confirm("Delete this event?")) return;

    try {
      await API.delete(`/events/${event._id}`);
      refresh();
    } catch (err) {
      alert("You are not allowed to delete this event");
    }
  };

  return (
    <div className="event-card">
      {event.image && (
        <img
          src={`http://localhost:5000/uploads/${event.image}`}
          alt={event.title}
          className="event-image"
        />
      )}

      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><b>Location:</b> {event.location}</p>
      <p>
        <b>Date:</b>{" "}
        {event.dateTime
          ? new Date(event.dateTime).toLocaleString()
          : "N/A"}
      </p>
      <p><b>Capacity:</b> {event.capacity}</p>

      <div className="event-actions">
        {/* DELETE BUTTON (SHOW FOR ALL LOGGED USERS) */}
        {user && (
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        )}

        {/* JOIN BUTTON */}
        <button className="join-btn">Join</button>
      </div>
    </div>
  );
}

export default EventCard;
