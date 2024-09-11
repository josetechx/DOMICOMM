import React from 'react'
import Infonav from './Infonav'
import MainNav from './MainNav'
import Hero from './Hero'
import Brands from './Brands'

const App = () => {
  return (
    <main>
      <section className='w-full'>
            <Infonav/>
            <MainNav/>
      </section>
      <section className='w-full bg-gray-100 flex flex-col justify-center items-center xl:bg-white'>
            <Hero/>
            <Brands/>
      </section>
    </main>
  )
}

export default App
