import React from 'react'
import './Travel.css'
import travel1 from '../../assets/travel1.jpg'
import travel2 from '../../assets/travel2.jpg'
import travel3 from '../../assets/travel3.jpg'
import travel4 from '../../assets/travel4.jpg'
import travel5 from '../../assets/travel5.jpg'

const Travel = () => {
  return (
    <div class="outercard">
      <div className="innercard">
        <div class="circle">
          <img src={travel1} alt="Image" />
        </div>
        <div class="rectangle">
          <p>Mahabaleshwar</p>
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={travel2} alt="" />
        </div>
        <div class="rectangle">
          <p>Tamhini Ghat</p>
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={travel3} alt="" />
        </div>
        <div class="rectangle">
          <p>Visapur Fort</p>
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={travel4} alt="" />
        </div>
        <div class="rectangle">
          <p>Khadakwasla</p>
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={travel5} alt="" />
        </div>
        <div class="rectangle">
          <p>Sinhgad Fort</p>
        </div>
      </div>


    </div>
  )
}

export default Travel