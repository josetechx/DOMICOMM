'use client'
import React, { useState } from 'react';
import { navbar } from './constant';
import Link from 'next/link';
import Input from './Input';
import { searchIcon, cartIcon, userIcon, navbarIcon } from '../assest/images';
import Image from 'next/image';

const MainNav = () => {
  // State to manage active dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to toggle the dropdown visibility
  const handleDropdown = (label) => {
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header>
      <nav className="width-container flex justify-between lg:justify-start items-center gap-4">
        <div className="flex items-center justify-center px-2 gap-2">
          <Image src={navbarIcon} alt="navbar menu icon" className="lg:hidden" width={24} height={24} />
          <h3 className="text-3xl font-bold font-integral">SHOP.CO</h3>
        </div>
        <ul className="hidden mt-2 lg:flex justify-between items-center gap-5">
          {navbar.map((nav, index) => (
            <li
              key={index}
              className="relative text-[16px] font-satoshi"
              onMouseEnter={() => nav.submenu && handleDropdown(nav.label)}
              onMouseLeave={() => nav.submenu && closeDropdown()}
            >
              <Link href="#">{nav.label}</Link>
              {/* Render Dropdown if the current item has a submenu */}
              {nav.submenu && activeDropdown === nav.label && (
                <ul
                  className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg z-10"
                  onMouseEnter={() => handleDropdown(nav.label)}
                  onMouseLeave={() => closeDropdown()}
                >
                  {nav.submenu.map((item, idx) => (
                    <li key={idx} className="px-4 py-2 hover:bg-gray-200">
                      <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:block min-w-[400px]">
          <Input inputType="text" inputIcon={searchIcon} placeholder="Search for products..." />
        </div>
        <div className="flex justify-between gap-2 items-center ml-auto">
          <Image src={searchIcon} alt="search icon" className="md:hidden" width={24} height={24} />
          <Image src={cartIcon} alt="cart icon" width={24} height={24} />
          <Image src={userIcon} alt="user icon" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
