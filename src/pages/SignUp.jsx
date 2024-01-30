import React from 'react'
import signImage from '../Images/signup.svg'
import Navbar from '../components/Navbar'

const SignUp = () => {
  return (
      <div>
        <div>
        <Navbar/>
        </div>
        <section className=''>
            <div>
                <img src={signImage} alt=""  className='w-[500px] h-[626px]'/>
            </div>
            <div>
              <h1>Create an Account</h1>
              <p>Sign Up</p>
              <form action="">
                <div>
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Jane Doe'/>
                </div>
                <div>
                  <label htmlFor="Email">Email</label>
                  <input type="text" placeholder='jane@gmail.com'/>
                </div>
                <div>
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='jane123'/>
                </div>
                <div>
                  <label htmlFor="">Password</label>
                  <input type="text" placeholder='********'/>
                </div>
                <div>
                  <label htmlFor="">Confirm Password</label>
                  <input type="text" placeholder='********'/>
                </div>
              </form>
            </div>
        </section>
    </div>
  )
}

export default SignUp