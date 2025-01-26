import React from "react";
import "./RightPanel.css";

const RightPanel = () => {
  const handleClick = (item) => {
    console.log(`Clicked on ${item}`);
  };

  return (
    <div className="right-panel">
      {/* Avatar Section */}
      <div className="avatar-section">
        <img
          src="https://via.placeholder.com/80" // Replace this URL with the avatar image
          alt="User Avatar"
          className="avatar-image"
        />
        <h3 className="username">aksharaanil62</h3>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-item-health" onClick={() => handleClick("XP")}>
          <img src="" alt="XP Icon" className="icon" />
          <span>220 Total XP</span>
        </div>
        <div className="stat-item-rank" onClick={() => handleClick("Rank")}>
          <img
            src="https://via.placeholder.com/20"
            alt="Rank Icon"
            className="icon"
          />
          <span>Bronze Rank</span>
        </div>
        <div className="stat-item-badges" onClick={() => handleClick("Badges")}>
          <img
            src="https://via.placeholder.com/20"
            alt="Badges Icon"
            className="icon"
          />
          <span>4 Badges</span>
        </div>
        <div className="stat-item-streak" onClick={() => handleClick("Streak")}>
          <img
            src="https://via.placeholder.com/20"
            alt="Streak Icon"
            className="icon"
          />
          <span>1 Day Streak</span>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
