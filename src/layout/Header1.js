import React from 'react'
import heart from '../Components/Images/heart.png'
const Header1 = () => {
  return (
    <div className="subHeader-s  d-flex justify-content-center align-items-center pt-2 " style={{height:30, margin:0,backgroundColor:'#010101'}}>
          
    <h6   style={{fontWeight: 600,color:"white",fontSize:"10px"}}>
      <img 
        src={heart} width="15px"
        alt=""
      />
      <span className='p-0'>One Hand For Others</span>
    </h6>
    </div>
  )
}

export default Header1