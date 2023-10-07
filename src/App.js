
import { useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import ShowNote from './components/ShowNote';

function App() {
  const [notesdata, setNotesdata] = useState([]);
  const [editableNote, setEditableNote] = useState(null);

  const addData = (data) => {
    setNotesdata([...notesdata, { ...data, id: notesdata.length + 1 }])
  }

  const deleteNote = (id) => {
    const data1 = notesdata.filter((val, index) => index !== id)
    setNotesdata(data1)
  }

  const editNote = (id) => {
    const data = notesdata.find((val) => val.id === id);
    setEditableNote(data)
  }

  const updateNote = (note) => {
    const index = notesdata.findIndex((val) => val.id === note.id)
    console.log(index);
    const ndata = [...notesdata];
    ndata.splice(index, 1, note)
    setNotesdata(ndata);
    setEditableNote(null)
  }

  return (
    <div>
      <Header></Header>
      <CreateNote addData={addData} editableNote={editableNote} updateNote={updateNote}></CreateNote>

      <ShowNote notesdata={notesdata} deleteNote={deleteNote} editNote={editNote} ></ShowNote>
      <Footer></Footer>
    </div>
  );
}

export default App;
