import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className='w-full bg-blue-900 text-white py-10 px-4 mt-0 pt-[100px]'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
          {/* Company Info */}
          <div>
            <h4 className='text-xl font-semibold mb-2'>NavayuvaBahrat</h4>
            <p className='text-sm mb-4'>
              Success is not just about making promises; it's about delivering
              on them with honesty and integrity.
            </p>
            <address className='text-sm leading-relaxed'>
              <strong>Office:</strong>
              <br />
              Innov8, 7th Floor Pranava Business Park,
              <br />
              Kothguda, Beside Harsha Toyota Showroom,
              <br />
              Hyderabad: 500084
              <br />
              <strong>Phone:</strong> +91 9494530623
              <br />
              <strong>Email:</strong> Navayuvabahratinfotech@gmail.com
            </address>
          </div>

          {/* Services Links */}
          <div>
            <h4 className='text-xl font-semibold mb-2'>Services</h4>
            <ul className='text-sm space-y-2'>
              <li className='flex items-center gap-2'>
                <CheckCircleIcon className='text-orange-600' />
                <DoneAllIcon className='text-orange-600' />
                <DoneIcon className='text-orange-600' />
                <Link to='/service_bpo' className='hover:underline'>
                  OUTSOURCING BPO PROCESS
                </Link>
              </li>
              <li>
                <Link to='/service_UAE' className='hover:underline'>
                  UAE
                </Link>
              </li>
              <li>
                <Link
                  to='/service_DIGITAL_MARKETING'
                  className='hover:underline'
                >
                  DIGITAL MARKETING
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className='text-xl font-semibold mb-2'>Industries</h4>
            <ul className='text-sm space-y-1'>
              <li>Healthcare</li>
              <li>Finance & Banking</li>
              <li>Learning & Education</li>
              <li>Insurance</li>
              <li>IT & Telecom</li>
              <li>Media & Entertainment</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-xl font-semibold mb-2'>Social</h4>
            <ul className='text-sm space-y-2'>
              <li className='flex items-center gap-2 hover:text-blue-500 cursor-pointer'>
                <FaLinkedinIn className='text-blue-400' />
                <a
                  href='https://www.linkedin.com/company/navayuvabharat-infotech/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li className='flex items-center gap-2 hover:text-green-600 cursor-pointer'>
                <FaWhatsapp className='text-green-500' />
                <a
                  href='https://wa.me/9987920729'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  WhatsApp
                </a>
              </li>
              <li className='flex items-center gap-2 hover:text-blue-700 cursor-pointer'>
                <FaFacebookF className='text-blue-600' />
                <a
                  href='https://www.facebook.com/people/Navayuvabharat-Infotech/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </a>
              </li>
              <li className='flex items-center gap-2 hover:text-pink-600 cursor-pointer'>
                <FaInstagram className='text-pink-500' />
                <a
                  href='https://www.instagram.com/accounts/login/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              </li>
              <li className='flex items-center gap-2 hover:text-red-600 cursor-pointer'>
                <FaYoutube className='text-red-500' />
                <a
                  href='https://www.youtube.com/@NavayuvabharatInfotech'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-10 text-center text-sm text-gray-400'>
          &copy; 2025 All Rights Reserved by NAVAYUVABHARAT INFOTECH.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
