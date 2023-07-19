import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import CounterLayout from './CounterLayout';
import './Counter.css';

const NumberCounter = () => {
  const [counts, setCounts] = useState({
    happyChildren: 0,
    familiesFed: 0,
    educationSupport: 0,
    foodPackages: 0,
  });

  const finalFigure = {
    happyChildren: 150,
    familiesFed: 125,
    educationSupport: 100,
    foodPackages: 250,
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (counts.happyChildren < finalFigure.happyChildren) {
        setCounts((prevCounts) => ({
          ...prevCounts,
          happyChildren: prevCounts.happyChildren + 1,
        }));
      }
    }, 20); // Change this number to adjust the speed of the counter
    return () => clearInterval(timer);
  }, [counts.happyChildren, finalFigure.happyChildren]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (counts.familiesFed < finalFigure.familiesFed) {
        setCounts((prevCounts) => ({
          ...prevCounts,
          familiesFed: prevCounts.familiesFed + 1,
        }));
      }
    }, 20); // Change this number to adjust the speed of the counter
    return () => clearInterval(timer);
  }, [counts.familiesFed, finalFigure.familiesFed]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (counts.educationSupport < finalFigure.educationSupport) {
        setCounts((prevCounts) => ({
          ...prevCounts,
          educationSupport: prevCounts.educationSupport + 1,
        }));
      }
    }, 20); // Change this number to adjust the speed of the counter
    return () => clearInterval(timer);
  }, [counts.educationSupport, finalFigure.educationSupport]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (counts.foodPackages < finalFigure.foodPackages) {
        setCounts((prevCounts) => ({
          ...prevCounts,
          foodPackages: prevCounts.foodPackages + 1,
        }));
      }
    }, 20); // Change this number to adjust the speed of the counter
    return () => clearInterval(timer);
  }, [counts.foodPackages, finalFigure.foodPackages]);

  return (
    <CounterLayout>
      <Row className='counter-row mt-5 '>
        <Col xs={12} sm={12} md={3} xl={3} lg={2}>
          <div className='counter-item'>
            <span  style={{ fontSize: '40px' }}>{counts.happyChildren}+</span>
            <small className='caption'>Happy Children's</small>
          </div>
        </Col >
        <Col xs={12} sm={12} md={3} xl={3} lg={2}>
          <div className='counter-item'>
            <span  style={{ fontSize: '40px' }}>{counts.familiesFed}+</span>
            <small className='caption'>Families We Fed</small>
          </div>
        </Col >
        <Col xs={12} sm={12} md={3} xl={3} lg={2}>
          <div className='counter-item'>
            <span  style={{ fontSize: '40px' }}>{counts.educationSupport}+</span>
            <small className='caption'>Children got educational support</small>
          </div>
        </Col >
        <Col xs={12} sm={12} md={3} xl={3} lg={4}>
          <div className='counter-item'>
            <span  style={{ fontSize: '40px' }}>{counts.foodPackages}+</span>
            <small className='caption'>Food packages We served</small>
          </div>
        </Col>
      </Row>
    </CounterLayout>
  );
};

export default NumberCounter;
