import React,{useState} from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from '../Images/arrow-icon.png';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import '../Homepage/SloganCard4.css'
const SloganCard4 = () => {
    const data=[
        {
            testminals:"Testimonials",
            dta:"Momeals has been instrumental in raising awareness of hunger issues within our community! ",
            name:"Karan K."
        },
        {
            testminals:"Testimonials",
            dta:"Thanks to Momeal's field strategy, restaurants, hotels, and occasions are now much more likely to donate leftover food instead of throwing it away!",
            name:"Shahin K."
        },
        {
            testminals:"Testimonials",
            dta:"I appreciate how quickly Momeal's responds when I submit pickup requests for leftover food! They always do a great job!",
            name:"Shahin K."
        }
    ]
    const sliderRef = React.useRef(null);
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200, // Extra-large screens
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 992, // Large screens
          settings: {
            slidesToShow: 1,
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
    <div className="slogancard4slider-container mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 p-3 ">
          <Slider {...settings} ref={sliderRef}>
          {data.map((obj, index) => (
  <div key={index} className="slogancar4-row p-md-5">
    <Card className="slogancard4-3rd " id="slogancar4-3rd">
      <div>
        <p className='cardpara1' id="cardpara1">{obj.testminals}</p><br/>
      </div>
      <div className="middle-text-container">
        <p className="cardpara2" id="cardpara2">"{obj.dta}'</p>
      </div>
      <div  className='mt-5'>
        <p className='cardpara3 mt-5 ' id="cardpara3" style={{ position: "absolute", bottom: 0, right: 0 ,marginTop:"5px"}}>{obj.name}</p>
      </div>
      
    </Card>
  </div>
))}

       </Slider>
       <div className="slogancard4sliding-buttons mb-3">
            <Button className="slogancard4slider-button" id="slogancard4slider-btn" onClick={slidePrev}>
              <FaAngleLeft />
            </Button>
            <Button className="slogancard4slider-button"  id="slogancard4slider-btn" onClick={slideNext}>
              <FaAngleRight />
            </Button>
          </div>
          </div>
  )
}

export default SloganCard4