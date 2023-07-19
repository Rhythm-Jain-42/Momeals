import React from 'react';
import './Fromleft.css';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Fromleft() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/FoodtypePage');
  }; 
  const donationhandleClick2 = () => {
    navigate('/donationdetailsform');
  }; 
  return (
    <div className="donation-caption m-4">
      
      <div className="first-half">FIGHT AGAINST<br />HUNGER, DONATING</div>
      <div className="second-half">
        FOOD TODAY
        <div className="underline"></div>
      </div>
      <section className="cause-description">
        <div className="mt-4">
          Join the community of change makers and make an impact on society for a good change.
        </div>
      </section>
      <div className="donate-buttons mb-3">
      <Row className="justify-content-center btnrow">
        <Col xs="auto" className="d-sm-flex justify-content-sm-start fromleftcolbtns">
          <Button className="fromleftbtn-1"  onClick={handleClick}>Give Food</Button>
        </Col>
        <Col xs="auto" className="d-sm-flex justify-content-sm-start fromleftcolbtns">
          <Button className="fromleftbtn-2"  onClick={donationhandleClick2} >
            Donate
          </Button>
        </Col>
      </Row>
        
     
    
      </div>
    </div>
  );
}

export default Fromleft;
