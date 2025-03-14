import React from 'react';
import { useSelector } from 'react-redux';
import { selectTestimonials } from '../store/slices/testimonialsSlice';
import { Card, CardContent, Typography, Rating } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

export default function TestimonialsSection() {
  const testimonials = useSelector(selectTestimonials);

  return (
    <div className='py-10 px-4 bg-gray-50 text-center' >
      <h2 className='text-3xl font-bold mb-6 text-[#37969d]'>Testimonials</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        arrows
        showDots
      >
        {testimonials.map((testi, index) => (
          <Card
            key={index}
            className='mx-2 shadow-md border border-gray-200 rounded-2xl p-4'
          >
            <CardContent>
              <div className='flex justify-center mb-2'>
                <Rating value={testi.rating} readOnly />
              </div>
              <Typography variant='body1' className='text-gray-700 mb-4'>
                {testi.content}
              </Typography>
              <div className='mt-4 text-sm text-gray-800 font-semibold'>
                {testi.name}
              </div>
              <div className='text-xs text-gray-500'>{testi.location}</div>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
