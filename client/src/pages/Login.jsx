import React, { useState } from "react";


function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
alert("Login clicked (backend later)");
};


return (
<form onSubmit={handleSubmit} style={{ padding: "20px" }}>
<h2>Login</h2>
<input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
<button type="submit">Login</button>
</form>
);
}


export default Login;