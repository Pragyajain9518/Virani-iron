import React from 'react';
import './Footer.css';
import viraniLogo from '../assets/image.png';
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={viraniLogo} alt="Virani Iron Logo" className="footer-main-logo large" />
          <div className="footer-orange-line"></div>
          <p className="footer-desc">
            Leading suppliers and dealers of premium Recycle metal with a commitment to quality, pricing and sustainability.
          </p>
        </div>
        <div  className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li style={{color:"white"}}><Link  to="/about">About Us</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/home">Why Chose Us</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <ul>
            <li style={{color:"white"}}><a  href="mailto:office@viraniiron.com">office@viraniiron.com</a></li>
            <li>+91 9822031447</li>
            <li>Pune, Maharashtra, India</li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <a href="#" className="footer-linkedin" aria-label="LinkedIn">
          <FaLinkedin size={30} style={{backgroundColor:"black", color:"white", border:"none"}} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
