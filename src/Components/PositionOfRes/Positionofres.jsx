import React, { useState } from 'react';
import gdsc from '../../assets/gdsc.png';
import gdg from '../../assets/gdg.jpg';
import newImage1 from '../../assets/five.png';
import newImage2 from '../../assets/Committee.png';
import newImage3 from '../../assets/one.jpg';
import newImage4 from '../../assets/four.png';
import newImage5 from '../../assets/two.jpg';
import newImage6 from '../../assets/three.jpg';
import './PositionOfRes.css';

const Positionofres = () => {
  const [expandedStates, setExpandedStates] = useState([false, false, false]);

  const toggleExpand = (index) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className='positions'>
      {/* Position 1 */}
      <div className="position">
        <div className="position-left">
          {expandedStates[0] ? (
            <div className="expanded-images">
              <img src={newImage1} alt="New Image 1" className="expanded-image" />
              <img src={newImage2} alt="New Image 2" className="expanded-image" />
            </div>
          ) : (
            <img src={gdsc} alt="GDSC logo" />
          )}
        </div>
        <div className="position-right">
          <h2>01</h2>
          <h1>LEAD at Institute</h1>
          <h3>Google Developer Student Clubs [GDSC]</h3>
          <p>Place: Pune, Maharashtra</p>
          <p>Year: 2023-2024</p>
          <a href="https://drive.google.com/file/d/19dXkoYO6JBNiRM7CviiVNNtf6tGSV34T/view?usp=drive_link">View Certificate</a>
          <br />

          {expandedStates[0] && (
            <div className="extra-details">
              <ul>
                <li>As the leader of GDSC MMCOE, I successfully organized approximately 12 events 
                    throughout the year, fostering collaborations with various colleges.</li>
                <li>My role involved refining and enhancing our team's collaboration and event coordination skills.</li>
                <li>Through effective leadership and teamwork, I facilitated an engaging environment for participants and 
                    stakeholders alike.</li>
                <li className='techused'>Skills: Leadership, Communication, Management, Organization.</li>
              </ul>
            </div>
          )}

          <button onClick={() => toggleExpand(0)}>
            {expandedStates[0] ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Position 2 */}
      <div className="position">
        <div className="position-left">
          {expandedStates[1] ? (
            <div className="expanded-images">
              <img src={newImage3} alt="New Image 1" className="expanded-image" />
              <img src={newImage4} alt="New Image 2" className="expanded-image" />
            </div>
          ) : (
            <img src={gdg} alt="GDG logo" />
          )}
        </div>
        <div className="position-right">
          <h2>02</h2>
          <h1>Student Advisor</h1>
          <h3>Google Developer Groups on Campus [GDG]</h3>
          <p>Place: Pune, Maharashtra</p>
          <p>Year: 2024-2025</p>
          <a href="https://example.com">View Certificate</a>
          <br />

          {expandedStates[1] && (
            <div className="extra-details">
              <ul>
                <li>As a Student Advisor for Google Developer Groups on Campus (GDG), I actively support this 
                    year's committee by sharing my experiences and insights.</li>
                <li>I offer guidance on effective event planning and execution.</li>
                <li>By mentoring newer members, I help to enhance their skills in collaboration and communication.</li>
                <li className='techused'>Skills: Leadership, Communication, Management, Organization.</li>
              </ul>
            </div>
          )}

          <button onClick={() => toggleExpand(1)}>
            {expandedStates[1] ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Position 3 */}
      <div className="position">
        <div className="position-left">
          {expandedStates[2] ? (
            <div className="expanded-images">
              <img src={newImage5} alt="New Image 1" className="expanded-image" />
              <img src={newImage6} alt="New Image 2" className="expanded-image" />
            </div>
          ) : (
            <img src={gdsc} alt="GDSC logo" />
          )}
        </div>
        <div className="position-right">
          <h2>03</h2>
          <h1>Design and Content Team Member</h1>
          <h3>Google Developer Student Clubs [GDSC]</h3>
          <p>Place: Pune, Maharashtra</p>
          <p>Year: 2022-2023</p>
          <a href="https://drive.google.com/file/d/1YLiCR48B4yl0kLgq0L7OQfYp5wudbUiC/view?usp=drive_link">View Certificate</a>
          <br />

          {expandedStates[2] && (
            <div className="extra-details">
              <ul>
                <li>I developed and implemented innovative content strategies for GDSC MMCOE, resulting in the 
                    creation of over 10 engaging visual assets and presentations.</li>
                <li>These efforts contributed to a 15% increase in event attendance and significantly enhanced 
                    participant satisfaction.</li>
                <li>By focusing on creative and impactful content, I helped elevate our events.</li>
                <li className='techused'>Skills: Canva, Figma.</li>
              </ul>
            </div>
          )}

          <button onClick={() => toggleExpand(2)}>
            {expandedStates[2] ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Positionofres;
