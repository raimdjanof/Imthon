import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Login({ setToken }) {
  const newData = JSON.parse(window.localStorage.getItem("newToken")) || { newLogin: "raimdjanof" };
  const loginSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      login: evt.target.login.value,
      password: evt.target.password.value
    };
    if (data.login === newData.newLogin ) {
      toast.success('Successfully toasted 😄');
    } else {
      toast.error("tabriklaymiz hato😬");
    }
    setTimeout(() => {
      setToken(data);
    }, 1000);
    window.localStorage.setItem("token", JSON.stringify(data));
  };

  return (
    <div className=" h-[100vh] w-[full] bg-gradient-to-tr bg-[#FCFAFA]  pt-[100px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className='font-semibold text-[36px] text-center mb-[50px]'>Welcome, Log into you account</h1>
      <form onSubmit={loginSubmit} className=" py-16 bg-[#fff] w-[512px]  rounded-[15px] mx-auto">
          <h2 className=' font-medium w-[238px] text-[#667085] mx-auto text-center text-[16px]'>It is our great pleasure to have you on board! </h2>
      
        <label className='flex flex-col  w-[248px] mx-auto mt-[18px]'>
          <input name='login' 
          className='p-3 rounded-[4px] border-[1px] border-[#E5E5E5] outline-none' 
          type="text" placeholder='Enter your login' />
        </label>

        <label className='flex flex-col  w-[248px] mx-auto mt-[18px]'>
          <input name='password' 
          className='p-3 rounded-[4px] border-[1px] border-[#E5E5E5] outline-none '
           type="password" placeholder='Enter your password' />
        </label>

        <button className=' w-[248px] mx-auto my-[20px] hover:opacity-70 block bg-[#2D88D4] py-[13px] rounded-lg text-[#fff] font-bold text-center text-[16px] '>
          Login
        </button>
        <span className='text-center block'>
        Already have an account? <Link className='text-[14px] font-bold' to={"/sign-up"}> Sign Up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login; 