import React, { useState } from "react";
import Signup from  './../pages/Signup';
import Login from "./../pages/Login";

function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return <div>Welcome {user.email}</div>;
  }

  return (
    <div>
      <Signup />
      <hr />
      <Login onLoggedIn={setUser} />
    </div>
  );
}

export default App;
