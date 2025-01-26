// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Hero({ description, image }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Save the current scroll position
    const scrollY = window.scrollY; // Get the vertical scroll position
    sessionStorage.setItem("scrollPosition", scrollY); // Store it in sessionStorage
    navigate("/login"); // Navigate to the login page
  };

  return (
    <section className="hero-section">
      {/* Left Side: Text */}
      <div className="hero-left-section">
        <h1 className="hero-left-quote">Own your time, Master your habits</h1>
        <p className="hero-text">{description}</p>
        <hr />

        <div className="hero-left-button-group">
          <button className="hero-left-login" onClick={handleLoginClick}>
            Login
          </button>

          <button className="hero-left-signup">Sign Up</button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hero-right-section">
        <div className="hero-image-container">
          {image && (
            <img src={image} alt="Hero Image" className="hero-avatar" />
          )}
        </div>
      </div>
    </section>
  );
}
