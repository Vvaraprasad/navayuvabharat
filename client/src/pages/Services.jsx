import React from 'react'
import { FaBrain, FaDatabase, FaLink, FaCode, FaUsers, FaShieldAlt, FaHeadset } from 'react-icons/fa';
// import aiIcon from '../assets/images/new_artificial-intelligence_red.svg';
// import dsIcon from '../assets/images/new_data_red.svg';
// import bcIcon from '../assets/images/new_blockchain_red.svg';
// import fsdIcon from '../assets/images/new_coding_red.svg';

// import { FaBrain, FaDatabase, FaLink, FaCode } from 'react-icons/fa'; // Example icons

const services = [
  {
    icon: <FaBrain size={40} className='text-[#276086]' />,
    title: 'Artificial Intelligence',
    desc: 'Our AI solutions minimize repetitive tasks and facilitate faster decision-making processes.',
    link: './artificial-intelligence.html',
  },
  {
    icon: <FaDatabase size={40} className='text-[#276086]' />,
    title: 'Data Science',
    desc: 'Our custom solutions allow you to gain crucial insights into customer behavior, allowing you to learn what your market needs.',
    link: './data-science.html',
  },
  {
    icon: <FaLink size={40} className='text-[#276086]' />,
    title: 'Blockchain',
    desc: 'We help businesses incorporate blockchain technology to enhance transparency and automation of business operations.',
    link: './blockchain.html',
  },
  {
    icon: <FaCode size={40} className='text-[#276086]' />,
    title: 'Full Stack Development',
    desc: 'You need experts who understand your business requirements and provide scalable solutions accordingly.',
    link: './full-stack-development.html',
  },
  {
    icon: <FaShieldAlt size={40} className='text-[#276086]' />,
    title: 'Cyber Security',
    desc: 'We provide robust cybersecurity solutions to protect your digital infrastructure from threats and breaches.',
    link: './cyber-security.html',
  },
  {
    icon: <FaUsers size={40} className='text-[#276086]' />,
    title: 'Manpower Supply',
    desc: 'We offer reliable manpower outsourcing services tailored to meet the workforce requirements of various industries.',
    link: './manpower-supply.html',
  },
  {
    icon: <FaHeadset size={40} className='text-[#276086]' />, 
    title: 'BPO Services',
    desc: 'Our BPO services help businesses improve efficiency and reduce operational costs with expert process outsourcing.',
    link: './bpo-services.html',
  },
];

const ServicesSection = () => {
  return (
    <div className='py-12 px-4'>
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <h2 className='text-3xl font-bold text-[#37969d]'>Our Services</h2>
        <p className='text-gray-600'>What We Do</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-1'
          >
            <div className='mb-4 flex justify-center'>{service.icon}</div>
            <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
            <p className='text-sm text-gray-600 mb-4'>{service.desc}</p>
            <a
              href={service.link}
              className='inline-block mt-auto text-white font-medium px-4 py-2 rounded-md'
              style={{
                backgroundImage:
                  'linear-gradient(315deg, #44aaac 0%, #276086 74%)',
                boxShadow: '4px 4px 7px grey',
              }}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
