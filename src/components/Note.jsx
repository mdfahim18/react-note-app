import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ note, handleDeleteNote }) => {
  const { id, text, date } = note;

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => {
            handleDeleteNote(id);
          }}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Note;
