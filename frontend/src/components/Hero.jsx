import React from "react";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="logo">
        <Link to="/">amb</Link>
      </div>

      <Link to="/login">
        <IoLogInOutline /> Login
      </Link>
      <Link to="/register">
        <IoPersonOutline /> Register
      </Link>
    </div>
  );
}

export default Hero;
