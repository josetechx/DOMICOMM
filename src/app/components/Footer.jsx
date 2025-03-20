'use client'
import Newsletter from './Newsletter';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { company, faq, resources, help } from './constant';
import { paypal, Gpay, visa, mastercard, pay,  } from '../assest/images';
import  Image  from 'next/image';

const Footer = () => {

    const debitCardImages = [paypal, Gpay, visa, mastercard, pay]
  return (
    <>
      <div className="transform translate-y-20">
        <Newsletter />
      </div>
      <footer className="bg-gray-200 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between my-16 width-container  gap-5">
          {/* Brand Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-4xl font-bold text-black font-integral mb-4">SHOP.CO</h2>
            <p className="text-gray-400">
              Discover the best products tailored just for you. Quality guaranteed with unmatched customer service.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap md:space-x-16 space-y-8 md:space-y-0 md:flex-row flex-col">
            <div>
              <h3 className="text-black mb-4 font-satoshi text-xs">COMPANY</h3>
              <ul>
                {company.map((item, index)=>(
                    <li key={index} className="mb-2 font-satoshi text-gray-800">
                    <a href={item.link} className="hover:text-white">{item.name}</a>
                   </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-black mb-4 font-satoshi text-xs">HELP</h3>
              <ul>
              {help.map((item, index)=>(
                    <li key={index} className="mb-2 font-satoshi text-gray-800">
                    <a href={item.link} className="hover:text-white">{item.name}</a>
                   </li>
                ))}
              </ul>
            </div>

            <div>
            <h3 className="text-black mb-4 font-satoshi text-xs">FAQ</h3>
              <ul>
              {faq.map((item, index)=>(
                    <li key={index} className="mb-2 font-satoshi text-gray-800">
                    <a href={item.link} className="hover:text-white">{item.name}</a>
                   </li>
                ))}
              </ul>
            </div>

            <div>
            <h3 className="text-black mb-4 font-satoshi text-xs">RESOURCES</h3>
              <ul>
              {resources.map((item, index)=>(
                    <li key={index} className="mb-2 font-satoshi text-gray-800">
                    <a href={item.link} className="hover:text-white">{item.name}</a>
                   </li>
                ))}
              </ul>
            </div>
          </nav>
        </div> 
        <hr className='width-container border-gray-300' />  
        <div className='width-container md:flex justify-between items-center'>
                <p className='font-satoshi text-xs text-gray-700'>Shop.co © 2000-2024, All Rights Reserved</p>
                <div className='flex justify-between items-center gap-2'>
                    {debitCardImages.map((card, index)=>(
                        <Image key={index} src={card} alt={card} />
                    ))}
                </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
