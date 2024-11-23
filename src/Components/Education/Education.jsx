import React from 'react'
import './Education.css'
import global from '../../assets/global.jpg'
import nirmal from '../../assets/nirmal1.jpg'
import mmcoe from '../../assets/mmcoe.jpg'

const Education = () => {
  return (
    <div className='educations'>
        <div className="education">
            <div className="education-left">
                <img src={mmcoe} alt="photo" />
            </div>
            <div className="education-right">
                <h2>01</h2>
                <h1>Bachelors of Engineering</h1>
                <h3>Savitribai Phule Pune University</h3>
                <p>Branch: Computer Science</p>
                <p>Place: Pune, Maharashtra</p>
                <p>Aggregate Marks: 8.0 cgpa</p>
                <p>Year: 2021-2025</p>
                <a href="https://drive.google.com/drive/folders/1maeuAH85xGUAL7KIS5jLOLS8UVPUezPp?usp=drive_link">View Marksheet</a>
            </div>
        </div>
        <div className="education">
            <div className="education-left">
                <img src={global} alt="photo" />
            </div>
            <div className="education-right">
                <h2>02</h2>
                <h1>Higher Education - Class 12th</h1>
                <h3>Global Public School and Junior College</h3>
                <p>Board: HSC</p>
                <p>Place: Nashik, Maharashtra</p>
                <p>Aggregate Marks: 90.0%</p>
                <p>Year: 2020-2021</p>
                <a href="https://drive.google.com/file/d/17u-7BnoiAcnUt_VDw2KDeLFaj7OyLD-G/view?usp=drive_link">View Marksheet</a>
            </div>
        </div>
        <div className="education">
            <div className="education-left">
                <img src={nirmal} alt="photo" />
            </div>
            <div className="education-right">
                <h2>03</h2>
                <h1>Secondary Education - Class 10th</h1>
                <h3>Nirmal International School</h3>
                <p>Board: CBSE</p>
                <p>Place: Pachora, Maharashtra</p>
                <p>Aggregate Marks: 94.4%</p>
                <p>Year: 2018-2019</p>
                <a href="https://drive.google.com/file/d/1A9Hl9ID87ylRDERe13nfNgSQ7NpHsO2X/view?usp=drive_link">View Marksheet</a>
            </div>
        </div>
    </div>
  )
}

export default Education