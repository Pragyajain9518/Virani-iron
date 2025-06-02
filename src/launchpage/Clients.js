import React from 'react';
import Navbar from './Navbar';
import './Clients.css';
import Footer from './Footer';
// Import your client logos from assets/clientpage
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
import bgImage from '../assets/clientpage/background.png';

const clientLogos = [
  srj, posco, kalyani, zamil, kalika, shirke, bajel, tata, fiat, wom, coopercorp, uma, menon, gpi
];

const Clients = () => (
  <div className="clients-page">
    <Navbar activeTab="clients" />
    <div
      className="clients-hero-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '34vh',
        width: '100%'
      }}
    >
      <div className="clients-logos-grid">
 {clientLogos.map((logo, i) => {
  const blueBorderIndices = [3, 4, 6, 7];
  const isBlue = blueBorderIndices.includes(i);
  const isGPI = i === 13;

  return (
    <div
      className={`client-logo-circle${isBlue ? ' blue-border' : ''}`}
      key={i}
    >
      <img
        src={logo}
        alt={`Client ${i + 1}`}
        className={isGPI ? 'gpi-img' : ''}
      />
    </div>
  );
})}

      </div>
    </div>
    <Footer />
  </div>
);

export default Clients; 