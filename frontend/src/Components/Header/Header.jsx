import React from "react";
import "./Header.css";

export default function Header({ logo, tagline }) {
  return (
    <header className="header">
      <div className="body-of-header">
        <img className="title" src={logo} alt="Logo" />
      </div>
      <p className="tagline">{tagline}</p>
    </header>
  );
}
