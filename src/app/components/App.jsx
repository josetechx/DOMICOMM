import React from 'react'
import Infonav from './Infonav'
import MainNav from './MainNav'
import Hero from './Hero'
import Brands from './Brands'
import NewArrival from './NewArrival'
import TopSelling from './TopSelling'
import BrowseByCategory from './BrowseByCategory'

const App = () => {
  return (
    <main>
      <section className='w-full'>
        <Infonav/>
        <MainNav/>
      </section>
      <section className='w-full bg-gray-100 flex flex-col justify-center items-center lg:bg-white'>
        <Hero/>
        <Brands/>
      </section>
      <section className='mt-6'>
        <NewArrival/>
        <TopSelling/>
        <BrowseByCategory />
      </section>
    </main>
  )
}

export default App
