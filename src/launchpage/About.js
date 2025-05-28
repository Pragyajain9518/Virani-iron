import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ImpactSection from './ImpactSection';
import './About.css';
import splitCar from '../assets/aboutpage/Untitled design-5 1.png';
import scrap1 from '../assets/aboutpage/image 1.png';
import scrap2 from '../assets/aboutpage/image 2.png';
import scrap3 from '../assets/aboutpage/image 3.png';
import scrap4 from '../assets/aboutpage/image 4.png';

const About = () => {
  return (
    <div className="about-container">
      <Navbar activeTab="about" />
      <section className="about-hero">
        <div className="about-hero-img">
          <img src={splitCar} alt="Split Car" />
        </div>
        <div className="about-hero-content">
          <h2>Building a Sustainable Future<br />From Recyclable Metals</h2>
          <div className="about-underline" />
          <div className="about-subheadline">Rooted in Legacy, Driven by Sustainable Innovation</div>
          <div className="about-hero-buttons">
            <button className="about-explore-btn">Explore our services</button>
            <button className="about-partner-btn">Partner with Us</button>
          </div>
        </div>
      </section>
      <section className="about-legacy">
        <h2>Our Legacy</h2>
        <div className="orange-line" />
        <p>
          Virani Iron Pvt. Ltd., an organisation dedicated to Recycling and Refurbishing of Ferrous and non Ferrous recycled metals. We have started our voyage in 1975. Since the inception of the organisation, we have engaged ourselves in trading and recycling of recycled metals. Our aspiration has been fuelled and our focus has been sharpened by our mentor – Mr. Najmuddin B. Virani.
          <br />
          Skill sets and acute market understanding of our frontrunner Mr. Shamshuddin N. Virani have helped Virani Iron Pvt. Ltd. to achieve a pivotal position in the market. Mr. Azim N. Virani is focussed at driving the team to brilliance.<br /><br />
          Virani Iron Pvt. Ltd. is headquartered in the eclectic town of Pune, Maharashtra, India. Its unremitting progression and evolution has made it one of the significant Importers of and high-speed steel Recycle Metal worldwide.
        </p>
      </section>
      <section className="about-what-we-do">
        <h2>What Do We Do?</h2>
        <div className="orange-line" />
        <div className="about-cards">
          <div className="about-card">
            <img src={scrap1} alt="Ferrous & Non Ferrous Scrap Procurement" />
            <div className="about-card-title">Ferrous & Non Ferrous<br />Recycle Metal Procurement</div>
          </div>
          <div className="about-card">
            <img src={scrap2} alt="Topic 2" />
            <div className="about-card-title">Topic 2</div>
          </div>
          <div className="about-card">
            <img src={scrap3} alt="Topic 3" />
            <div className="about-card-title">Topic 3</div>
          </div>
          <div className="about-card">
            <img src={scrap4} alt="Topic 4" />
            <div className="about-card-title">Topic 4</div>
          </div>
        </div>
      </section>
      <ImpactSection/>
      <Footer />
    </div>
  );
};

export default About; 