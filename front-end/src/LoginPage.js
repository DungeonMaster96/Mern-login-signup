import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  //Submit Function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        console.log("Login Successful");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Login error", error);
    }
    setLoginData({
      username: " ",
      password: " ",
    });
  };
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>LoginPage</h1>

      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={loginData.username}
          onChange={handleLoginChange}
        ></input>

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={loginData.password}
          onChange={handleLoginChange}
        ></input>

        <button type="submit">Login</button>
        <p>
          Not Registered Yet?
          <Link to="/registration">Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;