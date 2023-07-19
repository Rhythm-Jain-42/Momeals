import React from 'react';
import thanuimg from '../Images/Thank you heart 1.png'; // Importing an image
import { Link, useNavigate } from 'react-router-dom'; // Importing the Link component from react-router-dom
import './ThankU.css'; // Importing the ThankU.css file

const ThankU = () => {
    const navigate = useNavigate();
const Thankuclick = () => {
  navigate('/');
}; 
  return (
    <div className='ThankUpage pb-5'> {/* Outer container with the class name ThankUpage */}
      <center> {/* Centering the content */}
        <img className='Thankuimg' src={thanuimg} /> {/* Image component with the class name Thankuimg and the image source from thanuimg variable */}
        <h1 className="ThankUpageh1 mb-2">Thank You <br />For Your Help!!</h1> {/* Heading with the class name ThankUpageh1 */}
        <h4 className="ThankUpageh4 mb-5">You Have A Lovely Heart</h4> {/* Subheading with the class name ThankUpageh4 */}
        <Link className="ThankUpagelink mt-5" to="/" onClick={Thankuclick}>
            Redirect To Homepage {">"}</Link> {/* Link component with the class name ThankUpagelink */}
      </center>
    </div>
  );
};

export default ThankU; // Exporting the ThankU component