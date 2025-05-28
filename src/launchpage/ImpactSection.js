import React from 'react';
import './ImpactSection.css';
import co2Img from '../assets/aboutpage/2 tons.png';
import ironImg from '../assets/aboutpage/1.5 tons.png';
import scrapImg from '../assets/aboutpage/1.2 million.png';

const stats = [
  {
    img: co2Img,
    value: '2 tons',
    desc: (
      <>
        of CO<sub>2</sub>,<br />emissions saved
      </>
    ),
  },
  {
    img: ironImg,
    value: '1.5 tons',
    desc: (
      <>
        of iron ore<br />conserved
      </>
    ),
  },
  {
    img: scrapImg,
    value: '+1.2 million',
    desc: (
      <>
        tons of scrap<br />diverted from landfills
      </>
    ),
  },
];

const ImpactSection = () => (
  <section className="impact-section">
    <h2 className="impact-title">Virani Iron's Impact</h2>
    <div className="impact-underline" />
    <h3 className="impact-headline">Recycling That Shapes a Greener Tomorrow</h3>
    <p className="impact-desc">
      At Virani Iron, every transaction is a step toward environmental preservation. Recycling metal isn't just a business—it's a responsibility. Each ton of recycled metal saves up to 2 tons of carbon dioxide emissions, conserves 1.5 tons of iron ore, and prevents thousands of liters of water from being wasted in traditional mining and production.
    </p>
    <div className="impact-stats">
      {stats.map((stat, i) => (
        <div className="impact-stat-card" key={i}>
          <div className="impact-icon">
            <img src={stat.img} alt={stat.value} className="impact-stat-img" />
          </div>
          <div className="impact-value">{stat.value}</div>
          <div className="impact-stat-desc">{stat.desc}</div>
        </div>
      ))}
    </div>
    <p className="impact-bottom">
      Since our inception, our operations have helped divert over 1.2 million tons Resycle metal from landfills—transforming waste into valuable resources. Through ethical sourcing, compliance-led operations, and continuous innovation, we help industries reduce their carbon footprint without compromising efficiency or cost.<br />
      By choosing to work with us, you're not only choosing transparency and quality—you're contributing to a circular economy that respects the planet and empowers future generations.
    </p>
  </section>
);

export default ImpactSection; 