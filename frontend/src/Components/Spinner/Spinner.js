import React from 'react'
import "./Spinner.css"
import spinner from "../../img/Double Ring-1s-200px.gif"

function Spinner() {
  return (
    <div className='container'>
      <img className='spinner' src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner
