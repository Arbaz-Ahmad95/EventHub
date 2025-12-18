import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateEvent from "./pages/CreateEvent";
import MyDashboard from "./pages/MyDashboard";
import JoinEvent from "./pages/JoinEvent";

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/dashboard" element={<MyDashboard />} />
        <Route path="/join/:id" element={<JoinEvent />} />
      </Routes>
      
   </>
  );
}

export default App;
