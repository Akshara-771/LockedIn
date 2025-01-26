// src/components/FeaturesSection.jsx
import React from "react";
import "./Features.css";
export default function Features({ features }) {
  return (
    <section className="features">
      <div className="features-right">
        <h1 className="features-right-quote">Conquer Procrastination!</h1>
        <h2 className="features-right-heading">Welcome to LockedIn </h2>
        <div className="features-right-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-right-list-items">
              {feature.icon && (
                <div className="feature-right-list-item-img">
                  {feature.icon}
                </div>
              )}
              <h3 className="feature-right-list-item-title">{feature.title}</h3>
              <p className="feature-right-list-item-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <p className="features-right-last-text">
          Start getting things done with ease and leave procrastination behind!
        </p>
      </div>

      <div className="features-left">
        <img
          className="features-left-img"
          src=""
          alt="Demo image to be inserted"
        />
      </div>
    </section>
  );
}
