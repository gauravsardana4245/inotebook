import React, { useContext } from 'react'
import { useState } from 'react';
import notesContext from "../context/notes/NoteContext"

const AddNote = (props) => {
    const context = useContext(notesContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const changeHandler = (e) => {

        setNote({ ...note, [e.target.name]: e.target.value })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);

        setNote({ title: "", description: "", tag: "" });

    }
    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={note.title} aria-describedby="emailHelp" name="title" onChange={changeHandler} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={changeHandler} />
                    </div>

                    <button disabled={note.description.length < 5 || note.title.length < 5} type="submit" className="btn btn-primary" onClick={submitHandler}>Add Note</button>
                </form>
            </div>

        </div>
    )
}

export default AddNote
