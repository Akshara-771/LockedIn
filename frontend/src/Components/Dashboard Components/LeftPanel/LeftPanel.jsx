import React, { useState, useEffect } from "react";

const LeftPanel = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the 'To-Do Lists' webpage
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://your-todo-list-webpage.com/api/tasks"
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <section className="left-panel">
      {/* Text Content */}
      <div className="left-panel-content">
        <h1 className="left-panel-welcome">Welcome Back!</h1>
        <p className="left-panel-heading">Here are your ongoing tasks:</p>
        <ul className="left-panel-quest">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li key={index} className="text-sm md:text-base">
                {task.title}
              </li>
            ))
          ) : (
            <p className="italic">No tasks available.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default LeftPanel;
