import React from 'react'
import logoImage from '../assets/alogo.png';

const Logo = () => {
  return (
    <div className='py-3'>
       <div className='max-w-6xl md:w-2xl md:mx-auto mx-auto flex justify-between items-center'>
        <img src={logoImage} className={`cursor-pointer w-auto ml-20 md:ml-1 transition-transform duration-300 hover:pulse rounded-full h-12 `} alt="" />
       </div>
    </div>
  )
}

export default Logo
