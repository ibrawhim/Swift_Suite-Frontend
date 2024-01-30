import React from 'react'
import logo from '../Images/mainlogo.svg'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='m-0 lg:ps-10 max-w-full shadow w-full'>
      <div className='flex justify-between'>
        <a href="" className=''>
            <img src={logo} alt="" className='w-[196px] h-[88.2px]' />
        </a>
        <div className='mt-10 hidden lg:block'>
            <ul className='flex justify-center items-center  lg:gap-14 gap-5'>
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
            </ul>
        </div>
        <div className='flex justify-center items-center gap-6 mt-1'>
            <a href="" className='border w-[150px] font-semibold text-white text-center py-1 bg-[#089451] rounded'>Get Started For Free</a>
            <a href="" className='border w-[150px] font-semibold border-[#089451] text-center py-1 text-[#089451] rounded'>Sign in</a>
        </div>
        <button className='lg:hidden block mt-1 text-green-700 font-bold '>
            <FaBars className='w-[20px]'/>
        </button>
        <button>

        </button>
      </div>
   </nav>  
  )
}

export default Navbar