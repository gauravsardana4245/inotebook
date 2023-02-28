import React from 'react'
import Notes from './Notes'

const Home = (props) => {

    return (
        <div>
            <Notes showAlert={props.showAlert} mode={props.mode} setName={props.setName} />
        </div>
    )
}

export default Home
