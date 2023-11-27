import React from 'react'
import "./Cards.css"
import logo from "../../img/logo (2).png"
import { Link } from 'react-router-dom'

function Cards(props) {
  return (

    <div className="card">
      <div className="img">
        <img src={!props.imgurl?`${logo}`:props.imgurl} alt="logo" />
      </div>
      <div className="onhover">
        <h3>{props.title}</h3>
        <p className="description">{props.description}</p>
   
        <Link to={props.url} target='ayus' className='btnread'>read news</Link>

      </div>
    </div>

  )
}

export default Cards
