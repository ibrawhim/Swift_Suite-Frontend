import React from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { CiShoppingCart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { TbBorderNone } from 'react-icons/tb';

const Topproduct = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 p-4 gap-4 bg-white rounded-lg'>
      <div className='bg-green-700 rounded-lg px-2 md:w-full lg:w-[110%] text-white text-[12px]'>
        <p><MdOutlinePersonOutline size={20} className='lg:ms-10' /></p>
        <p>Total Visits</p>
        <p>20,000</p>
      </div>
      <div className='bg-green-700 rounded-lg md:w-full lg:w-[110%] px-2 text-white text-[12px]'>
        <p><CiShoppingCart size={20} className='lg:ms-10' /></p>
        <p>Total Sales</p>
        <p>15,000</p>
      </div>
      <div className='bg-green-700 rounded-lg md:w-full lg:w-[110%] text-white px-2 text-[12px]'>
        <p><IoBagHandleOutline size={20} className='ms-10' /></p>
        <p>Total Made</p>
        <p>$700,000</p>
      </div>
      <div className='bg-green-700 rounded-lg md:w-full lg:w-[110%] px-2 text-white text-[12px]'>
        <p><TbBorderNone size={20} className='lg:ms-10' /></p>
        <p>Orders Completed</p>
        <p>30,900</p>
      </div>


      <h2>Top Product</h2>
      <div>
        <div>
        <p></p>
        <p></p>
        </div>

        <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
    </div>
  );
};

export default Topproduct;
