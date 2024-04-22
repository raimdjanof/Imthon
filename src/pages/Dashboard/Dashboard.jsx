import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../../components/ListItem/ListItem'

import Pots from "../../assets/Image/Pots.svg"
import HomeIcon from "../../assets/Image/HomeIcon.svg"
import Schol from "../../assets/Image/Schol.svg"
import UserIcon from "../../assets/Image/UserIcon.svg"
import InfoIcon from "../../assets/Image/InfoIcon.svg"
function Dashboard() {
  return (
    <div className='w-full'>
      <div className='flex justify-between mb-[50px] pt-16 pb-5 bg-[#ebe8e8] px-[150px]'>
        <label className=''>
          <span className='font-mixed block text-[16px] text-gray-800'>Learn  how to launch faster</span>
          <span className='font-mixed block text-[16px] text-gray-800'>watch our webinar for tips from our experts and get a limited time offer.</span>
        </label> 
        <div className='flex space-x-16 items-center'>
          <img src={InfoIcon} alt="info icon" />
          <Link className='font-semibold text-white bg-[#509CDB] w-[130px] py-3 px-8  rounded-lg' to={"/singUp"}>
          Log out
          </Link>
        </div>
      </div>
      <div className='px-[150px]'>
        <h1 className='font-semibold text-[36px] text-[#4F4F4F]'>
        Welcome to your dashboard, Udemy school
        </h1>
        <span className='font-semibold text-[#4F4F4F] ml-[50px] text-[24px]'>Uyo/school/<a href='#'>@teachable.com</a></span>
        <ul className='pt-10 relative space-y-10 px-[50px]'>
          <ListItem 
          UrlImg={UserIcon} title={"Add other admins "}
          text={`Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!`}/>
          <ListItem 
          UrlImg={HomeIcon} title={"Add classes  "}
          text={`Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!`}/>
          <ListItem 
          UrlImg={Schol} title={"Add students"}
          text={`Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!`}/>
        <button className='font-semibold absolute bottom-8 right-0 text-[14px] bg-[#152259] text-white w-[181px] p-4 rounded-[30px] flex items-center space-x-5  shadow'> <img className='mr-4 ml-2' src={Pots} alt="button icon" />Support     </button>
        </ul>
         
      </div>
    </div>
  )
}

export default Dashboard