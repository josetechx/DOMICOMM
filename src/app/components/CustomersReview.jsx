'use client';
import { reviews } from './constant';
import ReviewCard from './ReviewCard';
import { motion } from 'framer-motion';

export function CustomersReview() {
  const totalWidth = reviews.length * 200; // Adjust based on your card width

  return (
    <>
    <div className='width-container mt-4'>
          <h3 className="text-start font-integral text-4xl mb-12">OUR HAPPY CUSTOMERS</h3>
      </div>
    <div className="relative  w-full flex items-center overflow-hidden bg-white md:shadow-xl">
      <motion.div
        className="flex flex-row"
        animate={{ x: ['0%', `-${totalWidth}px`] }} // Move from start to total width
        transition={{
          duration: 10, // Duration for one full scroll
          ease: 'linear',
          repeat: Infinity, // Continuous scrolling
        }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="flex-shrink-0 mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered entrance
          >
            <ReviewCard {...review} />
          </motion.div>
        ))}
        {/* Duplicate reviews for continuous effect */}
        {reviews.map((review, index) => (
          <motion.div
            key={`duplicate-${review.id}`}
            className="flex-shrink-0 mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered entrance
          >
            <ReviewCard {...review} />
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
}
