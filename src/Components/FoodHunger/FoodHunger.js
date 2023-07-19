import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import { Container4 } from "./Container4";

import "./FoodHunger.css";
import { Col, Row } from "react-bootstrap";

function FoodHunger() {
  return (
    <div className="foodhunger-main-container">
      <Row className="d-flex justify-content-center pt-4 pb-2 p-5">
        <Col className="p-5 pt-4 pb-2">
        <h1> Food Hunger</h1>
        </Col>
      </Row>

      <div>
        <Container1 />
      </div>
      <div >
        <Container2 />
      </div>
      <div >
        <Container3 />
      </div>
      <div >
        <Container4 />
      </div>
    </div>
  );
}

export default FoodHunger;
