import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <div>
      <h1>Login Page</h1>
      <input
        placeholder="johndoe@gmail.com"
        value={email}
        type={"text"}
        onChange={(changes) => {
          setEmail(changes);
        }}
      />
      <input
        placeholder="Password"
        value={password}
        type={"password"}
        onChange={(changes) => {
          setPassword(changes);
        }}
      />
      <button>Sign In</button>
      <button>Forgot Password</button>
    </div>
  );
};
