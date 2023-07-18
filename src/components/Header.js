import React, { useEffect, useState } from "react";
import Logo from '../assets/img/logo.png';
const Title = () => {
  return (
    <a href="/">
      <img
        // src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
        src={Logo}
        alt="logo"
        className="logo"
      />
    </a>
  );
};
// const loginUser = () => {
//   return true;
// };
const HeaderComponent = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* <h1>
      {((a = 10), console.log("====================================", a))}  //expression we can use it on jsx but not statement if condition is statement so that's why we can't use 
    </h1> */}
      {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};
export default HeaderComponent;
