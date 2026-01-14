import React, { useState } from "react";
import { login } from "./../auth/services/authServices";

export default function Login({ onLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      if (!user.emailVerified) {
        alert("Please verify your email first!");
        return;
      }
      onLoggedIn(user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
