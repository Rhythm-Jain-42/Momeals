import * as React from "react";
import "../Homepage/homeStyle.css";
import box from "../Images/Donate.png";
import m1 from "../Images/foodwastage1.png";
import m2 from "../Images/foodhungerrr2.png";
import m3 from "../Images/Women.png";
import heart from "../Images/heart.png";
import be from "../Images/Be.png";
import MOMEALS from "../Images/MOMEALS Hero Image 1.png";
import faq from "../Images/faq.png";
import factory from "../Images/Final_illustration_transparent.png";
import { SloganCard } from "./SloganCard";
import { SloganCard2, SloganCard2Carousel } from "./SloganCard2";
import { Accordian } from "./Accordian";
import ImgMediaCard from "./ImgMediaCard";
import { useState, useEffect } from "react";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import arrow2 from "../Images/arrow-2.png";
import SloganCard3 from "./SloganCard3";
import SloganCard4 from "./SloganCard4";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const data = [
    { img: img1, count: "245+", description: "KG Of Food We Saved" },
    { img: img2, count: "150+", description: "Childrens We Fed" },
    { img: img3, count: "120+", description: "Families We Served" },
    { img: img4, count: "50+", description: "Women’s We Empowered" },
  ];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/DonationPage');
  }; 

  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile view, show only one card
        setIsMobileView(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the correct initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="home-section mb-md-5 pb-md-5 d-flex justify-content-evenly align-items-center">
        <div className="header-left">
          <h6 className="header-title ml-lg-5 mt-3 mb-4">
            Powered By Human To Empower Humans
          </h6>
          <h1
            className="header-h1"
            style={{
              fontWeight: 600,
              fontStyle: "normal",
            }}
          >
            For Every Meal You
            <br /> Order from Us,
            <br />
            We Will Feed An <br />
            Orphan For <span style={{ color: "#dd4747" }}>Free.</span>
          </h1>
          <Row className="justify-content-center justify-content-sm-start btnrow mt-4 ">
            <Col className="col-auto">
              <Button className="btn-1 " style={{ background: " #FFA500" }}>
                ORDER NOW
              </Button>
            </Col>
            <Col className="col-auto">
              <Button
                onClick={handleClick}
                className="btn-2"
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  
                }}
              >
                DONATE
              </Button>
            </Col>
          </Row>
         
        </div>
        <div className="header-right mb-3">
          <img src={MOMEALS} alt="header-img" className="img-fluid img" />
        </div>
      </section>
      <div className="home-counter pt-lg-4 pt-md-3 ">
        <div
          className="d-flex justify-content-around  counter"
          id="counter-home"
        >
          {data.map((item, index) => (
            <div className="capsule" key={index}>
              <img
                className="m-3  mb-3 capsule-imgs"
                src={item.img}
                width="50px"
                height="50px"
                alt=""
              />
              <div className="count-details pt-2 pb-2">
                <div className="count">{item.count}</div>
                <div className="descript"> {item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "black", color: "white" }}>
        <div className="head-section d-flex justify-content-center ">
          <div className="title text-center">
            <p className="text1 ">
              {" "}
              <img className="section-img" src={heart} alt="" /> Building a
              Better World: <br />
              <span className="text2 mt-3">
                {" "}
                Uniting Efforts, Inspiring Change, Creating Lasting Impact.
              </span>
            </p>
          </div>
        </div>

        <div className="mand-v pb-5">
          <div className="section-cards ">
            <SloganCard
              destination="/FoodWastage"
              para={<div style={{ maxWidth: '200px' }}>Collect Eatable Leftover Foods from Eateries.</div>}
              card="card1"
              slogan="FOOD WASTAGE"
              src={m1}
            />
            <SloganCard
              destination="/FoodHunger"
              para={<div style={{ maxWidth: '200px' }}>Feed Homeless and Malnutrition Childrens For Free.</div>}
              card="card2"
              slogan="FOOD HUNGER"
              src={m2}
            />
            <SloganCard
              para={<div style={{ maxWidth: '200px' }}>Empowering Homeless and Unemployed women's.</div>}
              card="card3"
              slogan="EMPOWERMENT"
              src={m3}
            />
          </div>
        </div>
      </div>

      <div className="pb-5 p-3" style={{ background: "#c7f2ab" }}>
        <p className="m-lg-5 para2">
          MAKE A LASTING IMPRESSION ON INDIVIDUALS AND COMMUNITIES WITH MOMEALS'
          ETHICAL PRACTICES.
        </p>
        <SloganCard3 />
      </div>

      <div className="be-diff p-lg-5 p-md-5 pb-lg-0 p-4">
        <div className="para-side m-lg-5 mt-1 m-md-5 m-xs-2">
          <h3 className="para-sideh3">Be Different, Make Difference.</h3>
          <p className="para-sidep mt-3">
            At Momeals we believe in making an impactful difference in people’s
            lives through tackling both hunger and reducing food waste
            efficiently at the same time. Our team works diligently with passion
            for excellence when it comes providing quality service for all
            customers while remaining conscious of our environmental impact at
            every step of the way. Together we can make sure that no one goes
            hungry while also helping reduce unnecessary wastage of precious
            resources like food!
          </p>
          <img className="img-arrow mt-3" src={arrow2} />
          <div className="d-flex justify-content-center">
            <button className="btn-diff ">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="solid-line"></div>

      <div className="HowToDo ">
        <div className="left-para">
          <h5>How We Do ?</h5>
          <h1>
            Build A Visionary and Sustainable Food Waste System That Benefits
            All.
          </h1>
          <ul>
            <li className="list">Quick Recovery of food</li>
            <li className="list">Homeless no more hopeless</li>
            <li className="list">Feeding Missions</li>
            <li className="list">Nature Friendly</li>
            <li className="list">Partners with Cooks</li>
          </ul>
        </div>
        <div className="right-img pb-5">
          <img src={factory} className="img-fluid" alt="hwd" />
        </div>
      </div>
      <div className="main-worrior">
        <div className="worrior p-5">
          <h6>BE A FOOD WORRIOR AND SAVE LIVES</h6>

          <button className="btn-join">JOIN</button>
        </div>
      </div>
      <div className="DonateNow">
        <div className="left-intro mt-4">
          <h6>
            {" "}
            <img src={heart} alt="" width={40} /> DONATE NOW
          </h6>
          <h1 className="mt-4">
            Be A Happy Helping Hand For Homeless and Hopeless.
          </h1>
          <h4 className="mt-4 mb-5" style={{ color: "#C7F2AB" }}>
            Two million children die every year due to malnutrition.
            <span style={{ color: "white" }}>
              Help us save lives and create a world free from hunger
            </span>
          </h4>
        </div>
        <div className="donateclassright-form  mt-lg-4">
          <div className="donate">
            <h4 className="donatenow">DONATE NOW </h4>
          </div>
          <div className="inputfield ">
            <h6
              className="mb-3"
              style={{ textAlign: "center", color: "white" }}
            >
              Every Bite Counts and every contribution can make an Impact
            </h6>
            <input
              type="text"
              name=""
              placeholder="Your Name"
              className="rounded-pill my-2"
            />
            <input
              type="text"
              name=""
              placeholder="Amount Value"
              className="rounded-pill my-2"
            />
            <div className="button">
              <button className="rounded-pill money">50 Rs</button>
              <button className="rounded-pill money">100 Rs</button>
              <button className="rounded-pill money">500 Rs</button>
            </div>
            <div className="button-sec mb-5">
              <button className=" button-donate rounded-pill p-3">
                {" "}
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SloganCard4 />
        <div className="Good-change pt-5 pb-4 p-3">
          <div className="para-text">
            <Container>
              <Row className="justify-content-center">
                <h1 className="h1-GC">
                  Be A Part of Good Change ,{" "}
                  <span style={{ color: "rgb(46, 177, 103)" }}>Save Lives</span>
                </h1>
                <Col xs={12} md={8} xl={6}>
                  <p className="p-GC pt-3">
                    We are community of like minded human beings born with only
                    purpose of feeding every human for three times in a day. By
                    Reducing Food Wastage. We can achieve this. Lets Work
                    Together, Lets feed the World together.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="btn-GC pt-3 pb-3">
            <button className="b-GC rounded-pill homejoin-btn">JOIN US</button>
          </div>
        </div>
        <div className="blogs pt-5 pb-5">
          <div className="intro mt-2">
            <h4
              className="blog"
              style={{ color: "rgb(237, 75, 75)", textAlign: "center" }}
            >
              Blog Posts
            </h4>
            <h2 className="text-center update mt-3">
              Our Latest Blogs and Updates
            </h2>
          </div>
        </div>

        <ImgMediaCard />
        <div className="but mt-4 mb-4">
          <button
            className="btn-update rounded-pill"
            style={{ color: "white" }}
          >
            VIEW MORE
          </button>
        </div>
      </div>

      <div className="wrapper p-md-5">
        <div className="accordian">
          <h5 className="mt-5">
            FREQUENTLY ASKED <span style={{ color: "blue" }}>QUESTIONS</span>
          </h5>
          <br />
          <Accordian
            head="What services does Momeals provide?"
            para="We provide innovative services that focus on hunger awareness, food bank management, donation collection, waste reduction measures, and volunteer recruitment."
          />
          <Accordian
            head="How do you reduce food waste?"
            para="We have created a platform where those who wish to give away leftover food or other eatable stuff can submit a pickup request with the details of the food and their personal information for verification. We also take a field strategy, visiting restaurants, hotels and occasions where food is frequently produced in excess and making an effort to convince them to donate it rather than throw it away."
          />
          <Accordian
            head="What is your mission?"
            para="Our goal is to spread awareness about the global problem of hunger and help those in need by providing resources and support. At Momeals we believe in making an impactful difference in people’s lives. We are committed to finding solutions that will reduce food waste while also providing essential resources for those experiencing hunger or poverty."
          />
          <Accordian
            head="How do you ensure ethical practices?"
            para="We value integrity at Momeals which drives us to follow ethical practices throughout all of our operations. We strive for excellence when it comes to providing quality service for all customers while remaining conscious of our environmental impact."
          />
          <Accordian
            head="What can I do to help make a difference?"
            para="Together we can make a difference! You can join us as a volunteer or donate funds towards our cause so that we can continue working towards reducing hunger and eliminating food waste around the world."
          />
        </div>
        <div className="faqImg">
          <img src={faq} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};
