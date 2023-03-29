import React, { useEffect, useState } from 'react'
import "../styles/Nav.css"

const Nav = () => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        handleShow(true);
      }else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src="./Netflix_Logo_RGB.png" className='nav__logo' />

      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='nav__avatar' />
    </div>
  )
}

export default Nav