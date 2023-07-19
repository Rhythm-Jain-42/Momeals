// Import necessary modules and components
import ReactPlayer from "react-player";
import "./heroCarousela.css";
import Carousel from "react-bootstrap/Carousel";
import { Button, Row, Col, Container } from "react-bootstrap";

// Define the HeroCarousela component
function HeroCarousela() {
  return (
    <>
      {/* Carousel component from React Bootstrap */}
      <Carousel
        variant="light"
        interval={10000}
        prevIcon={null}
        nextIcon={null}
        indicators={false}
        className="heroCarouselacarouselpage align-items-center"
      >
        {/* Slide 1 */}
        <Carousel.Item className="heroCarousela-background justify-content-center align-items-center">
          {/* Video player using ReactPlayer */}
          <ReactPlayer
            url="../videos/Food warrior background 2.mp4"
            width="100%"
            height="100%"
            playing={true}
            pip={true}
            loop={true}
            muted={true}
            className="display-video"
          />
          {/* Caption for slide 1 */}
          <Carousel.Caption className="heroCarousela-heading text-center">
            <Container>
              <Row className="justify-content-center align-items-center text-center">
                <Col xs={12} md={8}>
                  {/* Heading */}
                  <h5 className="heroCarouselah5">
                    Rescue <span>LEFTOVER</span> FOOD, So Those Who Need It, Can Have It
                  </h5>
                  {/* Paragraph */}
                  <p className="heroCarouselap">
                    Our Food Warriors are always ready to collect food from you and deliver it to the right person
                  </p>
                  {/* Button */}
                  <Button variant="warning" className="heroCarouselagiveaway" id="heroCarouselabtn">
                    GIVE AWAY
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item className="heroCarousela-background justify-content-center align-items-center">
          {/* Video player using ReactPlayer */}
          <ReactPlayer
            url="../videos/Food warrior background.mp4"
            width="100%"
            height="100%"
            playing={true}
            pip={true}
            loop={true}
            muted={true}
          />
          {/* Caption for slide 2 */}
          <Carousel.Caption className="heroCarousela-heading text-center">
            <Container>
              <Row className="justify-content-center align-items-center text-center">
                <Col xs={12} md={8}>
                  {/* Heading */}
                  <h5 className="heroCarouselah5">
                    GIVE AWAY <span>LEFTOVER</span> FOOD, SAVE LIVES
                  </h5>
                  {/* Paragraph */}
                  <p className="heroCarouselap">
                    Our Food Warriors are always ready to collect food from you and deliver it to the right person
                  </p>
                  {/* Button */}
                  <Button variant="warning" className="heroCarouselagiveaway" id="heroCarouselabtn">
                    GIVE AWAY
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Alternative content for smaller screens */}
      <div className="heroCarouselaFoodwarriorpage p-5" style={{ background: '#010101', color: "white" }}>
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col xs={12} md={6}>
              <div className="heroCarouselafoodpage">
                {/* Heading */}
                <h3 className="heroCarouselah3">
                  Rescue <span style={{ color: "#03FE98" }}>LEFTOVER</span> Food, So Those Who Need It, Can Have It
                </h3>
                {/* Paragraph */}
                <p className="heroCarouselap">Our Food Warriors are always ready to collect food from you and deliver it to the right person</p>
                {/* Button */}
                <Button className='heroCarouselagiveaway' variant="warning" id="heroCarouselabtn">
                  GIVE AWAY
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeroCarousela;

