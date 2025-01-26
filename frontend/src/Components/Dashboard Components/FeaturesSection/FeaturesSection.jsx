import React from "react";
import { Link } from "react-router-dom";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      title: "Pomodoro Timer",
      description: "Stay focused and boost productivity.",
      icon: "⏰", // Replace with actual icon if needed
      color: "bg-red-500 hover:bg-red-600",
      route: "/pomodoro",
    },
    {
      title: "View Quests",
      description: "Explore your challenges and goals.",
      icon: "📜", // Replace with actual icon if needed
      color: "bg-green-500 hover:bg-green-600",
      route: "/todolist",
    },
    {
      title: "Quest Logs",
      description: "Record your progress and notes.",
      icon: "📘", // Replace with actual icon if needed
      color: "bg-blue-500 hover:bg-blue-600",
      route: "/note",
    },
  ];

  return (
    <div className="features-section">
      <h2 className="features-section-title">Explore Your Tools</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <Link
            to={feature.route}
            key={index}
            className={`feature-card ${feature.color} text-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105`}
          >
            <div className="icon text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="text-sm text-gray-200">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
