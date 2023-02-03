import React, { useContext, useEffect } from 'react'
import notesContext from "../context/notes/NoteContext"
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(notesContext)
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
    }, [])
    return (
        <>
            <AddNote />
            <div className='row my-3 mx-3 '>
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NoteItem note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
