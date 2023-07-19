import React, { useState } from 'react';
import {  Button, Row, Col, Card , InputGroup ,Form} from 'react-bootstrap';

import './Fooddonarpage.css';
import arrow4image from '../Images/Arrow 5.png'
import Donorverifyimg from '../Images/Donor verify 1.png'
import { useNavigate } from 'react-router-dom';
const Fooddonarpage = () => {
  const navigate = useNavigate();
  const fooddonarinfoClick = () => {
    navigate('/Thanku');
  }; 
  React.useEffect(() => {
    document.body.classList.add('donarcustom-body');
    return () => {
      document.body.classList.remove('donarcustom-body');
    };
  }, []);
  return (
    <div className='donarformpage'>
      
    <img className='donararrowimage' src={arrow4image}/>
    
    <div className="container">
      
      <Row id="donarrow ">
      
        {/* Left column */}
        <p className="donarh6 mt-3">FOOD DONOR DETAILS</p>
        <Col lg={6} md={5} sm={12}>
          <div className="card-body ">
            <div className="form">
              
              <form className="form-class">
              <input type="text" id="donerinp" placeholder="Your Name" />
              <input type="text" id="donerinp" placeholder="Live Location" />
              <input type="text" id="donerinp" placeholder="Mobile Number" />
              <input type="text" id="donerinp" placeholder="Enter OTP" />

               
               <Form.Group className="mt-4 " controlId="donarcheckbox" id="donarcheckbox">
               <Form.Check inline className="donarcheckinfo" label="I assure that food quality and hygiene is maintained and Information that I provided is true." />
               </Form.Group>
               {/* Submit button */}
               <Row className="justify-content-center justify-content-sm-start donarbtnrow">
               <Col className="col-auto">
               <div className="text-center mt-5 mb-4">
          <Button className="donarbtn-submit w-10 h-90" id="donarbtn2" onClick={fooddonarinfoClick}>Submit</Button>
        </div>
               </Col>
          
               </Row>
     
              </form>
            </div>
          </div>
        </Col>
        
         {/* Spacing */}
         <Col lg={1} md={1} sm={12}></Col>
         <Col lg={5} md={4} sm={12}>
       <img className="Donorverifyimg" src={Donorverifyimg} width="400px"/>
       </Col>
     
      </Row>
    </div>
    </div>
  );
};

export default Fooddonarpage;
