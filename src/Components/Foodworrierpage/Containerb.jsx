import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Col, Row, Container } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import SelectTypeOfFood1 from '../Images/Select Type Of Food 2 (1).png'
import SelectTypeOfFood2 from '../Images/Food Details Form 1 (1).png'
import SelectTypeOfFood3 from '../Images/Food Details Form 1 (1).png'
import './containerb.css';

function Containerb() {
  const images = [
    {
      id: "A",
      caption: 'Select Type Of Food',
      src: SelectTypeOfFood1,
    },
    {
      id: "B",
      caption: 'Fill Details Of Food',
      src:SelectTypeOfFood2,
    },
    {
      id: "C",
      caption: 'Food Warrior will verify quality and will donate',
      src: SelectTypeOfFood3,
    },
    // Add more objects to the images array if needed
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [activeButton, setActiveButton] = useState(images[0].id);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => {
      const image = images[next];
      setCurrentImage(image);
      setActiveButton(image.id);
    },
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

  useEffect(() => {
    if (sliderRef.current) {
      const index = images.findIndex((img) => img.id === activeButton);
      sliderRef.current.slickGoTo(index);
    }
  }, [activeButton, images]);

  const getButtonLabel = (index) => {
    return String.fromCharCode(65 + index);
  };

  const handleButtonClick = (id) => {
    const image = images.find((img) => img.id === id);
    if (image) {
      setCurrentImage(image);
      setActiveButton(id);
    }
  };

  return (
    <div className="containerb-wrapper">
      {/* Heading */}
      <h3 className="pt-5 containerb-wrapperh3">
        <span className="containerb-heading-color">Saving Food </span> is Easy as{' '}
        <span>
          <span style={{ color: "#ED4B4B" }}>A</span>-
          <span style={{ color: "#ED4B4B" }}>B</span>-
          <span style={{ color: "#ED4B4B" }}>C</span>
        </span>
        {/* Render buttons */}
        {images.map((image) => (
          <span className="containerb-header-alpha" key={image.id}>
            {getButtonLabel(image.caption)}
          </span>
        ))}
      </h3>

      {/* Slider component */}
      <Slider {...settings} ref={sliderRef}>
        {/* Render slides */}
        {images.map((image) => (
          <div
            className={`containerb-wrapperimage-list1 ${currentImage.id === image.id ? 'active' : ''}`}
            key={image.id}
          >
            <Container className="mt-lg-5">
              <Row className="justify-content-center align-items-center text-center" style={{ height: "100%" }}>
                <Col xs={12} md={8}>
                  <div>
                    {/* Slide caption */}
                    <p className='containerb-wrapperp2'>
                      <span className="containerb-header-alpha">{image.id}.</span> {image.caption}
                    </p>
                    {/* Slide image */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img className='containerb-wrapperimg' src={image.src} alt={image.alt} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </Slider>

      <Container>
        <Row className="justify-content-center align-items-center text-center" style={{ height: "100%" }}>
          <Col xs={12} md={8}>
            <div className="containerbbutton-wrapper gap-2">
              {/* Render buttons */}
              {images.map((image, index) => (
                <Button
                  key={image.id}
                  className={`containerbslider-buttons m-2 ${activeButton === image.id ? 'active' : ''}`}
                  onClick={() => handleButtonClick(image.id)}
                  style={{ backgroundColor: activeButton === image.id ? '#C7F2AB' : 'transparent', color: "black" }}
                >
                  {getButtonLabel(index)}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Containerb;
