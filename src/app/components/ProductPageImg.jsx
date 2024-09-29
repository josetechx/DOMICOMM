import {productImage1, productImage2, productImage3, productthumbnail} from '../assest/images'
import Image from 'next/image'

const ProductPageImg = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between gap-2 lg:w-[450px] h-full'>
      <div className='flex flex-row md:flex-col gap-2'>
        <Image src={productImage1} alt='product-image' className='lg:w-full'/>
        <Image src={productImage2} alt='product-image' className='lg:w-full'/>
        <Image src={productImage3} alt='product-image' className='lg:w-full'/>
      </div>
      <div>
        <Image src={productthumbnail} alt='product-thumbnail' />
      </div>
    </div>
  )
}

export default ProductPageImg;
