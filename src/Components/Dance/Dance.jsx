import React from 'react'
import './Dance.css'
import dance1 from '../../assets/dance1.jpg'
import dance2 from '../../assets/dance2.jpg'
import dance3 from '../../assets/dance3.jpg'
import dance4 from '../../assets/dance4.jpg'

const Dance = () => {
  return (
    <div class="outercard">
      <div className="innercard">
        <div class="circle">
          <img src={dance1} alt="Image" />
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={dance3} alt="" />
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={dance2} alt="" />
        </div>
      </div>

      <div className="innercard">
        <div class="circle">
          <img src={dance4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dance