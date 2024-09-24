import React from 'react'
import Input from './Input'
import Button from './Button'

const Newsletter = () => {
    const buttonStyle =(
       `
       border 
       border-slate-950
       px-4 py-2
       rounded-full
       font-satoshi
       bg-white text-black
       w-full
       `
    )
    
  return (
    <div className='bg-black rounded-lg width-container flex justify-center items-center'>
        <div className='gap-3 flex flex-col md:flex-row justify-between px-12 py-4 '>
        <h3 className='text-start font-integral text-3xl lg:text-4xl text-white'>STAY UPDATED ABOUT OUR LATEST OFFER</h3>
         <div className='w-full md:w-1/2 flex flex-col gap-3'>
        <Input placeholder="Enter your Email address" />
        <Button text="Subscribe to Newsletter" styles={buttonStyle}/>
        </div>
        </div>
      
    </div>
  )
}

export default Newsletter
