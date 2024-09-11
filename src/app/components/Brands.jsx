import Image from "next/image";
import { brands } from "./constant";

const Brands = () => {
  return (
    <div className='bg-black p-3 w-full transform -translate-y-8 md:-translate-y-12 lg:-translate-y-14'>
      <div className="container mx-auto px-2 md:w-[700px] lg:w-[1000px] lg:max-w-[1024px]">
        <ul className="flex flex-1 flex-shrink  justify-between items-center gap-5 ">
        {brands.map((brand, index)=>(
            <li key={index}><Image src={brand} alt="brand" width={100} /></li>
        ))}
         </ul>
      </div>
      
    </div>
  )
}

export default Brands;
