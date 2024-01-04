import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const noteSaved = JSON.parse(localStorage.getItem("notes-data"));
    const modeSaved = JSON.parse(localStorage.getItem("mode"));
    if (noteSaved) {
      setNotes(noteSaved);
      setIsDarkMode(modeSaved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
    localStorage.setItem("mode", JSON.stringify(isDarkMode));
  }, [notes, isDarkMode]);

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
          notes={notes?.filter((note) =>
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
