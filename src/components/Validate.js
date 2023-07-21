import React, { useState } from "react";

const Validate = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(false)

  let { username, password } = user;

  function login(e) {
    e.preventDefault();
    setError(false);
    if (password === "" || username === "") {
      setError(true)
    }
  }

  return (
    <div>
      <form onSubmit={login}>
        <div>
          <label htmlFor="userName">UserName:</label>
          <input
            type="text"
            id="userName"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            value={user.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        {error && (
          <span id="errorMessage">Both username and password are required.</span>
        )}
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Validate;
