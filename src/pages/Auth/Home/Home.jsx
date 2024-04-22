import React, { useState } from 'react';
import InfoIcon from '../../../assets/Image/InfoIcon.svg';
import BgImg from "../../../assets/Image/BgImg.svg"
import Pusk from "../../../assets/Image/Pusk.svg"
import Del from '../../../assets/Image/Del.svg';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Home({ students, setStudents }) {
  const renderBackground = () => {
    if (filteredStudents.length === 0) {
      return (
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img src={BgImg} alt="Background Image" className="w-full h-full object-cover" />
        </div>
      );
    } else {
      return null;
    }
  };
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(''); // Input'a girilen metni saklar

  const handleDelete = (evt) => {
    const clickedId = evt.target.id;
    const foundStudentIndex = students.findIndex(item => item.id == clickedId);
    students.splice(foundStudentIndex, 1);
    toast.success("O'chirildi:)");
    setStudents([...students]);
  };

  const handleMoreInfo = (studentId) => {
    navigate(`/single/${studentId}`);
  };

  const filteredStudents = students.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-10 py-5">
      <Toaster position="top-center" reverseOrder={false} />
      <div className='mb-11 relative mt-[50px] w-[1040px]  mx-auto flex justify-between'>
        <label className='absolute right-0 -top-[40px] flex items-center space-x-10'>
          <img src={InfoIcon} width={24} height={24} alt="" />
          <button className='font-semibold'>
            Log out
          </button>
        </label>
        <h3 className='font-medium text-[16px]'>Teachers</h3>
        <label className='space-x-5'>
          <Link to={"/"} className='hover:bg-[#2571B1] text-[#2571B1] hover:text-white transition-all w-[118px] p-2 hover:rounded'>
            Export CSV
          </Link>
          <Link to={"/add"} className='hover:bg-[#2571B1] text-[#2571B1] hover:text-white transition-all w-[118px] p-2 hover:rounded'>
            Add Teachers
          </Link>
        </label>
      </div>
      <form className='flex w-[952px] mb-5 mx-auto'>
        <select className='outline-none'>
          <option value="1">Add filtr</option>
          <option value="1">React N1</option>
          <option value="2">React N2</option>
          <option value="3">React N3</option>
          <option value="4">React N4</option>
        </select>
        <div className='w-full flex bg-[#FCFAFA] px-4'>
          <img src={Pusk} alt="icon pusk" />
          <input
            type="text"
            name='StudentSearch'
            placeholder='Search for a student by name or email'
            className='w-full outline-none bg-[#FCFAFA]  p-3'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </form>
      <div className='w-[952px] mx-auto'>
      
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-[#ACACAC] py-3">UserAvatar</th>
              <th className="text-[#ACACAC] py-3">Name</th>
              <th className="text-[#ACACAC] py-3"> Subject</th>
              <th className="text-[#ACACAC] py-3">Class </th>
              <th className="text-[#ACACAC] py-3">Email address</th>
              <th className="text-[#ACACAC] py-3">Gender</th>
              <th className="text-[#ACACAC] py-3">Action</th>
            </tr>
          </thead>
          
          <tbody className='tbodyTr space-y-2'>
            {filteredStudents.map((student) => ( 
              <tr key={student.id} className="bg-white cursor-pointer even:bg-[#F4FAFF] rounded-lg">
                <td className="text-center p-2">
                  <img className='rounded-[50%] mx-auto w-[50px] h-[50px]' src={student.avatarImg} alt="Avatar user img" width={50} height={50} />
                </td>
                <td className="text-center h-[85px] p-2">{student.name}</td>
                <td className="text-center h-[85px] p-2">{student.subjeck}</td>
                <td className="text-center h-[85px] p-2">{student.class}</td>
                <td className="text-center h-[85px] p-2">{student.email}</td>
                <td className="text-center h-[85px] p-2">{student.gennr}</td>
                <td className="text-center items-center h-[85px] p-2">
                  <button className='p-1 bg-green-300 rounded text-white mr-2' onClick={() => handleMoreInfo(student.id)}> More</button>
                  <button className='p-1  rounded text-white' id={student.id} onClick={handleDelete}>
                    <img src={Del} alt="Delete Icon" />
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <div className="h-[50vh] mt-11 w-[100%] relative">
    <Toaster position="top-center" reverseOrder={false} />
    {renderBackground()} 
    <div className=' w-[640px] mx-auto '>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Home;