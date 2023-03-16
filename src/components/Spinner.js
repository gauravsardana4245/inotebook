import React from 'react'
import loading from "../img/loading_copy.gif"
const Spinner = () => {

  return (
    <div style={{
      display: "flex"
    }}>
      <img className='my-2' style={{ textAlign: "center", margin: "3px 0" }} src={loading} alt="loading" />
    </div>
  )

}

export default Spinner
