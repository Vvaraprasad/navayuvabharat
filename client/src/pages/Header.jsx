// import React, { useState, forwardRef } from 'react';
// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Header = forwardRef((props, ref) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { to: '/home', label: 'Home' },
//     { to: '/about', label: 'About' },
//     { to: '/carrers', label: 'Carrers' },
//     { to: '/OurClients', label: 'Our Clients' },
//     { to: '/services', label: 'Services' },
//     { to: '/contact', label: 'Contact' },
//   ];

//   return (
//     <header
//       ref={ref}
//       className='fixed top-0 left-0 w-full bg-white shadow-md z-50'
//     >
//       <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6'>
//         {/* Logo and Title */}
//         <div className='flex items-center space-x-4'>
//           <Link to='/'>
//             <img src={logo} alt='Logo' className='h-12 w-12 object-contain' />
//           </Link>
//           <div className='hidden sm:flex flex-col justify-center'>
//             <h1 className='text-xl md:text-2xl font-bold leading-tight'>
//               <span className='text-blue-600'>Navayuva</span>
//               <span className='text-orange-500'>Bharat</span>
//             </h1>
//             <h2 className='text-sm md:text-lg font-semibold text-gray-800'>
//               InfoTech
//             </h2>
//             <p className='text-xs md:text-sm text-gray-600 -mt-1'>
//               Where IT meets integrity
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <nav className='hidden md:flex space-x-6 text-base'>
//           {navLinks.map((item) => (
//             <Link
//               key={item.to}
//               to={item.to}
//               className='relative text-gray-700 font-medium group'
//             >
//               <span className='hover:text-blue-600 transition-colors duration-300'>
//                 {item.label}
//               </span>
//               <span className='absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0'></span>
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           className='md:hidden text-gray-700'
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Drawer */}
//       {mobileMenuOpen && (
//         <div className='md:hidden bg-white px-6 py-4 shadow-md flex flex-col space-y-4'>
//           {navLinks.map((item) => (
//             <Link
//               key={item.to}
//               to={item.to}
//               className='relative text-gray-700 font-medium group'
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className='hover:text-blue-600 transition-colors duration-300'>
//                 {item.label}
//               </span>
//               <span className='absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0'></span>
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// });

// export default Header;

import React, { useState, forwardRef } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = forwardRef((props, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/carrers', label: 'Carrers' },
    { to: '/OurClients', label: 'Our Clients' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      ref={ref}
      className='fixed top-0 left-0 w-full bg-white shadow-md z-50'
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6'>
        {/* Logo and Title */}
        <div className='flex items-center space-x-4'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-12 w-12 object-contain' />
          </Link>
          <div className='hidden sm:flex flex-col'>
            <h1 className='text-xl md:text-2xl font-bold leading-tight whitespace-nowrap'>
              <span className='text-blue-600'>Navayuva</span>
              <span className='text-orange-500'>Bharat</span>
            </h1>
            <div className='flex flex-col items-end -mt-1'>
              <h2 className='text-sm md:text-lg font-semibold text-gray-800'>
                InfoTech
              </h2>
              <p className='text-xs md:text-sm text-gray-600'>
                Where IT meets integrity
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex space-x-6 text-base'>
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className='relative text-gray-700 font-medium group'
            >
              <span className='hover:text-blue-600 transition-colors duration-300'>
                {item.label}
              </span>
              <span className='absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0'></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden text-gray-700'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white px-6 py-4 shadow-md flex flex-col space-y-4'>
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className='relative text-gray-700 font-medium group'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='hover:text-blue-600 transition-colors duration-300'>
                {item.label}
              </span>
              <span className='absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0'></span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
});

export default Header;
