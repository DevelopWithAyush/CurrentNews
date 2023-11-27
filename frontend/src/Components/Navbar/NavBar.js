import React, { useState } from 'react'
import "./NavBar.css"
import logo from '../../img/logo (2).png'
import { Link, useLocation } from 'react-router-dom'
function NavBar() {

  const location = useLocation()
  // const change = {

  // }
  const rotatecss = {
    transform: " rotate(0deg)"
  }
  const setrotatecss = {
    transform: " rotate(45deg)"
  }
  const rotatecss2 = {
    transform: " rotate(0deg)"
  }
  const setrotatecss2 = {
    transform: " rotate(-45deg)"
  }
  const menubtnhide = {
    left: "00%"
  }
  const setmenubtnhide = {
    left: "-100%"
  }
  const hidenav = {
    top: "-100vh"
  }
  const sethidenav = {
    top: "0vh"
  }
  const [rotate, setRotate] = useState(rotatecss)
  const [rotate2, setRotate2] = useState(rotatecss2)
  const [menubtn, setmenubtn] = useState(menubtnhide)
  const [handlehidenav, sethandlehidenav] = useState(hidenav)
  const handleClick = () => {
    if (menubtn.left === "00%") {
      setRotate(setrotatecss)
      setRotate2(setrotatecss2)
      setmenubtn(setmenubtnhide)
      sethandlehidenav(sethidenav)
    } else {
      setRotate(rotatecss)
      setRotate2(rotatecss2)
      setmenubtn(menubtnhide)
      sethandlehidenav(hidenav)

    }

  }

  return (<>
    <header className='header' id='head'>
      <img src={logo} alt="logo" />
      <nav className="navbar" id="nav">

        <Link to="/" className={`navitem ${location.pathname === "/" ? "active" : ""}`}>home</Link>
        <Link to="/business" className={`navitem ${location.pathname === "/business" ? "active" : ""}`}>business</Link>
        <Link to="/entertainment" className={`navitem ${location.pathname === "/entertainment" ? "active" : ""}`}>entertainment</Link>
        <Link to="/health" className={`navitem ${location.pathname === "/health" ? "active" : ""}`}>health</Link>
        <Link to="/science" className={`navitem ${location.pathname === "/science" ? "active" : ""}`}>science</Link>
        <Link to="/sports" className={`navitem ${location.pathname === "/sports" ? "active" : ""}`}>sports</Link>
        <Link to="/technology" className={`navitem ${location.pathname === "/technology" ? "active" : ""}`}>technology</Link>
        {/* <p className="navitem acc" >hii Ayush</p> */}
      </nav>
      <div className="menubtn" onClick={handleClick}  >
        <div className="firstline  line" style={menubtn} ></div>
        <div className='secline'>
          <div className="secondline1 line" style={rotate} ></div>
          <div className="secondline2 line" style={rotate2} ></div>
        </div>
        <div className="thirdline line" style={menubtn} ></div>
      </div>
    </header>
    <div className="secnav" style={handlehidenav} >
      <nav className="navbar1" id="nav">

        <Link onClick={handleClick} to="/" className={`navitem ${location.pathname === "/" ? "active" : ""}`}>home</Link>
        <Link onClick={handleClick} to="/business" className={`navitem ${location.pathname === "/business" ? "active" : ""}`}>business</Link>
        <Link onClick={handleClick} to="/entertainment" className={`navitem ${location.pathname === "/entertainment" ? "active" : ""}`}>entertainment</Link>
        <Link onClick={handleClick} to="/health" className={`navitem ${location.pathname === "/health" ? "active" : ""}`}>health</Link>
        <Link onClick={handleClick} to="/science" className={`navitem ${location.pathname === "/science" ? "active" : ""}`}>science</Link>
        <Link onClick={handleClick} to="/sports" className={`navitem ${location.pathname === "/sports" ? "active" : ""}`}>sports</Link>
        <Link onClick={handleClick} to="/technology" className={`navitem ${location.pathname === "/technology" ? "active" : ""}`}>technology</Link>
        {/* <Link onClick={handleClick} className="navitem acc" to='/'>hii Ayush</Link> */}
      </nav>
    </div>
  </>
  )
}

export default NavBar
