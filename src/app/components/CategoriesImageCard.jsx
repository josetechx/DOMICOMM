import Image from "next/image";


const ImageCard = ({ src, alt, name }) => {
    return (
      <div className="relative">
        <Image src={src} alt={alt} className="object-cover rounded-md mb-4 md:mb-0 " />
        <p className="absolute font-satoshi text-4xl top-5  px-4">{name}</p>
      </div>
    );
  };
export default  ImageCard;
