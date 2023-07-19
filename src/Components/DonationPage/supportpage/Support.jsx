import React from 'react';
import './Support.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Support() {
  return (
    <div className='support-page' >
    
        <Row className='h-100  align-items-center justify-content-center'>
          <Col xs={12} sm={8} md={6} lg={4}>
            <div className='support-dis text-center'>
              <p className='support-text'>We are here to support People</p>
              <h2 className='mt-5 support-heading'>Fundraising for the people and causes you care about</h2>
              <Button className='mt-5 support-but'>Start Donating</Button>
            </div>
          </Col>
        </Row>
  
    </div>
  );
}

export default Support;
