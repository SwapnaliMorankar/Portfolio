import React from 'react'
import './Sports.css'
import sport1 from '../../assets/sport1.jpg'
import sport2 from '../../assets/sport2.jpg'

const Sports = () => {
  return (
    <div class="outercard2">
    <div className="innercard2">
      <div class="circle2">
        <img src={sport1} alt="Image" />
      </div>
    </div>

    <div className="innercard2">
      <div class="circle2">
        <img src={sport2} alt="" />
      </div>
    </div>


  </div>
  )
}

export default Sports