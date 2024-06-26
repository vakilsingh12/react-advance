import React, { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <a href="/">
      <img src={Logo} alt="logo" className="h-28 p-2" data-testid="logo" />
    </a>
  );
};
const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const userContext = useContext(UserContext);
  const cartItems = useSelector(store => store.carts.items)
  return (
    <div className="flex items-center justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />
      <div className="">
        <ul className="flex">
          <Link to={"/"}>
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li className="px-2">Contact us</li>
          </Link>
          <Link to={"/about/profile"}>
            <li className="px-2">Profile</li>
          </Link>
          <Link to={"/instamart"}>
            <li className="px-2">Instamart</li>
          </Link>
          <Link to={"/instamart"}>
            <li className="px-2">{userContext.loggedInuser}</li>
          </Link>
          <Link to={"/cart"}>
            <li className="font-bold pr-5" data-testid="cart-item">Cart {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};
export default HeaderComponent;
