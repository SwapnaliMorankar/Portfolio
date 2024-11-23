import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  // Array to store expanded states for each experience div
  const [expandedStates, setExpandedStates] = useState([false, false, false, false]);

  const toggleExpand = (index) => {
    // Toggle the specific index in the expandedStates array
    setExpandedStates((prevStates) => 
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className='experience'>
      <div className="first">

        {[0].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>01</h2>
            <h1>Rajmudra Educational Consultancy</h1>
            <h3>Web Development Intern</h3>
            <p>Place: Pune, Maharashtra</p>
            <p>Mode: Work from Office</p>
            <p>Year: 2023</p>
            <p>Duration: 3 Months</p>
            <a href="https://drive.google.com/file/d/1i3Ve6wcQIlxPb2Z-VmFDUBl4x6K37XQP/view?usp=drive_link">View Certificate</a>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li>Developed and enhanced the company’s portfolio website, designed to guide students on a 
                    variety of online distance education courses from different universities.</li>
                    <li>Collaborated with a teammate to deliver the portfolio website from start to finish, 
                completing the project 20% ahead of schedule. Integrated SMTP.js for email functionality and 
                chatbot features, boosting user engagement and support efficiency by 30%.</li>
                    <li className='techused'>Technologies used: React.js, HTML, CSS, JavaScript, Bootstrap, Chatbot API, SMTP.js API, 
                    Git/GitHub, Canva.</li>
                    <li>Website URL: <a href="https://edurec.in/">https://edurec.in/</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

        {[1].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>02</h2>
            <h1>Perpetual Invention</h1>
            <h3>React.js Intern</h3>
            <p>Place: Pune, Maharashtra</p>
            <p>Mode: Work from Home</p>
            <p>Year: 2023</p>
            <p>Duration: 6 Months</p>
            <a href="https://drive.google.com/file/d/1ptKTCC6Cef6MqqpzipsWSgO9bFI0Drrz/view?usp=drive_link">View Certificate</a>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li>Collaborated within a 5-member team to develop a web application using React.js, 
                        achieving 100% project completion on schedule.</li>
                    <li>Helped build an e-commerce platform for the fashion industry, leading to a 15% increase 
                        in user engagement and a 10% boost in sales.</li>
                    <li className='techused'>Technologies used: React.js, HTML, CSS, JavaScript, Bootstrap, Git/GitHub, 
                        Figma.</li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

      </div>

      <div className="second">

        {[2].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>03</h2>
            <h1>IBM</h1>
            <h3>Web Development Intern</h3>
            <p>Place: Pune, Maharashtra</p>
            <p>Mode: Virtual</p>
            <p>Year: 2023</p>
            <p>Duration: 1.5 Months</p>
            <a href="https://drive.google.com/file/d/1Cwbauz_t7oKmc_pzsbqbCAzTfFQuVbHs/view?usp=drive_link">View Certificate</a>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li>Completed a 6-week virtual internship, gaining extensive hands-on experience and 
                        enhancing frontend development skills by 40%.</li>
                    <li>Developed and submitted a clone website project, showcasing proficiency in web 
                        development and strong attention to detail.</li>
                    <li>Increased coding efficiency and project management skills, delivering the project 
                        10% ahead of schedule.</li>
                    <li className='techused'>Technologies used: HTML, CSS, JavaScript, Bootstrap, Git/GitHub.</li>
                    <li>Project URL:  <a href="https://swapnalimorankar.github.io/ninelives-clone/Home.html">NineLives Clone</a> </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

        {[3].map((index) => (
          <div key={index} className={`exp ${expandedStates[index] ? 'expanded' : ''}`}>
            <h2>04</h2>
            <h1>AICTE Eduskills Internship</h1>
            <h3>AI/ML Intern</h3>
            <p>Place: Pune, Maharashtra</p>
            <p>Mode: Virtual</p>
            <p>Year: 2022-2023</p>
            <p>Duration: 3 Months</p>
            <a href="https://drive.google.com/file/d/1xygaBFLMAWoggYjKmW-MQVcogmopnIr4/view?usp=drive_link">View Certificate</a>

            {expandedStates[index] && (
              <div className="extra-details">
                <ul>
                    <li>Completed an AI/ML internship at EduSkills, where I advanced my knowledge in artificial 
                        intelligence and machine learning through structured coursework.</li>
                    <li className='techused'>Skills used: Artificial Intelligence and Machine Learning </li>
                </ul>
              </div>
            )}
            <br />
            <button onClick={() => toggleExpand(index)}>
              {expandedStates[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Experience;
