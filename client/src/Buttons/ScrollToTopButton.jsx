import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 z-50 bg-[#276086] text-white p-3 rounded-full shadow-lg hover:bg-[#37969d] transition-all'
        >
          <MdKeyboardArrowUp size={28} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
