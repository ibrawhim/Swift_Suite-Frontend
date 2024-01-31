import React from 'react'
import signImage from '../Images/signup.svg'
import Navbar from '../components/Navbar'

const SignUp = () => {
  return (
      <div>
        <div>
        <Navbar/>
        </div>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <div className='border border-red-500 px-10'>
                <img src={signImage} alt=""  className='w-[500px] h-[626px]'/>
            </div>
            <div className='py-20 px-28 '>
              <h1 className='text-center font-bold text-xl'>Create an Account</h1>
              <form action="" className=''>
              <p className='flex my-2 font-bold text-xl'>Sign Up</p>
                <div className='my-2'>
                  <label htmlFor="">Name</label><br />
                  <input type="text" placeholder='Jane Doe' className='py-2 w-full'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="Email">Email</label><br />
                  <input type="text" placeholder='jane@gmail.com' className='py-2 w-full'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="">Username</label><br />
                  <input type="text" placeholder='jane123' className='py-2 w-full'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="">Password</label><br />
                  <input type="text" placeholder='********' className='py-2 w-full'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="">Confirm Password</label><br />
                  <input type="text" placeholder='********' className='py-2 w-full'/>
                </div>
              </form>
            </div>
        </section>
    </div>
  )
}

export default SignUp