import React, { useState } from "react";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleAddNote = (e) => {
    if (characterLimit - e.target.value.length >= 0)
      setNoteText(e.target.value);
  };

  const handleSaveNotes = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    } else {
      alert("Note cannot be empty");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleAddNote}
        placeholder="Type to add your note"
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveNotes}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
