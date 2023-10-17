import React from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import { data } from './data'
import Split from 'react-split'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import { useEffect } from 'react'
import "react-mde/lib/styles/css/react-mde-all.css";


export default function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) ||[])
  const [currentNoteId, setCurrentNoteId] = useState((notes[0] && notes[0].id) || "")

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your Markdown note's tittle here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  function updateNote(text) {
  // put the most recenttly-updated to the top
    setNotes(oldNotes => {
      const newArray = []
      for (let i = 0; i< oldNotes.length; i++) {
        const oldNote = oldNotes[i]
        if(oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text })
        } else {
          newArray.push(oldNote)
        }
      }
      return newArray
    })
  }

  function deleteNote(event, noteId) {
    event.stopPropagation()
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  }

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  return (
    <main>
      { notes.length > 0 ? (
      <Split sizes={[25, 75]} 
      // minSize={100} expandToMin={false}  gutterSize={10}
      // gutterAlign="center"
      // snapOffset={30}
      // dragInterval={1}
      direction="horizontal"
      cursor="col-resize" className="split">
        <Sidebar notes={notes} currentnote={findCurrentNote()} setCurrentNoteId={setCurrentNoteId} newNote={createNewNote} deleteNote={deleteNote} /> 
        {currentNoteId && notes.length > 0 && <Editor currentNote={findCurrentNote()} updateNote={updateNote}/>}
      </Split> )
      : (<div className='no-notes'>
          <h1>You have no notes</h1>
          <button className='first-note' onClick={createNewNote}>Create one now</button>
        </div>)
      } 

    </main>
  )
}

