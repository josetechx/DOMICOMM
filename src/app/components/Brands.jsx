import Image from "next/image";
import { brands } from "./constant";

const Brands = () => {
  return (
    <div className='bg-black flex items-center p-3 w-full h-[122px] transform -translate-y-4 md:-translate-y-12 lg:-translate-y-14'>
      <div className="width-container">
        <ul className="flex flex-1 flex-shrink  justify-between items-center gap-4 w-full">
        {brands.map((brand, index)=>(
            <li key={index}><Image src={brand} alt="brand" width={100} /></li>
        ))}
         </ul>
      </div>
      
    </div>
  )
}

export default Brands;
