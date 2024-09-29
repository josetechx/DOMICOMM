'use client'
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import colorImage from "../assest/images/colors.png"; // Ensure you import an actual image

const ProductInfo = () => {
  const [sizeButtons, setSizeButtons] = useState([{id:1,name:"Small", selected:false}, {id:2,name:"Medium", selected:false}, {id:3,name:"Large", selected:true}, {id:4,name:"X-Large", selected:false}]);
  
  const toggleButton = (id)=>{
   setSizeButtons(sizeButtons.map((item)=>(
        (item.id) === id ? {...item, selected: !item.selected}: {...item, selected:false}
    )))
  }
  
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="font-integral text-4xl">ONE LIFE GRAPHIC T_SHIRT</h3>

      <span className="text-yellow-500 text-2xl">
        {"★".repeat(4)}
        {"☆".repeat(5 - 4)} 
        <span className="font-satoshi text-[12px] text-gray-700"> 4/5</span>
      </span>

      <p className="text-black text-2xl font-satoshi font-bold">
        $260 
        <span className="text-gray-300 text-2xl line-through ml-2">$300</span>
      </p>

      <div className="w-[500px]">
        <p className="text-gray-500 text-[16px] font-satoshi">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>

      <div className="mt-2 pb-2">
        <p className="text-gray-500 text-[14px] py-2 font-satoshi">Select colors:</p>
        <Image src={colorImage} alt="Available colors" />
      </div>

      <hr className="" />

      <div className="mb-3">
        <p className="text-gray-500 text-[14px] py-2 font-satoshi">Choose size:</p>
        <div className="flex space-x-2">
          {sizeButtons.map((item) => (
            <button key={item.id} className={`${item.selected? "bg-black text-white": "bg-gray-200"} px-4 py-2 text-black hover:text-white hover:bg-black transition-all font-satoshi rounded-full`} onClick={()=> toggleButton(item.id)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center mt-2">
        <div className="bg-gray-200 p-2  rounded-full flex justify-between">
            <span className="text-black px-3 font-satoshi text-sm  cursor-pointer">-</span>
            <span className="text-black px-3 font-satoshi">1</span>
            <span className="text-black px-3 font-satoshi text-sm  cursor-pointer">+</span>
        </div>
        <Button text="Add to cart" styles="bg-black text-white px-12 py-2 rounded-full w-full text-[16px] text-center" />
      </div>
    </div>
  );
};

export default ProductInfo;
