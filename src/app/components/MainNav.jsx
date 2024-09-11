import React from 'react'
import { navbar } from './constant'
import Link from 'next/link'
import Input from './Input'
import { searchIcon, cartIcon, userIcon, navbarIcon } from '../assest/images'
import Image from 'next/image'

const MainNav = () => {
  return (
    <header className=''>
      <nav className='container mx-auto px-2 p-4 md:w-[700px] lg:w-[1000px] lg:max-w-[1024px]  flex justify-between lg:justify-start items-center gap-4'>
        <div className='flex items-center justify-center px-2 gap-2'>
            <Image src={navbarIcon} alt='navbar-icon' className='lg:hidden'/>
            <h3 className='text-3xl font-bold font-integral'>SHOP.CO</h3>
        </div>
        <ul className='hidden mt-2 lg:flex justify-between items-center gap-5'>
        {navbar.map((nav, index)=>(
            <li key={index} className='text-[16px] font-satoshi'><Link href={nav}>{nav}</Link></li>
        ))}
        </ul>
        <div className='hidden lg:block min-w-[400px]'>
            <Input inputType="text" inputIcon={searchIcon}/>
        </div>
        <div className='flex justify-between gap-2 items-center ml-auto'>
            <Image src={searchIcon} className='md:hidden' />
            <Image src={cartIcon} className=''/>
            <Image src={userIcon} className=''/>
        </div>
      </nav>
    </header>
  )
}

export default MainNav
