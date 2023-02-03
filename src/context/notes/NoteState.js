import { useState } from "react"
import NoteContext from "./NoteContext"

const NoteState = (props) => {
    const host = "http://localhost:3000"

    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Getting all notes 
    const getNotes = async () => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMDI0MDgwOGY3YmVlMmM1ODI5MGMxIn0sImlhdCI6MTY3MjQ4Nzk4Mn0.pVl9TN6jvtTMMPrDr5WrF-uVs0QTGeaev_wz45GgsYo"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    const addNote = (title, description, tag) => {
        const note = {
            "_id": "63c07d9fdfe24711as06b7bd77ae",
            "user": "63b0240808f7bee2c58290c1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-01-12T21:37:35.180Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    const deleteNote = (id) => {

               //API call
               const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMDI0MDgwOGY3YmVlMmM1ODI5MGMxIn0sImlhdCI6MTY3MjQ4Nzk4Mn0.pVl9TN6jvtTMMPrDr5WrF-uVs0QTGeaev_wz45GgsYo"
                }
            });
            const json = await response.json();
            
        // console.log("deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    const editNote= (title,description, tag)=> {
               //API call
               const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMDI0MDgwOGY3YmVlMmM1ODI5MGMxIn0sImlhdCI6MTY3MjQ4Nzk4Mn0.pVl9TN6jvtTMMPrDr5WrF-uVs0QTGeaev_wz45GgsYo"
                }
            });
            const json = await response.json();
 

            for (let index = 0; index < notes.length; index++) {
                const element = notes[index];
                if(element._id === id) {
                    element.title = title,
                    element.description = description,
                    element.tag = tag
                }
                
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
