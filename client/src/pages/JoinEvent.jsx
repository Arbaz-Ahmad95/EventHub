import React from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";

function JoinEvent({ event }) {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const isFull = event.attendees.length >= event.capacity;

  const handleJoin = async () => {
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await API.post(
        `/events/${id}/join`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Joined successfully 🎉");
    } catch {
      alert("Join failed");
    }
  };

  return (
    <div>
      <h2>{event.title}</h2>

      <p>
        Seats: {event.attendees.length}/{event.capacity}
      </p>

      {isFull ? (
        <p style={{ color: "red" }}>❌ Event is Full</p>
      ) : (
        <button onClick={handleJoin}>✅ Confirm Join</button>
      )}
    </div>
  );
}

export default JoinEvent;
