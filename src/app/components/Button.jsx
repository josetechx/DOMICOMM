import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button  className='border border-slate-950 px-4 py-2 rounded-full font-satoshi text-black hover:bg-black hover:text-white'>
        {text}
      </button>
    </div>
  )
}

export default Button
