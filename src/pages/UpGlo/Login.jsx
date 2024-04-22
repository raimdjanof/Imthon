import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

function Login({setToken}) {
    const navigate = useNavigate()
    const loginSumbit = (evt)=>{
        evt.preventDefault()
        const data = {
            login:evt.target.name.value,
            password:evt.target.password.value
        }
        if(data.login == "raimdjanof" && data.password == "123"){
          toast.success("Ma'lumotlar tog'ri :)")
        }else{toast.error("Afsuski notogri :(")}
        setTimeout(()=>{
        setToken(data)
        },1000)
        window.localStorage.setItem("token" ,JSON.stringify(data))
    }
  return (
    <div className='pt-[100px] '>
        <Toaster position="top-center" reverseOrder={false}/>

        <h1 className='font-semibold text-[36px] pb-[40px] text-center'>
        Welcome, Log into you account
        </h1>
        <form onSubmit={loginSumbit} className='w-[512px] pb-[40px] text-center mx-auto bg-white pt-[70px]'>
            <h4 className='text-[#667085] w-[238px] mx-auto text-base font-medium pb-7'>It is our great pleasure to have you on board! </h4>
            <input
            className='w-[248px] outline-none block mb-5 mx-auto border-[1px] border-[#D9D9D9] p-2 rounded'
             type="text"
             name='name'
             required
             placeholder='Enter the name of school'
             />
             <input
            className='w-[248px] block mx-auto mb-5 outline-none border-[1px] border-[#D9D9D9] p-2 rounded'
             type="password"
             name='password'
             required
             placeholder='Enter Password'
             />
             <button className='text-[14px] shadow hover:shadow-none     mb-5 block mx-auto font-bold w-[248px] bg-[#2D88D4] p-2 rounded text-white'>
               Next
             </button>
             <span className='text-[#667085]'>Already have an account?  
                <Link className='text-[#2D88D4] text-[14px] font-semibold' to={'/SingUp'}> Sign up</Link>
            </span>
        </form>
    </div>
  )
}

export default Login