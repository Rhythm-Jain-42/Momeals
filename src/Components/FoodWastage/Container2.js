import React from "react";
import {Stack,Row,Col} from "react-bootstrap";
import "../FoodHunger/FoodHunger.css";
import DonationDetails from "../FoodHunger/DonationDetails";

export default function Container2() {
  return (
    <div className="container2-wrapper pt-5">
      <Row className="d-flex justify-content-center">
      <Col  lg={8} md={12} xs={12}>
      <div className="happen-container">
        <div className="d-">
          <h1 className="d3" >
            WHY IT HAPPENS?
          </h1>
        </div>
        <Stack gap={3}>
          <div className="p-2">
            <h3>
              1.
              <span style={{ color: "#E6545F"}}>
                Lack of appropriate planning
              </span>
            </h3>
            <p style={{ fontSize: "18px" }}>
              One of the primary contributors to food wastage is the lack of
              appropriate planning by consumers. Sometimes people purchase
              excessive amounts of food without adequately planning when and how
              it will be prepared and consumed. Coupled with busy schedules,
              people may change their food preparation plans or forget to use
              the food on time, leading to food wastage. Expiry of food can also
              occur due to lack of appropriate planning, and badly prepared food
              may be discarded, adding to the food waste.
            </p>
          </div>
          <div className="p-2">
            <h3>
              2.
              <span style={{ color: "#E6545F", margin: "0.5rem" }}>
                Purchase and preparation of too much food
              </span>
            </h3>
            <p style={{ fontSize: "18px" }}>
              Food wastage often occurs due to purchasing or preparing too much
              food. When one purchases or prepares more food than is needed, the
              excess food on the plate ends up going to waste. Leftovers and
              partially used food also contribute to the food that goes to
              waste. At times, partially used food is put at the back of the
              fridge and never reused. Excess purchases can also pass their
              expiration dates, leading to food that looks, tastes, and smells
              bad and eventually becomes waste.
            </p>
          </div>
          <div className="p-2">
            <h3>
              3.
              <span style={{ color: "#E6545F"}}>
                Over-preparation of food in restaurants, hotels, and the
                foodservices industry
              </span>
            </h3>
            <p style={{ fontSize: "18px" }}>
              Restaurants, hotels, and the foodservice industry tend to
              over-prepare/produce food. While the intention is good in
              anticipating high customer volume and avoiding running out of the
              menu, over-preparation often leads to wastage if all the food goes
              unsold. “Overproduction in the foodservice industry is the leading
              cause of food wastage, according to DC Central Kitchen, an
              organization committed to reducing food wastage”. The kitchens
              often produce amounts thought to be enough but most of it is
              actually not needed, as they lack the ability to quantify the
              average amount of food consumed. Some managers believe producing
              food in large batches minimizes costs, but in actual fact, it
              results in more waste as compared to cooking to order or cooking
              in small batches.
            </p>
          </div>
          <div className="p-2">
            <h3>
              4.
              <span style={{ color: "#E6545F"}}>
                {" "}
                Excess Food Wastage
              </span>
              <p style={{ fontSize: "18px" }}>
                Sometimes people order more food than they need while dining
                out. This is called excess ordering, and it leads to a lot of
                food being thrown away. It can happen because people think
                they're hungrier than they actually are, or some restaurants
                serve very large portions. To help reduce food waste, we need to
                be careful about how much food we order and eat while dining
                out.
              </p>
            </h3>
          </div>
          <div className="p-2">
            <h3>
              5.
              <span style={{ color: "#E6545F" }}>
                Lack of knowledge about food storage and preservation
              </span>{" "}
            </h3>
            <p style={{ fontSize: "18px" }}>
              Lack of knowledge about food storage and preservation can result
              in spoilage, overbuying, misunderstanding expiration dates, poor
              storage, and not using leftovers creatively. To prevent these
              issues and reduce waste, it's important to learn proper techniques
              for storing and preserving food. Doing so can help us save money
              and protect the environment as well.
            </p>
          </div>
        </Stack>
      </div>
      </Col>
      <Col  lg={3} md={5} xs={12}>
      <div className="second-co-wrapper p-3 p-lg-0 p-md-0">
        <DonationDetails />
      </div>
      </Col>
      </Row>
    </div>
  );
}
