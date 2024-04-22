import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Img1 from "../../../assets/Image/Img1.jpg"
import Img2 from "../../../assets/Image/Img2.jpg"
import Img3 from "../../../assets/Image/Img3.jpg"
import Img4 from "../../../assets/Image/Img4.jpg"
import Img5 from "../../../assets/Image/Img5.jpg"
import SingleS from "../../../assets/Image/SingleS.svg"
import Phone from "../../../assets/Image/Phone.svg"
import email from "../../../assets/Image/email.svg"
import pusk from "../../../assets/Image/Pusk.svg"
import infoIcon from "../../../assets/Image/InfoIcon.svg"
function SingleStudents({students}) {
  const {id} = useParams()
  const singleData =students.find(item => item.id == id)
  return (
    <>
    <div className='flex justify-between px-[60px] py-5'>
     <label className='space-x-5'>
          <Link to={"/"} className='hover:bg-[#2571B1] text-[#2571B1] hover:text-white transition-all w-[118px] p-2 hover:rounded'>
            Export CSV
          </Link>
          <Link to={"/add"} className='hover:bg-[#2571B1] text-[#2571B1] hover:text-white transition-all w-[118px] p-2 hover:rounded'>
            Add Teachers
          </Link>
        </label>
        <div className='flex items-center space-x-6'>
          <img src={infoIcon} alt="icon svg" />
          <Link>
          Long out
          </Link>
        </div>
    </div>
    <form className='flex w-[1100px]  mx-auto'>
        <select className='outline-none w-[132px] shadow-lg px-7'>
          <option value="1">Add filtr</option>
          <option value="1">React N1</option>
          <option value="2">React N2</option>
          <option value="3">React N3</option>
          <option value="4">React N4</option>
        </select>
        <div className='w-full bg-[#FCFAFA] p-3 flex space-x-4'>
          <img src={pusk} alt="pusck" />
          <input type="text" name='StudentSearch' placeholder='Search for a student by name or email'
            className='w-full outline-none bg-[#FCFAFA] p-3' />
        </div>
      </form>
      <div className='w-[1041px] flex justify-center space-x-[100px] mx-auto py-11'>
          <div className='flex flex-col items-center '>
            <img className=' w-[280px] h-[280px] mb-5 rounded-[50%]' src={singleData.avatarImg} alt="user avatar icon" />
          <h3 className='font-bold text-[16px]'>{singleData.name}</h3>
          <span className='font-bold mb-5 text-[#A7A7A7]'>Geology teacher</span>
         <div className='flex space-x-5'>
         <img className='cursor-pointer' src={SingleS} alt="sngle page avatar" />
        <img  className='cursor-pointer' src={Phone} alt="sngle phone icon " />
        <img  className='cursor-pointer' src={email} alt="email icon" />
         </div>
        </div>
        <div className='pt-10'>
          <span className='font-semibold text-[16px]'>About</span>
          <p className='w-[335px] text-[#A7A7A7] mb-[50px] font-medium text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero optio id quis, ab, provident nihil aut quibusdam dolorem iusto at tempore quod! Non quaerat adipisci aspernatur eum eius modi.</p>
          <label className='space-x-32 px-5'>
            <span className='font-bold text-[12px]'>Age</span>            
            <span className='font-bold text-[12px]'>Gender</span>            
          </label> 
          <label className='space-x-32 block px-5'>
            <span className='font-medium text-[#A7A7A7] text-[12px]'>Age</span>            
            <span className='font-medium text-[#A7A7A7] text-[12px]'>{singleData.gennr} Male</span>            
          </label> 

          <div className='space-y-7 mt-5 px-5'>
            <span className='font-semibold text-[12px] mb-10' >Teachers from the same class</span>
            <label className='flex items-center'>
            <span className=''><img className='ImagSPan rounded-[45%] scaled-image' src={Img1} alt="" /></span>
            <span className='-ml-5'><img className='ImagSPan rounded-[45%] scaled-image' src={Img2} alt="" /></span>
            <span className='-ml-5'><img className='ImagSPan rounded-[45%] scaled-image' src={Img3} alt="" /></span>
            <span className='-ml-5'><img className='ImagSPan rounded-[45%] scaled-image' src={Img4} alt="" /></span>
            <span className='-ml-5'><img className='ImagSPan rounded-[45%] scaled-image' src={Img5} alt="" /></span>
              <span className='font-medium ml-5 text-[#3c609d] text-[10px]'>+12 more</span>
            </label>
          </div>
        </div>

      </div>
    </>
  )
}

export default SingleStudents