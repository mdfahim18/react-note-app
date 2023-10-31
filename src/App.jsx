import React, { useEffect, useState } from 'react';
import NoteList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';

const getLocalStorage = () => {
  let note = localStorage.getItem('notes');
  if (note) {
    return (note = JSON.parse(localStorage.getItem('notes')));
  } else {
    return [];
  }
};

const getThemeStorage = () => {
  let theme = localStorage.getItem('theme');
  if (theme) {
    return (theme = JSON.parse(localStorage.getItem('theme')));
  }
};
const App = () => {
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(getThemeStorage(false));
  const [notes, setNotes] = useState(getLocalStorage());

  const handleAddNote = (text) => {
    const id = new Date().getTime();
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: id,
      text: text,
      date: date,
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [notes, darkMode]);
  return (
    <div className={`theme ${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleDarkToggleMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
};

export default App;

// [
//   {
//     id: 1,
//     text: 'This is my first note',
//     date: '9/19/2023',
//   },
//   {
//     id: 2,
//     text: 'This is my second note',
//     date: '9/20/2023',
//   },
//   {
//     id: 3,
//     text: 'This is my third note',
//     date: '9/23/2023',
//   },
// ]
