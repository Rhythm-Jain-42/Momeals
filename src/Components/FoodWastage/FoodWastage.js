import React from 'react'
import '../FoodHunger/FoodHunger.css'
import Container1 from './Container1';
import Container2 from './Container2';
import { Container3 } from './Container3';
import { Container4 } from '../FoodHunger/Container4';



function FoodWastage() {
  return (
    <div className="foodhunger-main-container">
    <div style={{ margin: "2rem 5rem" }}>
      <h1> Food Wastage</h1>
    </div>

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
  )
}

export default FoodWastage;