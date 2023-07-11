import React, { useState } from "react";
//import "./login.css"
// import { useHistory } from "react-router-dom";

function LoginPage() {
  // state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // history object to navigate to other pages
//   const history = useHistory();

  // function to handle login form submission
  const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: add your logic to authenticate the user
//     // for example, you can use fetch to send a POST request to your backend
//     // and check the response status or data
//     // if successful, redirect to the home page
//     history.push("/");
//     // if not, show an error message or alert
  };

  return (
    <div className="login-page">
      <h1>Welcome to Music App</h1> 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;