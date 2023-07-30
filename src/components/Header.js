import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img src={Logo} alt="logo" className="logo" />
    </a>
  );
};
const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to={'/contact'}><li>Contact us</li></Link>
          <Link to={'/cart'}><li>Cart</li></Link>
          <Link to={'/about/profile'}><li>Profile</li></Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default HeaderComponent;
