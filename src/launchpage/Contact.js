import React from 'react';
import './Contact.css';
import contactImage from '../assets/contact/Group.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
  <div>
      <Navbar/>
    <div className="contact-page">

      <div className="contact-hero">
        <div className="contact-hero-image">
          {/* <img src={contactImage} alt="There is no waste in nature" /> */}
        </div>
        <div className="contact-hero-content">
          <h1>Your Bridge to Reliable <br/> Metal Solutions.</h1>
          <p>We're just a message away from your next Big Project</p>
        </div>
      </div>
      <form
        className="contact-form"
        action="https://formsubmit.co/office@viraniiron.com"
        method="POST"
      >
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label>Full Name</label>
            <input type="text" name="Full Name" placeholder="e.g., Rajesh Khanna" required />
          </div>
          <div className="contact-form-group">
            <label>Company Name</label>
            <input type="text" name="Company Name" placeholder="e.g., SteelTech Industries" required />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label>Email Address</label>
            <input type="email" name="Email Address" placeholder="e.g., rajesh@steeltech.in" required />
          </div>
          <div className="contact-form-group">
            <label>Phone Number</label>
            <input type="text" name="Phone Number" placeholder="e.g., +91 98765 43210" required />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label>Location</label>
            <input type="text" name="Location" placeholder="e.g., Ahmedabad, Gujarat" required />
          </div>
          <div className="contact-form-group">
            <label>I am looking for</label>
            <input type="text" name="Looking For" placeholder="e.g., Buying/ Selling Metal; Partnering" required />
          </div>
        </div>
        <div className="contact-form-group contact-form-message">
          <label>Message/ Inquiry Details</label>
          <textarea name="Message" placeholder="Type your detailed inquiry here" rows={5} required></textarea>
        </div>
        <button type="submit" className="contact-submit-btn">Submit</button>
      </form>

    </div>
        <Footer/>
  </div>
  );
};

export default Contact; 