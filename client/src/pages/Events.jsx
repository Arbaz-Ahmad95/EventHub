import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import API from "../services/api";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch {
      alert("Error loading events");
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="events-page">
      <h1 className="events-title">All Upcoming Events</h1>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            refresh={loadEvents}   // ✅ IMPORTANT
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
