
import './App.css';
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Pages/Form'
import Dashboard from './Pages/Dashboard';
import PomodoroTimer from './Pages/PomodoroTimer';
import Note from './Pages/Note';
import TodoList from './Pages/TodoList';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Route for Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Route for Login page */}
          <Route path="/login" element={<Form />} />

          {/*Route for Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/*Route for Pomodoro Timer*/}
          <Route path="/pomodoro" element={<PomodoroTimer />} />

          {/*Route for Note-making*/}
          <Route path='/note' element={<Note />} />

          <Route path='/TodoList' element={<TodoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
