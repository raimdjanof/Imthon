import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function SignUp({ setSignUpData }) {
  const navigate = useNavigate();
  const signUpFormSubmit = (e) => {
    e.preventDefault();
    const newLoginValue = e.target.newLogin.value;
    const newPasswordValue = e.target.newPassword.value;
    
    if (!newLoginValue.trim() || !newPasswordValue.trim()) {
      toast.error("Login name krtilmagan!!!");
      return; 
    }

    const data = {
      newLogin: newLoginValue,
      newPassword: newPasswordValue
    };
    
    toast.success("Successfully toasted 😄");
    setTimeout(() => {
      setSignUpData(data);
      navigate("/");
    }, 1000);
    window.localStorage.setItem("newToken", JSON.stringify(data));
  };

  return (
    <div className=" h-[100vh] w-[full] bg-gradient-to-tr bg-[#FCFAFA] pt-[100px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className='font-semibold text-[36px] text-center mb-[50px]'>Welcome, create your school account </h1>
      <form onSubmit={signUpFormSubmit} className="py-16 bg-[#fff] w-[512px]  rounded-[15px] mx-auto">
          <h2 className='font-medium w-[238px] text-[#667085] mx-auto text-center text-[16px]'>It is our great pleasure to have you on board! </h2>
        <label className='flex flex-col  w-[248px] mx-auto mt-[18px]'>
          <input name='newLogin' 
          className='p-3 rounded-[4px] border-[1px] border-[#E5E5E5] outline-none' type="text" placeholder='Enter the name of admin' />
        </label>

        <label className='flex flex-col  w-[248px] mx-auto mt-[18px]'>
          <input name='newPassword'
           className='p-3 rounded-[4px] border-[1px] border-[#E5E5E5] outline-none'
            type="password" placeholder='Enter your password' />
        </label>

        <button className='w-[248px] mx-auto my-[20px] hover:opacity-70 block bg-[#2D88D4] py-[13px] rounded-lg text-[#fff] font-bold text-center text-[16px] '>
          Next
        </button>
        <span className='text-center block'>
        Already have an account? <Link className='text-[14px] font-bold' to={"/"}> Login</Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;