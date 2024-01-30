import React from 'react'
import logo from '../Images/mainlogo.svg'

const Navbar = () => {
  return (
    <nav className='m-0 lg:ps-10 max-w-full shadow'>
      <div className='flex  mt-0'>
        <a href="" className=''>
            <img src={logo} alt="" className='w-[196px] h-[88.2px]' />
        </a>
        <div className='mt-8'>
            <ul className='flex justify-center items-center lg:flex-row flex-col lg:gap-14 gap-5'>
                <li className='font-semibold'>
                    <a href="">Home</a>
                </li>
                <li className='font-semibold'>
                    <a href="">Features </a>
                </li>
                <li className='font-semibold'>
                    <a href="">Pricing</a>
                </li>
                <li className='font-semibold'>
                    <a href="">Blog</a>
                </li>
                <li className='font-semibold'>
                    <a href="">About Us</a>
                </li>
                <li className='font-semibold'>
                    <a href="">Contact</a>
                </li>
                <li className='flex lg:gap-12 gap-3'>
                    <a href="" className='border w-[150px]  py-2 font-semibold text-white text-center bg-[#089451] rounded'>Get Started For Free</a>
                    <a href="" className='border w-[150px]  py-2 font-semibold border-[#089451] text-center text-[#089451] rounded'>Sign in</a>
                </li>
            </ul>
        </div>
        <button>

        </button>
      </div>
   </nav>  
  )
}

export default Navbar