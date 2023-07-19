import React,{useState} from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from '../Images/arrow-icon.png';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import '../Homepage/SloganCard3.css'
const SloganCard3 = () => {
    const data=[
        {dta:"Donate and Save Lives"},
        {dta:"Become Food Warrior"},
        {dta:"Eat Together,Share Together"}
    ]
    const sliderRef = React.useRef(null);
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200, // Extra-large screens
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992, // Large screens
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576, // iPad mini and similar small screens
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    };
     const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };
  
  return (
    <div className="slide-contain">
          <Slider {...settings} ref={sliderRef}>
        {data.map((obj, index) => (
          <div key={index} className="slogan3card-row p-2">
            <Card
              className="slogan3card-text2nd m-md-1 m-lg-2 p-sm-2"
              id="slogan3card-text2nd"
              style={{ background: "#172B0D", position: "relative"}}
            >
              <p className="slogan3card-text2ndp m-3" style={{ color: "white" }}>{obj.dta}</p>
              <div style={{ position: "absolute", bottom: "0px", right: "10px" }}>
                <img src={arrow} alt="Arrow Icon" />
              </div>
             
            </Card>
          </div>
          
        ))}
       </Slider>
       <div className="slide-buts p-2 ">
            <Button className="slider-butn"  id="slid-btns" onClick={slidePrev}>
              <FaAngleLeft />
            </Button>
            <Button className="slider-butn"  id="slid-btns" onClick={slideNext}>
              <FaAngleRight />
            </Button>
          </div>
          </div>
          
  )
}

export default SloganCard3