import React from "react";


function EventCard({ event }) {
return (
<div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
<h3>{event.title}</h3>
<p>{event.description}</p>
<p><b>Date:</b> {event.date}</p>
<p><b>Location:</b> {event.location}</p>
<button>Join</button>
</div>
);
}

export default EventCard;