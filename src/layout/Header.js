import React from "react";
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import '../layout/header.css'

export const Header = () => {
  return (
    <>
       
        <div className="subHeader d-flex justify-content-between align-items-center px-2 pt-2" style={{height:57, margin:0,backgroundColor:'#010101', color:'white'}}>
          <h6 className="momeal">help@momeals.in</h6>
          <h6 className="one">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgB7ZbPK0RRFMfP82PByELSzAJDWVKEaZSyHKuxnqSUkpUUdiILIv+C7JSlibUfezbKQs1mhFmhTH42ju/NUdP13sy7zzwl86lPb2buPT/m1L09ojL/HavYBmYO4BGFQzAIs/AUJi3Lupc9TXjEYA+sgxl4AA+xJ0deQeI2uM/feYdjsqcTntnseYV7sIO8gMAwTDkUX4XVsBumuTAqR4hMQdC2Q8IVWY/AG3bHDqw0Kd4KX2wSqbEGZT2tTWUadsEl2ZePytVi0kCc7bmQ9Qmt+IwWH4MZLTZu0kDCoYEnWAtD8A6+wSmJ6YNHcES+98OrvNhRkwai7Myy7FGNBORzL3yQ9SxcgBWwGR7L7wMmDdRr3bM28k35x+oIbsg0dNb586SoXBEyRY0WXkpBryS/puQJBFdJI8/snUH6CdKEuhNybM41bKdSgERzbIZqOEGlAska4Bq7m8QjnCU/QOItFw0skl8geSOcZPvToe6AeVhDfoMiJ1pxdSuO02+BYud5xW9ZrmBTir4RFWggjMcwVOPexZtPisr8RT4AGoMOjXuk84IAAAAASUVORK5CYII="
              alt=""
            />
            One Hand For Others
          </h6>
          <ul className="mx-3 icons-list d-flex align-items-center">
           
            <CallIcon className="mx-2 fs-5"/>
            <InstagramIcon  className="mx-2 fs-5"/>
            <WhatsAppIcon  className="mx-2 fs-5"/>
          </ul>
        </div>
      
    </>
  );
};
