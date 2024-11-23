import React from 'react'
import './About.css'
import photo from '../../assets/photo.jpg'


const About = () => {
  return (
    <div className='about'>
        <div className="about-title" >
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={photo} alt="My Photo" />
            </div>
            <div className="about-right">
                    <p>
                    I am a Full Stack Java Developer and final-year Computer Science student with 
                    hands-on experience in Java technologies, full stack development, and system implementation.  
                    </p> 
                    <p>Proficient in Spring, Spring Boot, Java, JavaScript, React.js, and MySQL, with a 
                        solid background in both frontend development and backend integration.
                    </p>
                    <p>Led multiple sponsored and university projects, gaining valuable problem-solving 
                        and project management experience. Professional background includes web development 
                        roles at Rajmudra Educational Consultancy and Perpetual Invention. 
                    </p>
                    <p>Developed strong team management and communication skills through leadership roles at GDSC MMCOE, 
                        and am eager to apply my expertise in a challenging work environment.
                    </p>
            </div>
        </div>
        <div className="about-achievement">
        <div className="about-achieve">
                <h1>10+</h1>
                <p>DEVELOPMENT PROJECTS</p>
            </div>
            <hr />
            <div className="about-achieve">
                <h1>12+</h1>
                <p>PROVEN SKILLS</p>
            </div>
            <hr />
            <div className="about-achieve">
                <h1>5+</h1>
                <p>PROGRAMMING LANGUAGES</p>
            </div>
        </div>
    </div>
  )
}

export default About