import React from 'react'
import './Certification.css'

const Certification = () => {
  return (
    <div className='certifications'>
        <div className="heading">
            <h1>Professional Offline Courses</h1>
        </div>
        <div className="third">
        <div className="certificate">
            <div className="certificate-right">
                <h2>01</h2>
                <h1>Full Stack Java Development</h1>
                <h3>Two Dimensions</h3>
                <p>Duration: 6 months</p>
                <p>Place: Pune, Maharashtra</p>
                <p>Year: 2023</p>
                <p className='techused'>Skills: Core Java, Advance Java, JSP, JDBC, Servlets, Spring Framework, Spring Boot, Hbernate, ORM, MYSQL</p>
                <a href="https://drive.google.com/file/d/1g8oPhfgx-ht8qSUXYwkEYjHN4yvDgELz/view?usp=drive_link">View Certificate</a>
            </div>
        </div>
        <div className="certificate">
            <div className="certificate-right">
                <h2>02</h2>
                <h1>Frontend Development in React.js</h1>
                <h3>Data Council</h3>
                <p>Duration: 3 months</p>
                <p>Place: Pune, Maharashtra</p>
                <p>Year: 2023</p>
                <p className='techused'>Skills: React.js, HTML, CSS, Bootstrap, Javascript, ESP<br />Git/Github</p>
                <a href="https://drive.google.com/file/d/1g8oPhfgx-ht8qSUXYwkEYjHN4yvDgELz/view?usp=drive_link">View Certificate</a>
            </div>
        </div>
        </div>
        <div className="fourth">
        <div className="certificate">
            <div className="certificate-right">
                <h2>03</h2>
                <h1>C and C++ Course</h1>
                <h3>Disha Computer Institute</h3>
                <p>Duration: 3 months</p>
                <p>Place: Pune, Maharashtra</p>
                <p>Year: 2022</p>
                <p className='techused'>Skills: C, C++, OOP</p>
                <a href="https://drive.google.com/file/d/1Hjwrixu-9_sk0InqslqQ_DELrIth4g_P/view?usp=drive_link">View Certificate</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Certification