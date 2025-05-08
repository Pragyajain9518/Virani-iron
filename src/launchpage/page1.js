// src/launchpage/page1.js
import React from 'react';
import './page1.css';
import backgroundImage from '../assets/pag1image.jpg';


const Page1 = () => {
  return (
    <div className="page1-container">
      <header className="page1-header">
        <div className="page1-logo">
          <img src="/logo.svg" alt="Virani Iron" className="logo-img" />
          <div className="logo-text">
            <div className="company-name">VIRANI IRON</div>
            <div className="tagline">Reviving Scrap Metal To Life</div>
          </div>
        </div>
        <nav className="page1-nav">
          <a href="#">About</a>
          <a href="#">Clients</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </nav>
        <div className="page1-actions">
          <button className="buy-btn">Buy</button>
          <button className="sell-btn">Sell →</button>
        </div>
      </header>

      <section
        className="page1-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content">
          <h1>
            Building Tomorrow <br /> with Scrap Today
          </h1>
          <div className="underline" />
          <p>
            Your Trusted Partner <br /> in Metal Scrap Solutions
          </p>
          <div className="hero-buttons">
            <button className="buy-scrap">Buy Scrap Metal</button>
            <button className="sell-metal">Sell Your Metal</button>
          </div>
        </div>
        <div className="rating-badge">
          <span>4.5</span>
          <span className="stars">★ ★ ★ ★ ☆</span>
        </div>
      </section>

      <div className="metal-types">
        <span>Cast Iron</span>
        <span>Stainless Steel</span>
        <span>Aluminium</span>
        <span>Copper</span>
        <span>Brass</span>
        <span>Bronze</span>
        <span>Lead</span>
        <span>Zinc</span>
        <span>Alloy Steel Scrap</span>
      </div>
    </div>
  );
};

export default Page1;
