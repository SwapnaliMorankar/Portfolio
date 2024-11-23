import React from 'react'
import './Travel.css'
import travel1 from '../../assets/travel1.jpg'
import travel2 from '../../assets/travel2.jpg'
import travel3 from '../../assets/travel3.jpg'
import travel4 from '../../assets/travel4.jpg'
import travel5 from '../../assets/travel5.jpg'

const Travel = () => {
  return (
    <div className="outercard3">
      <div className="innercard3">
        <div className="circle3">
          <img src={travel1} alt="Image" />
        </div>
        <div className="rectangle3">
          <p>Mahabaleshwar</p>
        </div>
      </div>

      <div className="innercard3">
        <div className="circle3">
          <img src={travel2} alt="" />
        </div>
        <div className="rectangle3">
          <p>Tamhini Ghat</p>
        </div>
      </div>

      <div className="innercard3">
        <div className="circle3">
          <img src={travel3} alt="" />
        </div>
        <div className="rectangle3">
          <p>Visapur Fort</p>
        </div>
      </div>

      <div className="innercard3">
        <div className="circle3">
          <img src={travel4} alt="" />
        </div>
        <div className="rectangle3">
          <p>Khadakwasla</p>
        </div>
      </div>

      <div className="innercard3">
        <div className="circle3">
          <img src={travel5} alt="" />
        </div>
        <div className="rectangle3">
          <p>Sinhgad Fort</p>
        </div>
      </div>
    </div>
  )
}

export default Travel
