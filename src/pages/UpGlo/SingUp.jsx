import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function SingUp({ setSingUpData }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            newLoginValue: e.target.newLogin.value,
            newPasswordValue: e.target.newPassword.value
        };

        toast.success("Ma'lumotlar kiritildi :)")
        setTimeout(() => {
            setSingUpData(data);
            navigate("/")
        }, 1000)
    window.localStorage.setItem("newToken", JSON.stringify(data));

    };

    return (
        <div className='pt-[100px]'>
            <Toaster position="top-center" reverseOrder={false}/>
            <h1 className='font-semibold text-[36px] pb-[40px] text-center'>
                Welcome, create your school account 
            </h1>
            <form onSubmit={handleSubmit} className='w-[512px] pb-[40px] text-center mx-auto bg-white pt-[70px]'>
                <h4 className='text-[#667085] w-[238px] mx-auto text-base font-medium pb-7'>It is our great pleasure to have you on board! </h4>
                <input
                    className='w-[248px] outline-none block mb-5 mx-auto border-[1px] border-[#D9D9D9] p-2 rounded'
                    type="text"
                    name='newLogin'
                    required
                    placeholder='Enter the school email'
                />
                <input
                    className='w-[248px] block mx-auto mb-5 outline-none border-[1px] border-[#D9D9D9] p-2 rounded'
                    type="email"
                    required
                    placeholder='Enter the name of school'
                />
                <input
                    className='w-[248px] block mx-auto mb-5 outline-none border-[1px] border-[#D9D9D9] p-2 rounded'
                    type="password"
                    name='newPassword'
                    required
                    placeholder='Enter the password'
                />
                <button className='text-[14px] shadow hover:shadow-none mb-5 block mx-auto font-bold w-[248px] bg-[#2D88D4] p-2 rounded text-white'>
                    Login
                </button>
                <span className='text-[#667085]'>Already have an account?  
                </span>
            </form>
        </div>
    )
}

export default SingUp;