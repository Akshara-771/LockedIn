import React, { useState } from 'react';
import './Note.css';

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newNote, setNewNote] = useState('');

  const pastelColors = [
    '#FFB3BA',
    '#FFDFBA',
    '#FFFFBA',
    '#BAFFC9',
    '#BAE1FF',
    '#D5BAFF',
    '#FFC6FF',
    '#FFDAC1',
  ];

  const getRandomColor = () => pastelColors[Math.floor(Math.random() * pastelColors.length)];

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          text: newNote,
          date: new Date().toLocaleDateString(),
          color: getRandomColor(),
        },
      ]);
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="note-app">
      <h1>Notes</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="add-note-container">
        <textarea
          placeholder="Write a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          maxLength={200}
          className="write-note"
        />
        <button className="save-button" onClick={addNote}>Save</button>
      </div>
      <div className="notes-container">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="note-card"
            style={{ backgroundColor: note.color }}
          >
            <p>{note.text}</p>
            <span>{note.date}</span>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
