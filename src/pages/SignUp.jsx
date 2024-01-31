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
            <div className='px-10'>
                <img src={signImage} alt=""  className='w-[500px] h-[626px]'/>
            </div>
            <div className='py-20 px-28 '>
              <h1 className='text-center font-semibold text-xl'>Create an Account</h1>
              <form action="" className=''>
              <p className='flex my-2 font-semibold text-xl'>Sign Up</p>
                <div className='my-2'>
                  <label htmlFor="">Name</label><br />
                  <input type="text" placeholder='Jane Doe' className='py-2 w-full border-2  border-[#089451]'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="Email">Email</label><br />
                  <input type="text" placeholder='jane@gmail.com' className='py-2 w-full border-2 border-[#089451]'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="">Username</label><br />
                  <input type="text" placeholder='jane123' className='py-2 w-full border-2 border-[#089451]'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="">Password</label><br />
                  <input type="text" placeholder='********' className='py-2 w-full border-2 border-[#089451]'/>
                </div>
                <div className='my-2'>
                  <label htmlFor="">Confirm Password</label><br />
                  <input type="text" placeholder='********' className='py-2 w-full border-2 border-[#089451]'/>
                </div>
                <button className='w-full bg-[#089451] text-white font-bold py-2 my-2'>Sign Up</button>
              </form>
            </div>
        </section>
    </div>
  )
}

export default SignUp