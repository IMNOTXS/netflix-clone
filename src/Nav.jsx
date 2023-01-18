import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])
  return (
    <div className={`nav ${show &&"nav_black"}`}>
      <div className="nav_contents">
        <img className='nav_logo' src="https://cdn.discordapp.com/attachments/1058878537899180184/1065265114942545920/580b57fcd9996e24bc43c529.png" alt="" />
        <img className='nav_avatar' src="https://cdn.discordapp.com/attachments/1058878537899180184/1065256700195647568/Netflix-avatar.png" alt="" />
        
      </div>
    </div>
  )
}

export default Nav