import React from 'react';
import './Testimonials.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Client logos
import SRJLogo from '../assets/clientpage/SRJ.png';
import GPILogo from '../assets/clientpage/GPI.png';
import MagnaLogo from '../assets/clientpage/WOM.png';
import UMALogo from '../assets/clientpage/UMA.png';
import ShirkeLogo from '../assets/clientpage/Shirke.png';
import FiatLogo from '../assets/clientpage/fiat.png';
import BackgroundImage from '../assets/testimonials/background.png';

const testimonials = [
  {
    text: "Working with Virani Iron has streamlined our raw material sourcing. Their prompt service and transparent communication make them stand out in the industry.",
    team: 'Team SRJ',
    logo: SRJLogo,
    align: 'left',
  },
  {
    text: "We rely heavily on precision and quality, and Virani Iron never disappoints. Their team understands our needs and always delivers exactly what we ask for.",
    team: 'Team Magna',
    logo: MagnaLogo,
    align: 'right',
  },
  {
    text: "We use specific grades of ferrous metals for chassis and engine components. Virani Iron's stock quality and material traceability have been spot-on. Their support has helped us reduce downtime significantly.",
    team: 'Team Gatge Patil Industries',
    logo: GPILogo,
    align: 'left',
  },
  {
    text: "We appreciate Virani Iron's commitment to compliance, quality, and efficiency. They're a dependable supplier for high-volume, high-standard orders.",
    team: 'Team UMA',
    logo: UMALogo,
    align: 'right',
  },
  {
    text: "Virani Iron is one of the most reliable buyers we've worked with. They ensure quick payments, clear documentation, and maintain long-term business relationships based on trust.",
    team: 'Team Shirke',
    logo: ShirkeLogo,
    align: 'left',
  },
  {
    text: "Working with Virani Iron has been a smooth and professional experience. Their procurement process is clear, timely, and backed by a deep understanding of the materials they're purchasing.",
    team: 'Team Fiat',
    logo: FiatLogo,
    align: 'right',
  },
];

const Testimonials = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonials-bg" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="testimonials-overlay">
          <div className="testimonials-header">
            <div className="testimonials-title">What people say<br /><span>About us</span></div>
         
          </div>
          <div className="testimonials-list">
            {testimonials.map((item, idx) => (
              <div
                className={`testimonial-card testimonial-${item.align}`}
                key={idx}
              >
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-footer">
                  <span className="testimonial-team">-{item.team}</span>
                </div>
                <img
                  src={item.logo}
                  alt={`${item.team} logo`}
                  className="testimonial-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials; 