// src/launchpage/StatsAndWhyChoose.js

import React from 'react';
import './page1.css';
import topGradeImage from '../assets/Top grade metal scrap.png';
import pricingImage from '../assets/Competitive Pricing.png';
import deliveryImage from '../assets/Timely Deliveries.png';
import satisfactionImage from '../assets/Customer  Satisfaction.png';
import Footer from './Footer';
// Import all client logos
import srj from '../assets/clientpage/SRJ.png';
import posco from '../assets/clientpage/Posco.png';
import kalyani from '../assets/clientpage/Kalyani.png';
import zamil from '../assets/clientpage/Zamil.png';
import kalika from '../assets/clientpage/Kalika.png';
import shirke from '../assets/clientpage/Shirke.png';
import bajel from '../assets/clientpage/Bajel.png';
import tata from '../assets/clientpage/TATA.png';
import fiat from '../assets/clientpage/fiat.png';
import wom from '../assets/clientpage/WOM.png';
import coopercorp from '../assets/clientpage/cooper corp.png';
import uma from '../assets/clientpage/UMA.png';
import menon from '../assets/clientpage/Menon .png';
import gpi from '../assets/clientpage/GPI.png';

const clientLogos = [
  srj, posco, kalyani, zamil, kalika, shirke, bajel, tata, fiat, wom, coopercorp, uma, menon, gpi
];

const StatsAndWhyChoose = () => {
  return (
    <>
      <div className="stats-why-section">
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-text">Running operations</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15000+</div>
            <div className="stat-text">Tons of Recycle Metal yearly</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">58+</div>
            <div className="stat-text">Companies we buy from</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">55+</div>
            <div className="stat-text">Companies we supply to</div>
          </div>
        </div>

        <div className="why-choose">
          <h2>Why Choose Virani Iron?</h2>
          <div className="underline" />
          <div className="choose-cards">
            <div className="choose-card">
              <img src={topGradeImage} alt="Top Grade Metal Scrap" />
              <div className="choose-title">Top Grade Recycle Metal </div>
            </div>
            <div className="choose-card">
              <img src={pricingImage} alt="Competitive Pricing" />
              <div className="choose-title">Competitive Pricing</div>
            </div>
            <div className="choose-card">
              <img src={deliveryImage} alt="Timely Deliveries" />
              <div className="choose-title">Timely Deliveries</div>
            </div>
            <div className="choose-card">
              <img src={satisfactionImage} alt="Customer Satisfaction" />
              <div className="choose-title">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      <div className="clients-title-section">
        <h2 className="clients-title">Virani Iron's Clients</h2>
        <div className="clients-underline" />
        <div className="clients-subtitle">We are trusted by</div>
      </div>
      <div className="moving-logo-container moving-logo-row">
        <div className="moving-logo-track">
          {clientLogos.map((logo, i) => (
            <img src={logo} alt={`Client Logo ${i + 1}`} className="moving-logo-client" key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StatsAndWhyChoose;
