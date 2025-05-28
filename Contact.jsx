import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Email validation
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Show alert message
    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 5000);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim()) {
            showAlert('Please enter your name', 'danger');
            return;
        }

        if (!isValidEmail(formData.email.trim())) {
            showAlert('Please enter a valid email address', 'danger');
            return;
        }

        if (!formData.message.trim()) {
            showAlert('Please enter your message', 'danger');
            return;
        }

        setLoading(true);

        try {
            // Simulate API call (replace with your actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));
            showAlert('Thank you! Your message has been sent successfully.', 'success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            showAlert('Sorry, there was an error sending your message. Please try again.', 'danger');
        } finally {
            setLoading(false);
        }
    };

    // Address data
    const addressData = [
        {
            unit: "Unit - 1",
            address: "GAT NO 1232, SANASWADI,\nTALUKA-SHIRUR, PUNE-NAGAR ROAD,\nDIST PUNE - 412 208",
            contact: {
                name: "SHAMSHUDDIN VIRANI",
                mobile: "+91 9822031447",
                landline: "020-27050861",
                email: "vist14@gmail.com"
            }
        },
        {
            unit: "Unit - 2",
            address: "Sr. No. 2340, Sai Satyam Park, Opp.\nBhairavanath Craines, Wagholi,\nPune - 412207 (India)",
            contact: {
                name: "NAJMUDDIN VIRANI",
                mobile: "+91 9822019966",
                landline: "020-48617125",
                email: "vist14@gmail.com"
            }
        },
        {
            unit: "Unit - 3",
            address: "Sr. No. 29/3, Old Kharadi Mundhwa Road,\nNear Atur India, Pune. 411014 (India)",
            contact: {
                name: "AZIM VIRANI",
                mobile: "+91 9890148938",
                email: "vist14@gmail.com"
            }
        }
    ];

    return (
        <div className="container contact-section">
            {/* Contact Form Section */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form">
                        <h2 className="contact-heading">Get in Touch</h2>
                        
                        {alert && (
                            <div className={`alert alert-${alert.type} alert-dismissible fade show mt-3`} role="alert">
                                {alert.message}
                                <button type="button" className="btn-close" onClick={() => setAlert(null)}></button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name *"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email *"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Your Message *"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-submit" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Address Cards Section */}
            <div className="row address-cards">
                {addressData.map((location, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="address-card">
                            <h3 className="unit-title">{location.unit}</h3>
                            <p className="address-text">
                                {location.address.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}<br />
                                    </React.Fragment>
                                ))}
                            </p>
                            <div className="contact-info">
                                <p><i className="fas fa-user"></i>{location.contact.name}</p>
                                <p><i className="fas fa-phone"></i>{location.contact.mobile}</p>
                                {location.contact.landline && (
                                    <p><i className="fas fa-phone-alt"></i>{location.contact.landline}</p>
                                )}
                                <p><i className="fas fa-envelope"></i>{location.contact.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact; 