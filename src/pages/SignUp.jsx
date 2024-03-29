import React, { useState } from 'react'
import signImage from '../Images/signup.svg'
import Navbar from '../components/Navbar'
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
// import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MdErrorOutline } from "react-icons/md";
import { useFormik } from "formik";
import * as yup from 'yup'
import axios from 'axios';
import loader from '../Images/loader1.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [inputFilled, setInputFilled] = useState(false);
  const [match, setMatch] = useState("")
  const [myloader, setMyloader] = useState(false)

  const endpoint = 'https://service.swiftsuite.app/accounts/register/'
  const notify = () => toast("Sign up Successful!");



    const togglePasswordVisibility = (field) => {
      if (field === 'password') {
          setPasswordVisible(!passwordVisible);
      } else if (field === 'confirm') {
          setConfirmVisible(!confirmVisible);
      }
  };  

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
  let formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: ""
    },
    onSubmit: (values)=>{
      setMyloader(true)
      // console.log(values);
      axios.post(endpoint, values)
      .then((result)=>{
        console.log(result);
      })
      .catch((error)=>{
        setMyloader(false)
        console.log(error);
      })
    },
    validationSchema: yup.object({
      first_name: yup.string().required( <span className='flex'><span>Field is required</span></span>),
      last_name: yup.string().required( <span className='flex'><span>Field is required</span></span> ),
      email: yup.string().email('Invalid email format').required( <span className='flex'><span>Field is required</span></span> ),
      password: yup.string().required(<span className="flex">{' '}<span>Field is required</span></span>).min(8, 'Password must be at least 8 characters').matches(passwordRegex, 'must include letters and numbers'),
      password2: yup.string().required(<span className="flex">{' '}<span>Confirm your Password</span></span> ).oneOf([yup.ref('password'), null], 'Passwords do not match'),
    })
  });
  return (
      <div>
        <div>
        <Navbar/>
        </div>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <div className='px-10'>
            <img src={signImage} alt=""  className='lg:w-[500px] lg:h-[626px] md:w-full'/>
            </div>
            <div className='lg:py-20 py-0   lg:px-28 px-14 '>
              <h1 className='text-center font-bold text-2xl text-[#089451]'>Create an Account</h1>
              <form action="" className='' onSubmit={formik.handleSubmit}>
              <p className='flex my-4 font-bold text-xl text-[#089451]'>Sign Up</p>
                <div className=' h-[80px] my-3'>
                  <label htmlFor="" className='font-semibold my-1'>Firstname</label><br />
                  <input type="text" placeholder='Jane'  className='px-4 py-2 w-full border-2 mt-1 border-[#089451] focus:outline-[#089451]' name='first_name' onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                  <span className='text-red-500 my-1'>{formik.touched.first_name && formik.errors.first_name}</span>
                </div>
                <div className='h-[80px] my-3'>
                  <label htmlFor="" className='font-semibold my-1'>Lastname</label><br />
                  <input  type="text" placeholder='Doe'   className='px-4 py-2 w-full border-2 mt-1 border-[#089451] focus:outline-[#089451]' name='last_name' onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                  <span className='text-red-500 my-1'>{formik.touched.last_name && formik.errors.last_name}</span>
                </div>
                <div className='h-[80px] my-3'>
                  <label htmlFor="Email" className='font-semibold my-1'>Email</label><br />
                  <input  type="email" placeholder='jane@gmail.com'  className='px-4 py-2 w-full border-2 mt-1 border-[#089451]  focus:outline-[#089451]' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                  <span className='text-red-500 my-1'>{formik.touched.email && formik.errors.email}</span>
                </div>
                <div className='h-[80px] relative my-3'>
                  <label htmlFor="" className='font-semibold'>Password</label><br />
                  <input  type={passwordVisible ? 'text' : 'password'} placeholder='**********'   autoComplete='off' className='border-2 mt-1 border-[#089451] py-2 px-4 w-full focus:outline-[#089451]' name='password' onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                  <span className='text-red-500 my-1'>{formik.touched.password && formik.errors.password}</span>
                  <span onClick={() => togglePasswordVisibility('password')} className='absolute top-[42px] right-5'>{!passwordVisible ? <IoEyeSharp /> :  <BsEyeSlashFill /> }</span>
                </div>
                <div className='h-[80px] relative my-3'>
                  <label htmlFor="" className='font-semibold'>Confirm Password</label><br />
                  <input type={confirmVisible ? 'text' : 'password'} placeholder='**********'  className='border-2 bg-white border-[#089451] py-2 mt-1 px-4 w-full focus:outline-[#089451]' name='password2' onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                  <span className='text-red-500 my-1'>{formik.touched.password2 && formik.errors.password2}</span>
                  <span onClick={() => togglePasswordVisibility('confirm')} className='absolute top-[42px] right-5'>{!confirmVisible ?  <IoEyeSharp /> :<BsEyeSlashFill /> }</span>
                </div>
                <button type='submit' className='w-full bg-[#089451] flex justify-center items-center text-white font-bold py-3 mt-5'>{myloader? <img src={loader} alt="" className='w-[25px] ' /> : 'Sign Up'}</button>
              </form>
            </div>
        </section>

        <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>

    </div>
  )
}

export default SignUp