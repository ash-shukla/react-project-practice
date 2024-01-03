import React, { useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: Math.random(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className={`${isDarkMode && "dark-mode"}`}>
      <div className="container">
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Search setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          addNote={addNote}
          setNotes={setNotes}
        />
      </div>
    </div>
  );
};

export default App;
