import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page1 from './launchpage/page1';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/launchpage/page1" replace />} />
        <Route path="/launchpage/page1" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
