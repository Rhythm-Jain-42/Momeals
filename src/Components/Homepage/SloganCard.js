import React from "react";
import { useNavigate } from "react-router-dom";
import  '../Homepage/homeStyle.css';


export const SloganCard = ({card,src,slogan,para, destination}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(destination);
  }; 
 
  
  return (
    <div className={card} onClick={handleClick}>
      <img src={src} className="img-fluid" alt="card1" />
      <div className="slogancard-text mx-2">
      <h5 className="slogancard-heading my-2" >{slogan}</h5>
      <p className="slogancard-para">{para}</p> 
      </div> 
    </div>
  );
};
