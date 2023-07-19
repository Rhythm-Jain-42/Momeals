import React from 'react'
import { Col, Row } from 'react-bootstrap';


export const Container4 = () => {
    const data = [
        { count: '245+', description: 'KG Of Food We Saved' },
        {count: '150+', description: 'Childrens We Fed' },
        {count: '120+', description: 'Families We Served' },
        { count: '50+', description: 'Women’s We Empowered' },
      ];
  return (
    <div className='container4-wrapper' >
         <h3 className="container4-heading text-center pt-5 pb-4">WHAT WE DID SO FAR?</h3>
      <Row className="justify-content-center pb-5">
        {data.map((item, index) => (
          <Col md={2} key={index} className="container4-wrappercounters d-flex flex-column align-items-center">
            
            <h3>{item.count}</h3>
            <p>{item.description}</p>
            
          </Col>
        ))}
      </Row>
        </div>
 )}
  
