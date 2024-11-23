import React from 'react'
import './Travel.css'
import travel5 from '../../assets/travel5.jpg'

const Travel = () => {
  return (
    <div class="outercard">
      <div className="innercard">
        <div class="circle">
          <img src={travel5} alt="Image" />
        </div>
        <div class="rectangle">
          <p>Mahabaleshwar</p>
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={travel5} alt="" />
        </div>
        <div class="rectangle">
          <p>Tamhini Ghat</p>
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={travel5} alt="" />
        </div>
        <div class="rectangle">
          <p>Visapur Fort</p>
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={travel5} alt="" />
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