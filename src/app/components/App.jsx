import React from 'react'
import Hero from './Hero'
import Brands from './Brands'
import NewArrival from './NewArrival'
import TopSelling from './TopSelling'
import BrowseByCategory from './BrowseByCategory'
import { CustomersReview } from './CustomersReview'

const App = () => {
  return (
    <main>
      <section className='w-full bg-gray-100 flex flex-col justify-center items-center lg:bg-white'>
        <Hero/>
        <Brands/>
      </section>
      <section className='mt-6'>
        <NewArrival/>
        <TopSelling/>
        <BrowseByCategory />
        <CustomersReview/>
      </section>
    </main>
  )
}

export default App
