import React, { useEffect } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

export const SloganCard2 = ({src,title}) => { 
  
  return (
    <div className="Slogancard">
          <div className="cardh3">
            <img
              src={src}
              alt=""
              width="100px"
            />
            <h4 className="px-3">{title}</h4>
          </div>
           <p className="para-round">
           <KeyboardArrowRightIcon/>
          </p>  
        </div>
  )
}

export const SloganCard2Carousel = ({ slogans }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slogans.length - 1 : prevIndex - 1
    );
  };

 

  return (
    <div className="cardbottom pb-5"style={{margin:0}} >
      <div className="carousel-container" style={{display:"flex", margin:0, width:"360px"}}>
        <ArrowBackIosNewIcon onClick={handlePrev} style={{marginTop:"100px",marginLeft:"25px"}}/>
        <SloganCard2
        style={{width:"100px"}}
          src={slogans[currentIndex].src}
          title={slogans[currentIndex].title}
        />
        <ArrowForwardIosIcon onClick={handleNext} style={{marginTop:"100px", marginRight:"10px"}}/>
      </div>
    </div>
  );
};
