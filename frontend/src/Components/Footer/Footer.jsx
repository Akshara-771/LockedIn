// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-body">
        <p className="footer-text">
          &copy; 2025 LockedIn. All rights reserved.
        </p>
        <div className="footer-social-media-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.threads.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
