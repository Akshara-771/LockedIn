import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    navigate("/dashboard"); // Navigate to the Dashboard page
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-area">
        <h1 className="title">Login</h1>
        <div>
          <label htmlFor="email" className="form-group">
            Email
          </label>
          <input id="email" type="email" className="form-style" required />
        </div>
        <div>
          <label htmlFor="password" className="form-style">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-style-text"
            required
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
