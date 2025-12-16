import React, { useState } from "react";


function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
alert("Register clicked (backend later)");
};


return (
<form onSubmit={handleSubmit} style={{ padding: "20px" }}>
<h2>Register</h2>
<input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
<input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
<button type="submit">Register</button>
</form>
);
}


export default Register;