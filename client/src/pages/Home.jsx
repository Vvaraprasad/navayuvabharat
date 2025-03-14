import React from 'react'
import ClientsSlider from './ClientsSlider';
import TestimonialsSection from './Testimonals';
import Services from './Services';
function Home() {
  return (
    <div>
      <ClientsSlider />
      <TestimonialsSection />
      <Services />
    </div>
  );
}

export default Home