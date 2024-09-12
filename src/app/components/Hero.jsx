import Image from 'next/image';
import { heroBg, heroBg2 } from '../assest/images';
import Link from 'next/link';
import { statistics } from './constant';


const Hero = () => {
  return (
    <>
      {/* Hero background image for large screens */}
      <Image 
        src={heroBg} 
        alt="hero-img" 
        className="hidden lg:block lg:relative" 
      />

      <div className="top-12 sm-max-w-[400px] width-container flex justify-between lg:justify-start items-center gap-4">
        <div className="px-2 lg:absolute lg:bottom-24 xl:top-60">
          <h1 className="text-4xl sm:text-5xl md:w-full md:text-6xl lg:w-[577px] font-integral text-start">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="text-gray-500 lg:w-[545px] text-xs font-satoshi mt-4">
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="w-full sm:w-2/5 bg-black px-12 py-4 mt-4 rounded-full text-white font-satoshi hover:bg-gray-200 hover:text-black hover:border border-slate-950">
            <Link href="/products">Shop now</Link>
          </button>
           <div className='flex justify-start items-center mt-7'>
            <ul className='flex-2 flex-wrap flex justify-between items-center gap-5'>
              {statistics.map((item)=>(
                  <li key={item.id} className='text-black text-4xl font-satoshi font-bold'>{item.heading}<br/> <span className='text-xs text-gray-500 font-satoshi'>{item.description}</span></li>
              ))}
            </ul>
           </div>
          

          {/* Secondary image for small screens */}
          <Image 
            src={heroBg2} 
            alt="hero-img" 
            className="lg:hidden mt-6 w-full object-cover" 
          /> 
        </div>     
      </div>
    </> 
  );
};

export default Hero;
