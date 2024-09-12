import Image from "next/image";

const Card = ({ thumbnail, title, rating, price, slashedPrice }) => {
  return (
    <div className="">
      <Image 
        src={thumbnail} 
        alt={title} 
        width={200} 
        height={200} 
        className="rounded-lg" 
      />
      <div className="">
        <h3 className="font-satoshi py-2 font-bold text-sm capitalize">{title}</h3>
        <div className="">
          <p className="font-satoshi text-black text-base" >{rating}<span className="text-gray-500">/5</span></p>
        </div>
        <div className="">
          <p className="text-2xl font-semibold font-satoshi py-2">${price}</p>
          {slashedPrice && (
            <p className="text-sm line-through text-gray-400">${slashedPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
