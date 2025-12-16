import React, { useState } from "react";
import './Create-event.css';


function CreateEvent() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
alert("Event created (backend later)");
};


return (
<form onSubmit={handleSubmit} style={{ padding: "20px" }}>
<h2>Create Event</h2>
<input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
<textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
<button type="submit">Create</button>
</form>
);
}


export default CreateEvent;