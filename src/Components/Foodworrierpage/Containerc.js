import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Containerc.css';
import pickup1 from '../Images/pickup 1.png'
import giveaway from '../Images/GIVE AWAY 1.png'
import Distribution from '../Images/Distribution.png'
const Containerc = () => {
  // Array of objects containing the data for each section
  const sections = [
    {
      id:1,
      imageSrc: pickup1,
      heading: 'SUBMIT FOOD PICKUP REQUEST',
      text:"Donors",
      description:
        'Individuals or businesses with leftover food can use the Momeals platform to request pick up. They give information about the food, such as the type, quantity, and pickup place.',
    },
    {
      id:2,
      imageSrc:giveaway,
      heading: 'Pick-Up And Verification',
      text:"Food Warriors",
      description:
        'We take the verification procedure very seriously in order to verify the safety and quality of the donated food. Donors must give personal information in order to be verified.',
    },
    {
      id:3,
      imageSrc: Distribution,
      heading: 'Distribution',
      text:"Delivery",
      description:
        "Once the pickup request has been granted, our committed team of volunteers will collect the food from the donor's location and distribute it to people in need.",
    },
  ];

  return (
    <div className="containerc pt-3 mt-4">
      <Container>
        <center>
          <h1 className='pt-3'>HOW IT WORK ?</h1>
        </center>
        {sections.map((section, index) => (
          <Row key={index} className='pb-3 pb-lg-5 pb-mg-5  pt-4 text-center'>
            {/* First Column */}
            <Col
              lg={6}
              md={6}
              id="containerccol1"
              className={index % 2 === 0 ? 'order-lg-1 order-md-1 order-2' : 'order-lg-2 order-md-1 order-2'}
            >
              <img className='containercimg mb-3' src={section.imageSrc} alt="Distribution" />
              <p id="containerc-para1">
                <span id="containerc-span1" style={{ fontFamily: 'Inter', fontWeight: '700', color: '#044EAF' }}>
                  {section.text}
                </span>
                :{section.description}
              </p>
            </Col>
            {/* Second Column */}
            <Col
              lg={6}
              md={6}
              id="containerccol2"
              className={index % 2 === 0 ? 'order-lg-2' : 'order-lg-1 order-md-1 order-1'}
            >
              <p id="containercdonor" style={{ fontFamily: 'Inter', color: "#067A46" }}>
                <span id="containerc-span" style={{ color: "red" }}>{section.id}.</span>
                {section.heading}
              </p>
              <p id="containerc-para2">
                <span id="containerc-span1" style={{ fontFamily: 'Inter', fontWeight: '700', color: '#044EAF' }}>
                  {section.text}
                </span>
                :{section.description}
              </p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Containerc;
