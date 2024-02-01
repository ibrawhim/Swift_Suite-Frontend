import React from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { CiShoppingCart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { TbBorderNone } from 'react-icons/tb';
import bag from '../assets/bag.png'

const Topproduct = () => {
  return (
    <section className='bg-white rounded-lg lg:p-4 p-0'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-4'>
        <div className='bg-green-700 text-center rounded-lg px-2 md:w-full lg:w-[100%] text-white text-[12px]'>
          <p className='flex justify-center items-center'><MdOutlinePersonOutline size={20} /></p>
          <p>Total Visits</p>
          <p>20,000</p>
        </div>
        <div className='bg-green-700 text-center rounded-lg md:w-full lg:w-[100%] px-2 text-white text-[12px]'>
          <p className='flex justify-center items-center'><CiShoppingCart size={20} /></p>
          <p>Total Sales</p>
          <p>15,000</p>
        </div>
        <div className='bg-green-700 text-center rounded-lg md:w-full lg:w-[100%] text-white px-2 text-[12px]'>
          <p className='flex justify-center items-center'><IoBagHandleOutline size={20} /></p>
          <p>Total Made</p>
          <p>$700,000</p>
        </div>
        <div className='bg-green-700 text-center rounded-lg md:w-full lg:w-[106%] px-2 text-white text-[12px]'>
          <p className='flex justify-center items-center'><TbBorderNone size={20} /></p>
          <p>Orders Completed</p>
          <p>30,900</p>
        </div>


      </div>
      <div className='mt-10'>
        <h2 className='text-lg font-medium'>Top Product</h2>

        <div className='flex text-sm bg-gray-300  lg:p-2 py-6 rounded-lg'>
          <p><img src={bag} alt="" /></p>
          <div>
            <p className='lg:font-medium font-light'>Gucci handbag</p>
            <p className='text-[10px] text-center'>Black-20 orders </p>
          </div>

          <div className='lg:ms-28 ms-5 flex lg:gap-5 gap-2'>
            <div>
              <p className='font-medium'>Inventory</p>
              <p className='text-[10px] text-center'>200</p>
            </div>
            <div>
              <p className='font-medium'>Sale</p>
              <p className='text-[10px] text-center'>$3000</p>
            </div>
            <div>
              <p className='font-medium'>Price</p>
              <p className='text-[10px] text-center'>$3500</p>
            </div>
            <div>
              <p className='font-medium'>Total</p>
              <p className='text-[10px] text-center'>$12500</p>
            </div>
          </div>
        </div>


        <div className='flex text-sm bg-gray-300 mt-5 lg:p-2 py-6 rounded-lg'>
        <p><img src={bag} alt="" /></p>
        <div>
          <p className='lg:font-medium font-light'>Gucci handbag</p>
          <p className='text-[10px] text-center'>Black-20 orders </p>
        </div>

        <div className='lg:ms-28 ms-5 flex lg:gap-5 gap-2'>
          <div>
            <p className='font-medium'>Inventory</p>
            <p className='text-[10px] text-center'>200</p>
          </div>
          <div>
            <p className='font-medium'>Sale</p>
            <p className='text-[10px] text-center'>$3000</p>
          </div>
          <div>
            <p className='font-medium'>Price</p>
            <p className='text-[10px] text-center'>$3500</p>
          </div>
          <div>
            <p className='font-medium'>Total</p>
            <p className='text-[10px] text-center'>$12500</p>
          </div>
        </div>
      </div>


        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>

    </section>
  );
};

export default Topproduct;
