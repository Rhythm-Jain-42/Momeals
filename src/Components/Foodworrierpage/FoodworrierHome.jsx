import React from 'react'

import Containera from './Containera'
import Containerb from './Containerb'
import Containerc from './Containerc'
import Containerd from './Containerd'

import HeroCarousela from './HeroCarousela'


function FoodworrierHome() {
  return (
  
  <div style={{overflow:"hidden"}} >
      <HeroCarousela/>
      <Containera/>
      <Containerb/>
      <Containerc/>
     
      <Containerd/>
    
    </div>
  )
}

export default FoodworrierHome