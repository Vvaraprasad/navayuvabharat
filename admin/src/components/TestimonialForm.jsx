// components/TestimonialForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const TestimonialForm = () => {
  let backend_url = import.meta.env.VITE_BACKEND_URL;
  console.log(import.meta.env.VITE_BACKEND_URL);

  console.log(backend_url)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 5,
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/testimonials`, formData);
      alert('Testimonial submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit testimonial');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='p-4 bg-white rounded-lg shadow-md space-y-4'
    >
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        required
      />
      <input
        type='text'
        name='location'
        placeholder='Location'
        value={formData.location}
        onChange={handleChange}
        className='w-full p-2 border rounded'
      />
      <input
        type='number'
        name='rating'
        min='1'
        max='5'
        value={formData.rating}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        required
      />
      <textarea
        name='content'
        placeholder='Your testimonial...'
        value={formData.content}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        required
      />
      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded'
      >
        Submit
      </button>
    </form>
  );
};

export default TestimonialForm;
