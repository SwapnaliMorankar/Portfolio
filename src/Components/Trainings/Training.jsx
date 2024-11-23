import React from 'react'
import './Training.css'

const Certification = () => {
  return (
    <div className='trainings'>
        <div className="heading">
            <h1>Online Certifications</h1>
        </div>
        <div className="third">
        <div className="training">
            <div className="training-right">
                <h2>01</h2>
                <h1>Java Programming</h1>
                <h3>Great Learning</h3>
                <p>Duration: 1 month</p>
                <p>Year: 2024</p>
                <p className='techused'>Skills: Java</p>
                <a href="https://olympus.mygreatlearning.com/courses/12385/certificate?pb_id=581">View Certificate</a>
            </div>
        </div>
        <div className="training">
            <div className="training-right">
                <h2>02</h2>
                <h1>Introduction to Machine Learning</h1>
                <h3>Great Learning</h3>
                <p>Duration: 1 month</p>
                <p>Year: 2024</p>
                <p className='techused'>Skills: Machine Learning</p>
                <a href="https://olympus.mygreatlearning.com/courses/61719/certificate?pb_id=581">View Certificate</a>
            </div>
        </div>
        </div>
        <div className="fourth">
        <div className="training">
            <div className="training-right">
                <h2>04</h2>
                <h1>Front End Development - HTML</h1>
                <h3>Great Learning</h3>
                <p>Duration: 1 month</p>
                <p>Year: 2022</p>
                <p className='techused'>Skills: HTML</p>
                <a href="https://www.mygreatlearning.com/certificate/EERUVZFC">View Certificate</a>
            </div>
        </div>
        <div className="training">
            <div className="training-right">
                <h2>03</h2>
                <h1>Front End Development - CSS</h1>
                <h3>Great Learning</h3>
                <p>Duration: 1 months</p>
                <p>Year: 2022</p>
                <p className='techused'>Skills: CSS</p>
                <a href="https://www.mygreatlearning.com/certificate/FAOQTVWS">View Certificate</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Certification