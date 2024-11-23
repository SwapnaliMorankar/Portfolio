import React from 'react'
import './Hackathon.css'
import SIH from '../../assets/sih.jpg'
import solution from '../../assets/solutionchallenge.png'
import hacksprint from '../../assets/hacksprint.jpg'
import hackforge from '../../assets/hackforge.jpg'
import mmcoe from '../../assets/mmcoe.jpg'
import ittech from '../../assets/ittech.jpg'
import flipkart from '../../assets/flipkart.png'
import invicta from '../../assets/invicta.jpg'

const Hackathon = () => {
  return (
    <div className='hackathon'>
        <div className="hack">
            <div className="hack-left">
                <img src={SIH} alt="photo" />
            </div>
            <div className="hack-right">
                <h2>01</h2>
                <h1>Smart India Hackathon</h1>
                <h3>Organizer: ACM and CODE clubs, MMCOE</h3>
                <p>Rank: 6th (Internal Hackathon)</p>
                <p>Place: Pune, Maharashtra</p>
                <p>Team size: 6</p>
                <p>Year: 2023</p>
                <a href="https://drive.google.com/file/d/1m8dsGkPk1Bi1iDioGuuYuV0s9gwwzTqP/view?usp=sharing">View Certificate</a>
            </div>
        </div>

        <div className="hack">
            <div className="hack-left">
                <img src={solution} alt="photo" />
            </div>
            <div className="hack-right">
                <h2>02</h2>
                <h1>Solution Challenge</h1>
                <h3>Organizer: Google</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Team size: 4</p>
                <p>Year: 2024</p>
                <a href="https://drive.google.com/file/d/1CL0DEe2kzwxBqwsDg5wsf5GU5T4vBKTO/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

        <div className="hack">
           <div className="hack-left">
                <img src={hacksprint} alt="photo" />
            </div>
            <div className="hack-right">
                <h2>03</h2>
                <h1>Hacksprint</h1>
                <h3>Organizer: ISTE, MMCOE</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Team size: 6</p>
                <p>Year: 2024</p>
                <a href="https://drive.google.com/file/d/1vrgs5iIDJI0JjnsCipMKhzrDEVxTGpVT/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

        <div className="hack">
           <div className="hack-left">
                <img src={hackforge} alt="photo" />
            </div>
            <div className="hack-right">
                <h2>04</h2>
                <h1>Hackforge</h1>
                <h3>Organizer: Modern College of Engg</h3>
                <p>Rank: 1st</p>
                <p>Place: Pune, Maharashtra</p>
                <p>Team size: 4</p>
                <p>Year: 2024</p>
                <a href="https://drive.google.com/drive/folders/1maeuAH85xGUAL7KIS5jLOLS8UVPUezPp?usp=drive_link">View Certificate</a>
            </div>
        </div>

        <div className="hack">
           <div className="hack-left">
                <img src={invicta} alt="photo" />
            </div>
            <div className="hack-right">
                <h2>05</h2>
                <h1>Invicta 23</h1>
                <h3>Organizer: Modern College of Engg</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Team size: 2</p>
                <p>Year: 2023</p>
                <a href="https://drive.google.com/file/d/1pkmjhe9U-hPMwUJ0YoZUCXpbcSNAvuV3/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

        <div className="hack">
           <div className="hack-left">
                <img src={ittech} alt="photo" />
            </div>
            <div className="hack-right">
                <h2>06</h2>
                <h1>Code Decipher</h1>
                <h3>Organizer: IT Tech, MMCOE</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Team size: 2</p>
                <p>Year: 2023</p>
                <a href="https://drive.google.com/file/d/1yj-777wFISjGZnCg-aSbHx2TNtar_-AM/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

        <div className="hack">
           <div className="hack-left">
                <img src={flipkart} alt="photo" />
            </div>
            <div className="hack-right">
                <h2>07</h2>
                <h1>Flipkart Grid</h1>
                <h3>Organizer: Flipkart</h3>
                <p>Place: Pune, Maharashtra</p>
                <p>Team size: 1</p>
                <p>Year: 2023</p>
                <a href="https://drive.google.com/file/d/1ESE0lxnElawtWtAXBs7dVAf8lxWXVJgN/view?usp=drive_link">View Certificate</a>
            </div>
        </div>

    </div>
  )
}

export default Hackathon