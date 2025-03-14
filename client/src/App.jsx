import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Header from './pages/Header';
import About from './pages/About';
import Footer from './pages/Footer';
import TestimonialsSection from './pages/Testimonals';
import Services from './pages/Services';
import ScrollToTopButton from './Buttons/ScrollToTopButton';
import Home from './pages/Home';

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className='bg-gradient-to-r from-orange-500 to-yellow-400'>
      {/* Header with ref */}
      <Header ref={headerRef} />

      {/* Push content below the fixed header */}
      <div style={{ height: `${headerHeight}px` }} />

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testimonials' element={<TestimonialsSection />} />
      </Routes>

      {/* Footer and Scroll Button */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
