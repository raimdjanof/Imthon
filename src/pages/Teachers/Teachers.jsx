import React from 'react'
import { Link } from 'react-router-dom'



import InfoIcon from "../../assets/Image/InfoIcon.svg"
function Teachers() {
  return (
    <div className='pt-[60px]'>
      <div className='mb-10 relative w-[1040px]  mx-auto flex justify-between'>
        <label className='absolute right-0 -top-[40px] flex items-center space-x-10'>
          <img src={InfoIcon} width={24} height={24} alt="" />
          <button className='font-semibold'>
            Log out
          </button>
        </label>
      <h3 className='font-medium text-[16px]'>Teachers</h3>
      <label className='space-x-5'>
         <Link className='hover:bg-[#2571B1] text-[#2571B1] hover:text-white transition-all hover:w-[118px] hover:p-2 hover:rounded'>
         Export CSV         
         </Link>
         <Link className='hover:bg-[#2571B1] text-[#2571B1] hover:text-white transition-all hover:w-[118px] hover:p-2 hover:rounded'>
         Add Teachers        
         </Link>
      </label>    
      </div>
      <form className='flex w-[952px] mb-5  mx-auto'>
        <select>
          <option value="1">React N1</option>
          <option value="2">React N2</option>
          <option value="3">React N3</option>
          <option value="4">React N4</option>
        </select>
        <div className=' w-full'>
          <img src="" alt="" />
          <input type="text" name='StudentSearch' placeholder='Search for a student by name or email'
          className='w-full outline-none bg-[#FCFAFA] p-3' />
        </div>
      </form>
      <div className='w-[952px]  mx-auto bg-[#FCFAFA]'>
      <table className='w-full'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Subject</th>
      <th>Class</th>
      <th>Email  address</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='text-center'>Ahmet</td>
      <td className='text-center'>Yılmaz</td>
      <td className='text-center'>25</td>
      <td className='text-center'>25</td>
      <td className='text-center'>25</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Teachers