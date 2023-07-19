import React from "react";
import "./FoodHunger.css";
import { Col, Row } from "react-bootstrap";

function Container3() {
  return (
    <div className="container3-wrapper">
     <Row className="align-items-center">
        <Col className="p-5">
          <p className="container3-wrapperp">
            Hunger is a predictable, preventable, and treatable issue that requires
            addressing its root causes. With the right tools, we can save the lives
            of malnourished children and help them get the nutritious food they need
            to thrive. By fighting poverty, improving access to clean water and
            sanitation, preventing food waste, and addressing inequality, we can
            create a world free from hunger for everyone.<br/><br/> Support us in the fight
            against hunger for the future of humankind.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Container3;
