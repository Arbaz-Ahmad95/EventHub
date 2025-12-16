// =========================
import React from "react";
import EventCard from "../components/EventCard";
import "./Events.css";


const dummyEvents = [
{
id: 1,
title: "Linux + Python Bootcamp",
tag: "FREE BOOTCAMP",
duration: "7 DAYS",
date: "Monday, 17 Feb",
time: "09 AM",
instructor: "John Doe",
},
{
id: 2,
title: "MERN Stack Workshop",
tag: "FREE ENTRY",
duration: "5 DAYS",
date: "Friday, 21 Feb",
time: "10 AM",
instructor: "Jane Smith",
},
];


function Events() {
return (
<div className="events-page">
<h1 className="events-title">All Upcoming Events</h1>


<div className="events-layout">
{/* Events grid */}
<div className="events-grid">
{dummyEvents.map((event) => (
<EventCard key={event.id} event={event} />
))}
</div>


{/* Filter box */}
<div className="events-filter">
<h3>Filter by</h3>
<label><input type="checkbox" /> Online webinar</label>
<label><input type="checkbox" /> Offline event</label>
<h4>Date Range</h4>
<label><input type="checkbox" /> This month</label>
<label><input type="checkbox" /> Next month</label>
<button className="filter-btn">Apply filter</button>
</div>
</div>
</div>
);
}


export default Events;