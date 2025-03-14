import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const clients = [
  { img: '/assets/images/clients/bigbasket.svg', alt: 'Big Basket' },
  { img: '/assets/images/clients/client2.svg', alt: 'Client 2' },
  { img: '/assets/images/clients/client3.svg', alt: 'Client 3' },
  { img: '/assets/images/clients/client4.svg', alt: 'Client 4' },
  { img: '/assets/images/clients/client5.svg', alt: 'Client 5' },
];

const ClientsSlider = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-10'>Our Partners & Clients</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className='flex justify-center items-center'>
                <img
                  src={client.img}
                  alt={client.alt}
                  className='h-20 w-auto grayscale hover:grayscale-0 transition duration-300'
                  loading='lazy'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSlider;
