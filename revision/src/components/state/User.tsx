import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const initialvalue = {
  name: "",
  email: "",
};

const UserComp = () => {
  const [user, setUser] = useState<AuthUser | null>(initialvalue as AuthUser);

  const handleLogin = () => {
    setUser({ name: "sufi", email: "sufi@gmail.com " });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ padding: "10px", border: "5px solid red" }}>
      {user == null ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </div>
      )}
    </div>
  );
};

export default UserComp;
