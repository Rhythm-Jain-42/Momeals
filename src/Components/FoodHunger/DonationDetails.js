import React from "react";
import rectangle from "../Images/Rectangle 229 (1).png";
import "./donationDetails.css";
import Card from "react-bootstrap/Card";
import WhatsApp from "../Images/whatsapp logo.png"
import youtube from '../Images/youtube icon.png'
import instagarm from '../Images/instagram icon.png'
import twitter from '../Images/twitter icon.png'
import { Col, Row } from "react-bootstrap";

const Data = [
  {
    id: 1,
    img: "img2",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
    comment: "God bless you",
  },

  {
    id: 2,
    img: "img1",
    name: "Drushti",
    Amount: "200",
    time: "1 hour",
    comment: "God bless you",
  },
  {
    id: 3,
    img: "img1",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
    comment: "God bless you",
  },
  {
    id: 4,
    img: "img1",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
    comment: "God bless you",
  },
];

function DonationDetails() {
  return (
    <div className="">
    <div className="Donation-container p-3">
        <h3 className="mt-3">RECENT DONATION</h3>
      {Data.map((data, id) => (
        <Card key={id} className="donar-card" >
          <Row>
          <Col lg={4} xs={4} md={4} className="mt-4">
          <Card.Img variant="top" src={rectangle}  style={{height:"5rem", width:"5rem"}}/>
          </Col >
          <Col  lg={6} xs={6}  md={6} style={{textAlign:"left"}}>
          <Card.Body>
            <p className="data-amount">{data.Amount}</p>
            <div className="d-2">
            <p className="data-name">{data.name}</p>
            <p className="data-time">{data.time}</p>
            </div>
            <p className="data-comment" style={{color:" #908E8E"}}>{data.comment}</p>
          </Card.Body>
          </Col>
          </Row>
          
         
          
        </Card>
      ))}
    </div>
    <div className='share-cause-Container pt-3 pb-3' style={{borderRadius:"15px"}}>
    <h3 className="text-center">Share Cause</h3>
      <Row className="share-cause-list justify-content-center">
        <Col xs="auto">
          <img src={instagarm} alt="instagarm.png" />
        </Col>
        <Col xs="auto">
          <img src={WhatsApp} alt="whatsapp.png" />
        </Col>
        <Col xs="auto">
          <img src={twitter} alt="twitter.png" />
        </Col>
        <Col xs="auto">
          <img src={youtube} alt="youtube.png" />
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default DonationDetails;
