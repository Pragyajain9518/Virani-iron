import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import viraniLogo from '../assets/viranilogo.png';
import { FaArrowRight, FaBars } from "react-icons/fa";

const navLinks = [
  { label: 'Home', key: 'home', to: '/home' },
  { label: 'About', key: 'about', to: '/about' },
  { label: 'Clients', key: 'clients', to: '/clients' },
  { label: 'Testimonials', key: 'testimonials', to: '/testimonials' },
  { label: 'Contact', key: 'contact', to: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={viraniLogo} alt="Virani Iron Logo" className="navbar-logo" />
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        
        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <div className="main-links">
            {navLinks.map(link => (
              <Link
                key={link.key}
                to={link.to}
                className={`nav-link ${currentPath === link.to ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="action-buttons">
            <button className="buy-btn" onClick={() => window.open('https://wa.me/919822252260', '_blank')}>Buy</button>
            <button className="sell-btn" onClick={() => window.open('https://wa.me/919822252260', '_blank')}>Sell <FaArrowRight size={10} /></button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;