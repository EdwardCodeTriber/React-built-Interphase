import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
  FaShoppingCart,
} from "react-icons/fa";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <FaFacebook className="footer-icon" />
        <FaTwitter className="footer-icon" />
        <FaInstagram className="footer-icon" />
      </div>
      <div className="footer-center">
        <FaArrowLeft className="footer-arrow" />
        <FaArrowRight className="footer-arrow" />
      </div>
      <div className="footer-right">
        <button className="footer-cart-button">
          <FaShoppingCart className="footer-cart-icon" /> Cart
        </button>
      </div>
    </footer>
  );
};

export default Footer;
