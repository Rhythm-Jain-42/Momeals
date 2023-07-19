import React from "react";
import './containerd.css'
import Button from 'react-bootstrap/Button';

function Containerd() {
  return (
    <div className="containerd-wrapper pt-4">
      {/* Paragraph */}
      <p className="text-center containerdp">
        Our food collection comprises a broad range of food products, including perishable foods like fruits and vegetables, ready-to-eat meals, dry grains, milk powder, cookies, rice, and various other eatables. A significant proportion of our food donations comprises unsold or close-to-expiry items that we salvage to prevent them from being thrown away.
        Moreover, we gather leftover food from events and food services, which we carefully measure and allocate to nearby families in need.
        Let us join hands to make a difference.
      </p>
      
      {/* Button */}
      <div className="text-center">
        <Button variant="warning" className="containerdjoinbtn">JOIN US</Button>
      </div>
    </div>
  );
}

export default Containerd;
