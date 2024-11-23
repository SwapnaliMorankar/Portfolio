import React from 'react'
import './Interior.css'
import int1 from '../../assets/int1.jpg'
import int2 from '../../assets/int2.jpg'
import int3 from '../../assets/int3.jpg'
import int4 from '../../assets/int4.jpg'
import int5 from '../../assets/int5.jpg'

const Interior = () => {
  return (
    <div class="outercard">
      <div className="innercard1">
        <div class="circle1">
          <img src={int1} alt="Image" />
        </div>
      </div>

      <div className="innercard1">
        <div class="circle1">
          <img src={int2} alt="" />
        </div>
      </div>

      <div className="innercard1">
        <div class="circle1">
          <img src={int3} alt="" />
        </div>
      </div>

      <div className="innercard1">
        <div class="circle1">
          <img src={int4} alt="Image" />
        </div>
      </div>

      <div className="innercard1">
        <div class="circle1">
          <img src={int5} alt="" />
        </div>
      </div>




    </div>
  )
}

export default Interior