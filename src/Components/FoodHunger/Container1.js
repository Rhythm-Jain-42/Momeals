import React from "react";


import {Button,Col,Row,Card,Form} from 'react-bootstrap';
import "./FoodHunger.css"


function Container1() {
  return (
    <div className="container1-wrapper pt-5 p-4">
      <Row className="d-flex justify-content-center ">
        <Col lg={8} md={12} xs={12}>
        <h5 >
              Every year, hunger claims the lives of approximately 25 lakh
              individuals in India. Shockingly, this figure is five times
              greater than the total fatalities caused by the COVID-19 pandemic,
              which is widely considered to be the greatest threat to humanity.
              The prevalence of issues such as food insecurity and wastage is a
              major concern worldwide, but particularly in India, where the
              problem is reaching alarming levels. <br/>
              <br/>
              According to the 2021 Global
              Hunger Index (GHI), India has a score of 27.5, indicating a
              serious level of hunger throughout the country. Despite the fact
              that India has enough food in its reserves to feed the entire
              population for five years, even if food production were to cease,
              a staggering 14% of the population is unable to afford even two
              meals a day.
            </h5>
        </Col>
       
        <Col lg={3} md={5} xs={12}>
        {/* <div className="sponso"> */}
            <Card style={{width:""}}
              // style={{boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", width: "20rem",  marginLeft:"10rem", borderRadius:"10px", padding:"0" }}
            >
              <Card.Body style={{display:"flex", alignItems:"center", justifyContent:"center", borderRadius: "30px"}} >
                <Card.Title>Sponsor a Child</Card.Title>
                </Card.Body>
                <Card.Body style={{ padding:"1.5rem", background:"#ED4B4B", color:"#FFFFFF", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>         
                <Card.Text style={{textAlign:"center",fontFamily:"Comfortaa"}}>
                  Make monthly contribution to help a child to have better
                  accesibilty to resources.
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="your Name"  style={{ borderRadius: '20px' }}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" placeholder="Mobile Number" style={{ borderRadius: '20px' }}/>
                  </Form.Group>
                </Form>
                <Row >
                  <Col  className="d-flex justify-content-center ">
                  <Button variant="danger" className='p-2 containerfh-1 mb-3' style={{background:"#FFFFFF",width:"50%", color:"#D90000", borderRadius:"30px"}}>Donate</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          {/* </div> */}
        </Col>
      </Row>
                
                  
    </div>
  );
}

export default Container1;
