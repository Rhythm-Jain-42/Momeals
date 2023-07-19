import React from "react";
import {Stack,Row,Col} from "react-bootstrap";
import DonationDetails from "./DonationDetails";
import "./FoodHunger.css";

function Container2() {
  return (
    <div className="container2-wrapper pt-5">
     <Row className="d-flex justify-content-center">
      <Col  lg={8} md={12} xs={12}>
     <div className="happens container" >
      <div className="d-">
        <h1 className='d-3'>WHY IT HAPPENS?</h1>
        <p style={{ fontSize:"18px"}} >
          The issue of widespread malnutrition and hunger is a result of a
          complex web of interconnected factors, including poverty, inequality,
          conflict, climate change, gender discrimination, and inadequate
          government and health systems. Unsfortunately, millions of families
          around the world are affected by this problem, preventing them from
          accessing nutritious food.
        </p>
        <h3 className="d-4">Main factors why it happens:</h3>
      </div>
        <Stack gap={3} >
          <div className="p-2">
            <h3>
              1.<span style={{ color: "#E6545F"}}>Poverty</span>
            </h3>
            <p style={{ fontSize:"18px"}}  >
              India has one of the highest rates of poverty in the world, with
              over 30% of the population living on less than $1.25 per day.
              Women and children are particularly vulnerable, and 1.4 million
              children die each year in India before their fifth birthday due to
              inadequate access to nutritious food, clean water, and healthcare.
              Chronic undernutrition affects one in three children in low- and
              middle-income countries, leading to stunted growth, limited mental
              and emotional development, and even death.
            </p>
          </div>
          <div className="p-2">
            <h3>
              2.
              <span style={{ color: "#E6545F"}}>
                Water Sanitation and Hygiene
              </span>
            </h3>
            <p style={{ fontSize:"18px"}} >
              Inadequate water, sanitation, and hygiene (WASH) services in
              India's health facilities contribute to a high neonatal mortality
              rate, which is currently 24 deaths per 1000 live births in India.
              Without clean water, diseases such as diarrhea, parasites, and
              chronic intestinal inflammation are common. These illnesses
              prevent children from absorbing key nutrients, making them more
              susceptible to malnutrition and other health issues.
            </p>
          </div>
          <div className="p-2">
            <h3>
              3.<span style={{ color: "#E6545F" }}> Excess Food Wastage</span>
              <p style={{ fontSize:"18px"}} >
                The cycle of food waste, climate change, and hunger intensifies
                each other. Wasted food requires significant resources such as
                energy, land, water, and labor to produce, store, harvest,
                transport, package, and sell. When we waste food, we're throwing
                away precious resources that could have been used to feed hungry
                people, contributing to climate change by producing three
                billion tons of greenhouse gases like methane. Preventing food
                waste could cut global emissions by 8%, free up valuable land
                and resources, and save enough food to feed 2 billion hungry
                people.
              </p>
            </h3>
          </div>
          <div className="p-2">
            <h3>
              4.<span style={{ color: "#E6545F"}}>Inequity</span>{" "}
            </h3>
            <p style={{ fontSize:"18px"}} >
              Access to nutritious food is not equal in an unequal world. Those
              marginalized within a community - such as women, displaced people,
              refugees, and those with disabilities - face more barriers to
              essential services, jobs, income, and resources, deepening
              inequity and causing chronic hunger.
            </p>
          </div>
          
        </Stack>
      </div>
      </Col>
      <Col  lg={3} md={5} xs={12}>
      <div className="second col-wrapper p-3 p-lg-0 p-md-0">
        <DonationDetails />
      </div>
      </Col>
      </Row>
    </div>
  );
}

export default Container2;
