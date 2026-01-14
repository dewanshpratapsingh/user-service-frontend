import React, { useState } from "react";
import { signup } from "./../auth/services/authServices";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const user = await signup(email, password);
      alert(`Verification email sent to ${user.email}`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
