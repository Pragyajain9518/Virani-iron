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
          <h1>
            Building a Sustainable Future<br />
            From Recyclable Metals
          </h1>
          <div className="about-underline" />
          <div className="about-subheadline">
            Rooted in Legacy, Driven by Sustainable Innovation
          </div>
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
  <p style={{textAlign:"center"}}>      Passage Through Time, Our past that built our present.</p>
        

The journey of Virani Iron Pvt. Ltd. began in 1975, founded by Mr. Najmuddin Virani, a man of great vision, values, and unwavering integrity. What started as a small proprietary firm has grown into a robust private limited company, rooted in trust and built for impact.

While Mr. Virani Sir laid the foundation with hard work and foresight, the next generation has taken the legacy ahead, sharpening systems, expanding reach, and embedding sustainability at its core. His experience remains the cornerstone of everything we build today.

<br/><br/>
Today, Shamshuddin Virani, the Director and Co-Founder of Virani Iron Pvt. Ltd., leads the company as a new-age entrepreneur transforming India’s recycling landscape. With a strong belief that recycling is not just a business but a responsibility, he has propelled the firm into a space where operational excellence meets conscious growth. Under his leadership, the company continues to evolve, honoring its legacy while embracing innovation and sustainability.

<br/><br/>
Adding heart and structure to the journey is Vanita Virani, Executive Director and Co-Founder. She is the driving force behind the systems that keep Virani Iron running efficiently. Overseeing both Accounts and HR, Vanita brings clarity, compassion, and precision into the organization. Proactive and people-focused, she is not just the soft heart of the company, she’s a leader shaping its future.

Together, their leadership embodies the perfect blend of legacy, innovation, and care, positioning Virani Iron Pvt. Ltd. as a growing force in the global metal scrap recycling industry.

        </p>
      </section>
      <section className="about-legacy">
        <h2>Our Vision</h2>
        <div className="orange-line" />
        <p style={{textAlign:"center"}} >
        Our vision is to make Virani Iron Pvt. Ltd. a pioneer in recycling metal scrap and to help create a cleaner, greener environment for generations to come.
        </p>
      </section>
      <section className="about-what-we-do">
        <h2>What Do We Do?</h2>
        <div className="orange-line" />
        <div className="about-cards">
          <div className="about-card">
            <img src={scrap1} alt="Ferrous & Non Ferrous Scrap Procurement" />
            <div className="about-card-title">Green-first Recycling Approach</div>
          </div>
          <div className="about-card">
            <img src={scrap2} alt="Topic 2" />
            <div className="about-card-title">Ferrous and Non Ferrous recycled procurement</div>
          </div>
          <div className="about-card">
            <img src={scrap3} alt="Topic 3" />
            <div className="about-card-title">In-house Logistics & Weighbridge Systems</div>
          </div>
          <div className="about-card">
            <img src={scrap4} alt="Topic 4" />
            <div className="about-card-title"> Real-time market rates</div>
          </div>
        </div>
      </section>
      <ImpactSection/>
      <Footer />
    </div>
  );
};

export default About; 