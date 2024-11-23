import React from 'react'
import './Header.css'
import profile from '../../assets/profilephoto.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={profile} alt="Profile Photo" />
        <h1> <span>I'm Swapnali Morankar,</span>  Fullstack Java Developer.</h1>
        <p >Full Stack Java Developer, delivering robust web solutions with expertise in both frontend 
            and backend development, creating seamless user experiences.</p>
        <a href="https://drive.google.com/file/d/1Ku2522Fnv8Yo_9DKounMG7-nnTgaHSvx/view?usp=sharing" 
        target="_blank" rel="noopener noreferrer">
          <div className="header-connect">My Resume</div>
        </a>

    </div>
  )
}

export default Header