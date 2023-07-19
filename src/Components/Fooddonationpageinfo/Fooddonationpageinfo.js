import React, { useState } from 'react';
import {  Button, Row, Col, Card , InputGroup ,Form} from 'react-bootstrap';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './Fooddonationpageinfo.css';
import arrow4image from '../Images/Arrow 4.png'
import { useNavigate } from 'react-router-dom';
const Fooddonationpageinfo = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [timeInputValue, setTimeInputValue] = useState('12:00');
  const now = new Date();
  const today = now.toISOString().split('T')[0];
//donarclick
const navigate = useNavigate();
const donarhandleClick = () => {
  navigate('/fooddonarpage');
}; 
  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  const handleTimeInputChange = (event) => {
    setTimeInputValue(event.target.value);
  };
  // pickup location data
  const [selectedCity, setSelectedCity] = useState('Amritsar');
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    if (selectedCity === 'Amritsar') {
      setSelectedCity(selectedCity);
    } else {
      setSelectedCity('Amritsar'); // Reset to empty string if a different city is selected
    }
  };
  const cities = ['Hyderabad', 'Agra', 'Bengaluru', 'Kolkata'];

  
  //cooking time data
  const [cooktimedatalist,setcooktimedatalist]=useState('')
  const cooktimedata=['2 hours ago','3 hours ago','4 hours ago','6 hours ago','9+ hours ago']
 const cooktimedataChange=(event)=>{
setcooktimedatalist(event.target.value)
 }

  return (
    <div className='formpage2'>
    <img className='formpage2arrowimage' src={arrow4image}/>
    
    <div className="container">
      
      <Row id="formpage2row">
      <div >
        
      </div>
        {/* Left column */}
        <Col lg={6} md={6} sm={12}>
          <div className="card-body mt-4">
            <div className="formpage2form">
              <p className="formpage2h6">DONATE FOOD DETAILS</p>
              <form className="formpage2form-class">
                {/* Input fields */}
                <div className="input-with-dropdown">
                    <InputGroup style={{ width: '100%' }}>
                      <select
                        id="formpage2inp"
                        className="dropdown-select"
                        value={selectedCity}
                        onChange={handleCityChange}
                      >
                        <option disabled value="">
                          Select a city
                        </option>
                        <option value="Amritsar">Amritsar</option>
                        {cities.map((city) => (
                          <option
                            key={city}
                            value={city}
                            disabled={city !== 'Amritsar'}
                            style={{
                              // Apply gray color to disabled options
                              color: city !== 'Amritsar' ? 'lightgray' : 'inherit',
                            }}
                          >
                            {city}
                          </option>
                        ))}
                      </select>
                    </InputGroup>
                  </div>
                <input type="text"  id="formpage2inp" placeholder="Food Items (s)" />
                {/* Input fields */}
                <div className="input-with-dropdown">
                    <InputGroup style={{width:"100%"}}>
                
                  <select id="formpage2inp"  className="dropdown-select" onChange={cooktimedataChange}>

                      <option value="Cooking Time" >Cooking Time</option>
                      {cooktimedata.map((cooktime) => (
                           <option key={cooktime} value={cooktime}>
                           <h5  className="hidden-select">{cooktime}</h5>
                         </option>
                      ))}
                    </select>
                   
                    </InputGroup>
                </div>
                <input type="time" id="formpage2inp" className="timeinput" value={timeInputValue} onChange={handleTimeInputChange} placeholder="Preferred Time" />
                <input type="date" id="formpage2inp" className="date-input" placeholder="Pickup Date" min={today} />
                <input type="text" id="formpage2inp" className="imp" placeholder="Serving Size" value={sliderValue} />

                {/* Slider */}
                <div className="range-slider d-flex flex-column align-items-center">
                  {/* Value display */}
                  <div className="text-center ">{sliderValue}</div>
                  {/* Slider input */}
                  <div className="d-flex justify-content-center w-100">
                    {/* <input type="range" min="5" max="600" value={sliderValue} onChange={handleSliderChange} className="slider" /> */}
                    <Box width="100%">
                <Slider
                aria-label="Default"
                valueLabelDisplay="off" // Set valueLabelDisplay to "off"
                min={5}
                max={600}
                value={sliderValue}
                onChange={handleSliderChange}
                className="slider-rail"
                ThumbComponent="span"
                classes={{
                  thumb: 'slider-thumb',
                }}
                />
               </Box>
                  </div>
                
                  {/* Labels */}
                  <div className="d-flex justify-content-between w-100 " style={{fontSize:"18px"}}>
                    <label htmlFor="points" className="min">Min: 5</label>
                    <label htmlFor="points" className="max">Max: 600</label>
                  </div>
                </div>

                {/* Checkbox */}
                {/* <div className="checkbox mt-4" id="checkbox1">
                  <input type="checkbox" className="check" />
                  <label className="checkinfo">
                    By checking the box, You assure that food quality and hygiene is maintained and you have agree to abide by the terms and conditions given.
                  </label>
                </div> */}
               <Form.Group className="formpage2checkbox1 mt-4 " controlId="formpage2checkbox1" id="formpage2checkbox1">
               <Form.Check inline className="formpage2checkinfo" label="By checking the box, you assure that food quality and hygiene are maintained, and you agree to abide by the terms and conditions given." />
               </Form.Group>
               {/* Submit button */}
                <div>
                  <Button className="btn-submit mt-5" id="formpage2btn1" onClick={donarhandleClick}>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </Col>
       {/* Spacing */}
        <Col lg={2} md={1} sm={12}></Col>

        {/* Right column */}
        <Col lg={4} md={5} sm={12}>
        
          <Row className="d-flex justify-content-center align-items-center" id="row2">
            <h4 id="formpage2heading3" className="mt-5 mb-5">Add Image Of Food</h4>
            <div className="formpage2flex-container m-lg-5 m-md-5">
              {/* First Card */}
              <Col sm={6} className="mb-lg-5 mb-md-5 mb-4 ">
                <Card className='formpage2card'> 
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle formpage2dashed-circle">
                      <button className="rounded-circle formpage2plus-btn" >+</button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              {/* Second Card */}
              <Col sm={6} >
                <Card className='formpage2card'>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <div className="rounded-circle formpage2dashed-circle">
                      <button className="rounded-circle formpage2plus-btn">+</button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </div>
            <h4 className="formpage2heading4">Add the photo of the food<br /> item you want to give.</h4>
          </Row>
        </Col>

        {/* Checkbox and Submit button at the bottom */}
        {/* <div id="checkbox2">
          <input type="checkbox" className="check" id="check2" />
          <label className="checkinfo" htmlFor="check2">
            By checking the box, You assure that food quality and hygiene is maintained and you have agree to abide by the terms and conditions given.
          </label>
        </div> */}
        <Form.Group className="formpage2checkbox2 mt-4" controlId="formpage2checkbox2"  id="formpage2checkbox2">
        <Form.Check inline  className="formpage2checkinfo" label="By checking the box, you assure that food quality and hygiene are maintained, and you agree to abide by the terms and conditions given." />
        </Form.Group>
        <div className="text-center mt-5 mb-4">
          <Button className="btn-submit w-10 h-90" id="formpage2btn2" onClick={donarhandleClick}>Submit</Button>
        </div>
      </Row>
    </div>
    </div>
  );
};

export default Fooddonationpageinfo;
