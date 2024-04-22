import React from 'react'
import { Link, NavLink } from 'react-router-dom'



import Logo from "../../assets/Image/Logo.jpg"
import HomeIcon from "../../assets/Image/Home.svg"
import Students from "../../assets/Image/Students.svg"
import Bank from "../../assets/Image/Bank.svg"
import Setting from "../../assets/Image/Setting.svg"
import Birja from "../../assets/Image/Birja.svg"
function Navigator() {
  return (
    <div>
       <div  className='py-10 border-b '>
       <Link>
        <img className='rounded-[50%] mx-auto' src={Logo} alt="site logo" width={70} height={70} />
        </Link>
        <h3 className='font-semibold text-center pt-7 text-white'>Udemy Inter. school</h3>
       </div>
       <div className='px-10 py-5 space-y-3'>
        <NavLink className={"flex space-x-5 items-center w-[192px] h-[40px]"} to={"/"}>
            <img src={HomeIcon} alt="icon home " width={16} height={16} />
            <span className='font-semibold text-white'>Dashboard</span>
        </NavLink>
        <NavLink className={"flex space-x-5 items-center w-[192px] h-[40px]"} to={"/home"}>
            <img src={HomeIcon} alt="icon home " width={16} height={16} />
            <span className='font-semibold text-white'>Teachers</span>
        </NavLink>
        <NavLink className={"flex space-x-5 items-center w-[192px] h-[40px]"} to={"/students"}>
            <img src={Students} alt="icon home " width={16} height={16} />
            <span className='font-semibold text-white'>Students/ classes</span>
        </NavLink>
        <NavLink className={"flex space-x-5 items-center w-[192px] h-[40px]"} to={"/billing"}>
            <img src={Bank} alt="icon home " width={16} height={16} />
            <span className='font-semibold text-white'>Billing</span>
        </NavLink>
        <NavLink className={"flex space-x-5 items-center w-[192px] h-[40px]"} to={"/settings"}>
            <img src={Setting} alt="icon home " width={16} height={16} />
            <span className='font-semibold text-white'>Settings and profile</span>
        </NavLink>
        <NavLink className={"flex space-x-5  items-center w-[192px] h-[40px]"} to={"/exams"}>
            <img src={Birja} alt="icon home " width={16} height={16} />
            <span className='font-semibold text-white'>Exams</span>
        </NavLink>

        <NavLink className={"features flex space-x-5 items-center w-[192px] h-[40px]"} to={"/features"}>
            <img src={Bank} alt="icon home " width={16} height={16} />
            <span className='font-semibold text-white'>Features</span>
        </NavLink>
       </div>
    </div>
  )
}

export default Navigator