import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <a href="/" className="logo">
        <img src={Logo} alt="logo" />
      </a>
      <FiMenu className="menu-item" />

      {/* links  */}
      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Products">Products</a>
        </li>
        <li>
          <a href="#customers">Customers</a>
        </li>
      </ul>
      {/* Icons  */}
      <div className="header-icon">
        <AiOutlineShoppingCart className="cart-icon" />
        <div onClick={() => setShow(!show)} className="search-icon">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="search-box">
        {show ? (
          <input type="search" name="" id="" placeholder="Search here..." />
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
