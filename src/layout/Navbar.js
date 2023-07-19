import React, { useRef, useState } from "react";
import logo from "../layout/logo.png";
import "../layout/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import MenuIcon from './menu icon 1.png';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const [open, setOpen] = useState(false);
  const close = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar  navbar-expand-sm bg-light  justify-content-between px-lg-5 px-md-3 nav1">
        {/* <div className="navbar ml-auto main_navbar"> */}
          <NavLink className="logo m-0" to="/">
            <img src={logo} alt="coolwiilogo" className="logo-img" id="logo-img"/>
          </NavLink>
          <div className="nav-elements d-flex align-items-center">
            <ul className="navbar-nav First-ul gap-xl-4" id="First-ul">
              <li>
                <NavLink className="nav-link" to="/linchello">Lunchello</NavLink>
              </li>
              <li>
                <NavLink  className="nav-link" to="/ourStory">Our Story</NavLink>
              </li>
              {/* First Dropdown */}
              <li
                className={`dropdown ${isDropdownOpen ? "active" : ""}`}
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                  <NavLink  className="nav-link" to="/causes">Causes</NavLink>
                {isDropdownOpen && (
                  <div className="dropdown-content first-dropdown">
                    <a href="/FoodWastage">Food wastage</a>
                    <a href="/FoodHunger">Food hunger</a>
                    <a href="#">Women Empowerment</a>
                  </div>
                )}
              </li>
              <li className="last_editor">
                <NavLink  className="nav-link" to="/foodworrierpage">Food Warrior</NavLink>
              </li>
            </ul>
           
          </div>
          <div className="d-flex align-items-center icons m-0">
          <div ref={close} onClick={handleOpen}>
          <div className="menu-icon2">
          <span className="menutext">Menu</span> <img src={MenuIcon} alt="menu-icon" />
          </div>
          <div className={`sidebar ${open && "active"}`}>
    <div className="sidebar-toggle">
      <CloseIcon onClick={handleClose} />
    </div>
    <img
      style={{
        padding: 15,
        height: 630,
        width: 700,
        borderRadius: 10,
      }}
      className="sidebar-img"
      alt="img"
      src="https://staging-beplusthemes.kinsta.cloud/wp-content/uploads/2021/08/ymr-popup-1.png"
    />
    <div className="sidebar-elements" style={{ textDecoration: "none" }}>
      <ul style={{ display: "flex", flexDirection: "column", listStyleType: "none" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/linchello">Lunchello</a>
        </li>
        <li>
          <a href="/ourStory">Our Story</a>
        </li>
        <li>
          <a href="/foodworrierpage">Food Warrior</a>
        </li>
        {/* Second Dropdown */}
        <li
          className={`dropdown ${isDropdownOpen ? "active" : ""}`}
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
        >
          <a href="/causes">Causes</a>
          {isDropdownOpen && (
            <div className="dropdown-content second-dropdown">
              <a href="#">FoodWastage</a>
              <a href="#">FoodHunger</a>
              <a href="#">WomenEmpowerment</a>
            </div>
          )}
        </li>
        <li>
          <a href="/foodWarrior">About Us</a>
        </li>
        <li>
          <a href="/ourStory">Contact Us</a>
        </li>
        <li>
          <a href="/ourStory">Become A Member</a>
        </li>
        <li>
          <a href="/ourStory">Blogs</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
          <button className="joinUs1  rounded-pill" id="joinUsbtn">  JOIN US</button>
          </div>
          
        {/* </div> */}
      </nav>
    </>
  );
};
