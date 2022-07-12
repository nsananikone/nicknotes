import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note";
import { CreateArea } from "./CreateArea";
import { useState } from "react";


export const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteEntry, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteEntry, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteEntry.title}
            content={noteEntry.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
};
