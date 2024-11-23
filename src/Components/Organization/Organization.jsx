import React from 'react'
import './Organization.css'
import wow from '../../assets/wow.jpg'
import dexterity from '../../assets/dexterity.jpg' 

const Organization = () => {
  return (
    <div className='organizations'>
        <div className="organization">
            <div className="organization-left">
                <img src={wow} alt="photo" />
            </div>
            <div className="organization-right">
                <h2>01</h2>
                <h1>GDSC WOW</h1>
                <h3>Role: Volunteering</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Year: 2024</p>
                <p>Details: GDSC WOW is a national-level event organized across various cities in 
                  India by GDSC India. In Pune, over 30 GDSCs from several colleges collaborated for this 
                  event in April 2024. As the GDSC Lead at my college, I served as a major contributor and 
                  volunteer for the event, along with my team of 10 volunteers.
                </p>
                <a href="https://drive.google.com/file/d/14e2ZgX61eP7-EH0NRF94QUbUhm4Vu1qX/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

        <div className="organization">
            <div className="organization-left">
                <img src={dexterity} alt="photo" />
            </div>
            <div className="organization-right">
                <h2>02</h2>
                <h1>Dexterity 2023: IdeasUnite</h1>
                <h3>Role: Organizer</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Year: 2023</p>
                <p>Details: Dexterity is the annual technical event organized by MMCOE. 
                  It is a two-day national-level event where all departments and student clubs host a 
                  variety of technical and non-technical activities. In Dexterity 2023, as the GDSC Lead, 
                  I was solely responsible for organizing a successful Ideathon, 
                  with over 200 participants across nation. 
                </p>
                <a href="https://drive.google.com/file/d/1cxrRzWi1cPXi9pTY_sTqsbHl4g9hdWnI/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

    </div>
  )
}

export default Organization