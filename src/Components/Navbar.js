import React from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/Navbar.css'; 
// import '../App.css'

const Navbar = () => {

  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#types" className="nav-link">Types</a>
        <a href="#price" className="nav-link">Price</a>
        <a href="#connect" className="nav-link">Connect</a>
      </div>
      <div className="navbar-right">
        <FaHeart className="nav-icon" />
        <FaShoppingCart className="nav-icon" />
        <FaUser className="nav-icon" />
      </div>
      {/* Hamburger Menu Icon  */}
      <div class="hamburger" onclick={toggleMenu}>☰</div>
    </nav>
  );
};

export default Navbar;
