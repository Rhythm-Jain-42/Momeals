import React, { useState ,useEffect} from 'react';
import {  Button, Row, Col, Card , InputGroup ,Form} from 'react-bootstrap';
import './Donationdetailsformpage.css';
import donationdetailsformarrow from '../Images/Arrow 5.png'
import Donorverifyimg from '../Images/funds donation 1 (1).png'
import { useNavigate } from 'react-router-dom';
const Donationdetailsformpage = () => {
    useEffect(() => {
        document.body.classList.add('donationdetailsformcustom-body');
        return () => {
          document.body.classList.remove('donationdetailsformcustom-body');
        };
      }, []);
      //payment method
      const paymentMethods = [
        'Credit Card',
        'Debit Card',
        'PayPal',
        'Google Pay',
        'Bank Transfer',
        
      ];
      const [payment,setpayment]=useState('')
      const paymentChange=(event)=>{
        setpayment(event.target.value)
         }
  return (
    <div className='donationdetailsform'>
      
    <img className='donationdetailsformarrow' src={donationdetailsformarrow}/>
    
    <div className="container">
      
      <Row id="donationdetailsformrow ">
      
        {/* Left column */}
        <p className="donationdetailsformh6 mt-3">DONATION  DETAILS</p>
        <Col lg={6} md={5} sm={12}>
          <div className="card-body ">
            <div className="form">
              
              <form className="donationdetailsformform-class">
              <input type="text" id="donationdetailsforminp" placeholder="Your Name" />
              <input type="text" id="donationdetailsforminp" placeholder="Your Mobile No." />
              <input type="text" id="donationdetailsforminp" placeholder="City/State" />
              <input type="email" id="donationdetailsforminp" placeholder="Email" />
              <input type="number" id="donationdetailsforminp" placeholder="Amount" />
              <div className="donationdetailsforminput-with-dropdown">
                    <InputGroup style={{width:"100%"}}>
                
                  <select id="donationdetailsforminp"  className="donationdetailsformdropdown-select" onChange={paymentChange}>

                      <option value="Google pay">selecty type</option>
                      {paymentMethods.map((payments) => (
                           <option key={payments} value={payments}>
                           <h5  className="hidden-select">{payments}</h5>
                         </option>
                      ))}
                    </select>
                    <span className="polygon-dropdown-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                    <path d="M13 15.0136L0.886191 0.00508413L25.1349 0.0221231L13 15.0136Z" fill="black"/>
                    </svg>
                    </span>
                    </InputGroup>
                </div>
               <Form.Group className="mt-4 " controlId="donationdetailsformcheckbox" id="donationdetailsformcheckbox">
               <Form.Check inline className="donationdetailsformcheckinfo" label="By checking the box below, you acknowledge that you have read, understood, and agree to abide by the terms and conditions outlined above." />
               </Form.Group>
               {/* Submit button */}
               <Row className="justify-content-center justify-content-sm-start btnrow">
               <Col className="col-auto">
               <div className="text-center mt-5 mb-4">
          <Button className="donationdetailsformbtn-submit w-10 h-90" id="donationdetailsformbtn" >Proceed</Button>
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
  )
}

export default Donationdetailsformpage
