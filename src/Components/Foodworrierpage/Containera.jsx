import React from "react";
import "./containera.css";
import { Button } from 'react-bootstrap';
import foodsave1 from "../Images/food save 1.png"
import Ellipse39 from '../Images/Ellipse 39 (3).png'
import familieswefed from '../Images/families we fed 1.png'
import feedchildrens1 from '../Images/feed childrens 1.png'
function Containera() {
  return (
    <div className="containera-box">
      <div className="containera-wrapper">
        {/* Container Part 1 */}
        <div className="containera-part1">
          <ul className="containera-part1-ul">
            <li>
              <div className="containerapart1-list right-side">
                <div className="containerapart1-list-item">
                  <img className="containerapart1-img" src={foodsave1} alt="food-children" />
                  <div className="containerapart1-list-details">
                    <h3 className="containerapart1-listh3">125+</h3>
                    <p className="containerapart1-listp">kg of Food Saved</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="containerapart1-list">
                <div className="containerapart1-list-item">
                  <img className="containerapart1-img" src={Ellipse39} alt="food-children" />
                  <div className="containerapart1-list-details">
                    <h3 className="containerapart1-listh3">190+</h3>
                    <p className="containerapart1-listp">Kg of CO2 Prevented</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="containerapart1-list right-side">
                <div className="containerapart1-list-item">
                  <img className="containerapart1-img" src={familieswefed} alt="food-children" />
                  <div className="containerapart1-list-details">
                    <h3 className="containerapart1-listh3">125+</h3>
                    <p className="containerapart1-listp">Families get benefited</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="containerapart1-list">
                <div className="containerapart1-list-item">
                  <img className="containerapart1-img" src={feedchildrens1} alt="food-children" />
                  <div className="containerapart1-list-details">
                    <h3 className="containerapart1-listh3">160+</h3>
                    <p className="containerapart1-listp">Children’s we fed</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Container Part 2 */}
        <div className="containera-part2">
          <div className="containera-part2-details">
            <h3 className="containera-part2h3">BE A FOOD <span style={{ color: "#ED4B4B" }}>WARRIOR</span>,</h3>
            <h3 className="containera-part2h3">SAVE&nbsp;&nbsp;<span style={{ color: "#067A46" }}>LIVES</span> </h3>
            <p className="containera-part2p">
              Food Warrior is a revolutionary yet straightforward concept aimed at
              raising awareness about food waste and reducing global hunger. We
              recover surplus food from restaurants, hotels, and parties, which is
              then distributed to individuals in need. With our efforts, we aim to
              build a world where no one goes hungry, and we invite you to join us
              in our mission towards a hunger-free nation!
            </p>
            <div className="join-us-button-containera">
              <Button variant="warning" className="containerapart2joinbtn">JOIN US</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Containera;
