import { MdDeleteForever } from "react-icons/md";

const Note = ({ note, notes, setNotes }) => {
  const handleDeleteNote = (id) => {
    const indexToDelete = notes?.findIndex((x) => x.id === id);
    let tempNote = [...notes];
    tempNote.splice(indexToDelete, 1);
    setNotes(tempNote);
  };

  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(note.id)}
          style={{ cursor: "pointer" }}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
