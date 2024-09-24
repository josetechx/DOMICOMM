import React from 'react'
import Image from 'next/image'

const Input = ({inputType, inputIcon, placeholder}) => {
  return (
    <div>
     <span className='relative w-full'>
        <input type={inputType} className='bg-gray-100 px-12 py-2 rounded-full w-full placeholder:font-satoshi' placeholder={placeholder}/>
        <span className='absolute left-4 py-2'><Image src={inputIcon} alt={inputType} /></span>
     </span> 
    </div>
  )
}

export default Input
