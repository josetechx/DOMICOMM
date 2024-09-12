import React from 'react';
import Card from './Card';
import { newArrivals } from './constant'; // Ensure the path is correct
import Button from './Button';

const NewArrival = () => {
  return (
    <div className="width-container flex flex-col justify-center">
      <h3 className="text-center font-integral text-4xl mb-12">NEW ARRIVALS</h3>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4 container mx-auto px-2 w-full">
        {newArrivals.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <div className='mt-12 text-center'>
      <Button text="View More"/>
      </div>
      <hr className='mt-6' />
    </div>
  );
};

export default NewArrival;
