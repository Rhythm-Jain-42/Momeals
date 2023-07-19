import React from 'react'
import Fromleft from './Donation_Page/Fromleft'
import Fromright from './Donation_Page/Fromright'
import CounterLayout from './CounterBlock/CounterLayout'
import NumberCounter from './CounterBlock/NumberCounter'
import MiddleCard from './MiddleCard/MiddleCard'
import Support from './supportpage/Support'
import {Row,Container,Col} from 'react-bootstrap'
function DonationPage() {
  return (
    <div style={{overflow:"hidden"}}>
    {/* <div className='mt-5 formdiv' >
    <center> <Fromleft/>    </center>
    <center className='fromright'><Fromright /></center>   
    
    </div> */}
    <Container className='mt-5'>
      <Row className='justify-content-between'>
        <Col xs={12} md={12} lg='auto'>
        <center>
          <Fromleft />
         
          </center>
        </Col>
        <Col xs={12} md={12} lg='auto'>
          <center>
          <Fromright  />
          </center>
        </Col>
      </Row>
    </Container>
    <NumberCounter/>
    <CounterLayout/>
    <MiddleCard/>
    <Support/>
  </div>
  )
}

export default DonationPage;
