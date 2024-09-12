import { catImage1, catImage2, catImage3, catImage4 } from "../assest/images";
import ImageCard from "./CategoriesImageCard";



const BrowseByCategory = () => {
  const images = [
    { src: catImage1, alt: 'Category 1', tag: 'Casual'},
    { src: catImage2, alt: 'Category 2', tag: 'Fashion' },
    { src: catImage3, alt: 'Category 3', tag: 'Party' },
    { src: catImage4, alt: 'Category 4' , tag: 'Gym'},
  ];

  return (
    <div className='bg-gray-100 p-12 rounded-md width-container mt-6'>
      <h3 className="text-center font-integral text-4xl mb-12 py-6">BROWSE BY DRESS STYLE</h3>
      <div className='md:flex justify-center items-center gap-2 mx-6'>
        {images.slice(0, 2).map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} name={image.tag} />
        ))}
      </div>
      <div className='md:flex justify-center items-center gap-2 mt-4 mx-6'>
        {images.slice(2, 4).map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} name={image.tag} />
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
