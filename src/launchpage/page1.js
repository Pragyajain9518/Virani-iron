// src/launchpage/page1.js
import React from 'react';
import './page1.css';
import backgroundImage from '../assets/heroBanner.png';
import Navbar from './Navbar';
import StatsAndWhyChoose from './page2';
import heroBanner from '../assets/heroBanner.png';
import viraniLogo from '../assets/virani _20250421_154329_0000.png';

const Page1 = () => {
  return (
    <div >
      <Navbar className="page1-nav"
 activeTab="about" />
      <section
        className="page1-hero"
        style={{ backgroundImage: `url(${backgroundImage})`,
         padding: "100px" 
        }}
      >
        <div className="hero-content">
          <h1>
            Building Tomorrow <br /> with Recycle Metal Today
          </h1>
          <div className="underline" />
          <p>
            Your Trusted Partner <br /> in Metal Recycle Metal Solutions
          </p>
          <div className="hero-buttons">
            <button className="buy-scrap" onClick={() => window.open('https://wa.me/919822252260', '_blank')}>Buy Recycle Metal</button>
            <button className="sell-metal" onClick={() => window.open('https://wa.me/919822252260', '_blank')}>Sell Your Metal</button>
          </div>
        </div>
        <div className="rating-badge">
          <span style={{ color: "white" }}>4.5</span>
          <span className="stars"> | ★ ★ ★ ★ ☆</span>
        </div>
      </section>
      <div className="metal-types-container">
        <div className="metal-types">
          <span>Cast Iron</span>
          <span>Stainless Steel</span>
          <span>Aluminium</span>
          <span>Copper</span>
          <span>Brass</span>
          <span>Bronze</span>
          <span>Lead</span>
          <span>Zinc</span>
          <span>Alloy Steel Recycle Metal </span>
          {/* duplicated for infinite loop effect */}
          <span>Cast Iron</span>
          <span>Stainless Steel</span>
          <span>Aluminium</span>
          <span>Copper</span>
          <span>Brass</span>
          <span>Bronze</span>
          <span>Lead</span>
          <span>Zinc</span>
          <span>Alloy Steel Recycle Metal </span>
        </div>
      </div>
      
      <StatsAndWhyChoose />

  
    </div>
  );
};

export default Page1;

