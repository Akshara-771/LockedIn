import React from "react";
import { Routes, Route } from "react-router-dom";
import LeftPanel from "../Components/Dashboard Components/LeftPanel/LeftPanel";
import RightPanel from "../Components/Dashboard Components/RightPanel/RightPanel";
import FeaturesSection from "../Components/Dashboard Components/FeaturesSection/FeaturesSection";
import PomodoroTimer from "./PomodoroTimer";
import Note from "./Note";
import TodoList from "./TodoList"; // Ensure this is correctly imported
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <LeftPanel />
      <RightPanel />

      <Routes>
        <Route path="/" element={<FeaturesSection />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/note" element={<Note />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
};

export default Dashboard;
