import React from 'react'
import './Expertise.css'

const Expertise = () => {
  return (
    <div className='services'>
        <div className="service-title">
            <h1>My Expertise</h1> 
        </div>
        <div className="service-cont">
            <div className="service">
                <h2>01</h2>
                <h1>Web <br /> Development</h1>
                <p>"Transforming ideas into dynamic websites that engage and inspire."</p>
            </div>
            <div className="service">
                <h2>02</h2>
                <h1>Java <br /> Development</h1>
                <p>"Building robust and scalable applications with the power of Java."</p>
            </div>
            <div className="service">
                <h2>03</h2>
                <h1>Fullstack <br /> Development</h1>
                <p>"Creating seamless digital experiences from front to back."</p>
            </div>
        </div>
    </div>
  )
}

export default Expertise