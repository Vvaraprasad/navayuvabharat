import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonials: [
    {
      name: 'Rajesh Singh',
      location: 'Bangalore, India',
      rating: 5,
      content:
        'I wanted to setup my company in UAE but due to lack of information I was not able to do so...',
    },
    {
      name: 'Aarti Gupta',
      location: 'Kolkata, India',
      rating: 5,
      content:
        'Working with Elite Solutions 4 U for UAE company formation and finance services has been a breeze...',
    },
    {
      name: 'Rahul Sharma',
      location: 'Mumbai, India',
      rating: 4,
      content:
        'I took voice inbound BPO process of USA medical. Elite Solutions 4 U has truly revolutionized our outsourcing...',
    },
    {
      name: 'Priya Patel',
      location: 'Delhi, India',
      rating: 4,
      content:
        'I am working with Elite Solutions 4 U from last 2 years on their BPO process...',
    },
  ],
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    // You can add addTestimonial, removeTestimonial, updateTestimonial actions here later
  },
});

export const selectTestimonials = (state) => state.testimonials.testimonials;
export default testimonialsSlice.reducer;
