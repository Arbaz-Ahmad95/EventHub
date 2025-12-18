import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreateEvent() {
  const navigate = useNavigate();

  // 🔐 login check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
  }, [navigate]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    dateTime: "",
    location: "",
    capacity: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const data = new FormData();
    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    try {
      await API.post("/events", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Event created 🎉");
      navigate("/");
    } catch (err) {
      alert("Failed to create event");
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="datetime-local" name="dateTime" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <input type="number" name="capacity" placeholder="Capacity" onChange={handleChange} required />
      <input type="file" name="image" onChange={handleChange} />

      <button type="submit">Create Event</button>
    </form>
  );
}

export default CreateEvent;
