import React from 'react';
import Card from './Card';
import { topSelling } from './constant'; // Ensure the path is correct
import Button from './Button';

const NewArrival = () => {
  return (
    <div className="width-container flex flex-col justify-center">
      <h3 className="text-center font-integral text-4xl mb-12">NEW ARRIVALS</h3>
      <div className="flex overflow-x-auto snap-x snap-mandatory justify-between items-center gap-2">
        {topSelling.map((item) => (
          <div className="flex-none snap-start" key={item.id}>
            <Card {...item} />
          </div>
        ))}
      </div>
      <div className='mt-12 text-center'>
        <Button text="View More" />
      </div>
      <hr className='mt-6' />
    </div>
  );
};

export default NewArrival;
