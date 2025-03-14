import React from 'react';
import TestimonialForm from './components/TestimonialForm';

export default function App() {
  return (
    <div className='min-h-screen p-8 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-4'>Submit Your Testimonial</h1>
      <TestimonialForm />
    </div>
  );
}
