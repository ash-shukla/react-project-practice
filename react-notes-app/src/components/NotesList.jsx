import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, addNote, setNotes }) => {
  return (
    <div className="notes-list">
      <AddNote addNote={addNote} />
      {notes?.map((note, index) => {
        return (
          <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
        );
      })}
    </div>
  );
};

export default NotesList;
