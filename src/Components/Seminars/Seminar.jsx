import React from 'react'
import './Seminar.css'
import devfest from '../../assets/devfest.jpg'
import webtrail from '../../assets/webtrail.jpg' 

const Seminar = () => {
  return (
    <div className='seminars'>
        <div className="seminar">
            <div className="seminar-left">
                <img src={devfest} alt="photo" />
            </div>
            <div className="seminar-right">
                <h2>01</h2>
                <h1>Devfest Pune</h1>
                <h3>Organizer: GDG Pune</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Year: 2023</p>
                <p>Skills: AI, ML, Development, Networking</p>
                <a href="https://drive.google.com/file/d/1bYdf6sNWhRHNa17v8rGc3E9IZp5Cnr-t/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

        <div className="seminar">
            <div className="seminar-left">
                <img src={webtrail} alt="photo" />
            </div>
            <div className="seminar-right">
                <h2>02</h2>
                <h1>Web Trail</h1>
                <h3>Organizer: GDSC MMCOE</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Year: 2023</p>
                <p>Skills: Web Development, Networking</p>
                <a href="https://drive.google.com/file/d/1cxrRzWi1cPXi9pTY_sTqsbHl4g9hdWnI/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

    </div>
  )
}

export default Seminar
