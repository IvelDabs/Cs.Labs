import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post("/api/login", {
      username,
      password,
      userType,
    });

    // Handle successful login
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
};



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Select User
        <select value={userType} onChange={handleUserTypeChange}>
          <option value="Teacher">Teacher</option>
          <option value="School Management">School Management</option>
        </select>
      </label>
      <button className='select-user btn'>Login</button>
    </form>
  );
}

export default Login;