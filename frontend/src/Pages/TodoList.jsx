import React, { useState } from "react";
import "./TodoList.css"; // Importing the updated CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Add Todo
  const handleAddTodo = () => {
    if (newTodo.trim() && dueDate) {
      const newTodoItem = {
        id: Date.now(),
        task: newTodo,
        dueDate: new Date(dueDate), // Make sure it's a Date object
        completed: false,
      };

      setTodos((prevTodos) => {
        console.log("Todos before update: ", prevTodos);
        const updatedTodos = [...prevTodos, newTodoItem];
        console.log("Todos after update: ", updatedTodos);
        return updatedTodos;
      });

      // Clear inputs
      setNewTodo("");
      setDueDate("");
    }
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Get Upcoming Tasks
  const getUpcomingTasks = () => {
    const currentTime = new Date().getTime(); // Current time in milliseconds
    console.log("Current Time: ", currentTime);

    const upcomingTasks = todos
      .filter((todo) => new Date(todo.dueDate).getTime() >= currentTime) // Compare dates
      .sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      ); // Sort by date

    console.log("Upcoming tasks: ", upcomingTasks);
    return upcomingTasks;
  };

  return (
    <div className="todo-container">
      {/* Main Todo List */}
      <div className="todo-box">
        <h1 className="todo-title">Todo List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-button">
          Add Todo
        </button>
      </div>

      {/* Upcoming Tasks */}
      <div className="todo-box">
        <h2 className="upcoming-title">Upcoming Tasks</h2>
        <ul className="todo-items">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>
                {todo.task} -{" "}
                <small>{new Date(todo.dueDate).toLocaleDateString()}</small>
              </span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
