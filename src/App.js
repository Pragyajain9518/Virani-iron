import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page1 from './launchpage/page1';
import About from './launchpage/About';
import Clients from './launchpage/Clients';
import ContactPage from './launchpage/Contact';
import Testimonials from './launchpage/Testimonials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Page1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>

        {/* Add more routes as needed */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
