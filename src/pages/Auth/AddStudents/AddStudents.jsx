import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import AddIcon from "../../../assets/Image/Add.svg";

function AddStudents({ students, setStudents }) {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState(null);

  const chooseImgChange = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSambitStudents = (e) => {
    e.preventDefault();

    const data = {
      id: students.length ? students[students.length - 1].id + 1 : 1,
      avatarImg: imgUrl,
      name: e.target.name.value,
      info: e.target.subjeck.value,
      class: e.target.class.value,
      email: e.target.email.value,
      gender: e.target.gennr.value,
    };

    if (imgUrl === null) {
      toast.error('Rasm tanlanmadi :(');
    } else {
      setStudents([...students, data]);
      toast.success('Ma\'lumotlar kiritildi 😊');
      setTimeout(() => {
        navigate('/home', { state: { selectedClass: data.class, selectedGender: data.gender } });
      }, 1000);
    }
  };

  

  return (
    <>
    
      <div className="py-[100px]">
        <form onSubmit={handleSambitStudents} className="fromAdd  rounded-xl  w-[969px]  mx-auto p-5">
          <Toaster position="top-center" reverseOrder={false} />
          <div className='flex justify-between'>
            <div>
              <h1 className='font-semibold mb-5 text-[#4F4F4F] text-[32px]'>Add Teachers</h1>
              <label className='flex mb-7 space-x-20'>
                <span className='font-medium text-[#4F4F4F] text-[18px]'>Manually</span>
                <span className='font-medium text-[#4F4F4F] text-[18px]'>Import CSV</span>
              </label>
            </div>
            <div>
              <label className="flex rounded border p-2 mt-4">
                <span className="text-[16px] flex-none font-medium hover:text-blue-600 cursor-pointer">New img</span>
                <input
                  onChange={chooseImgChange}
                  className="w-[324px] rounded-lg border outline-none opacity-0"
                  type="file"
                  name="phone" 
                  placeholder="Add new phone"
                />
                {imgUrl && <img src={imgUrl} alt="chose img" width={50} height={40} />}
              </label>
            </div>
          </div>
          <div className="space-y-3">
            <label className='flex flex-col'>
              <span className="text-[16px] font-medium">Full name</span>
              <input
                className="w-[696px] border mb-2 p-1.5 rounded-lg outline-none"
                type="text"
                name="name"
                required
                placeholder="Add new name"
              />
            </label>
            <div className='flex space-x-16'>
              <div className='w-[324px] '>
                <label className=''>
                  <span className="text-[16px] font-medium">Email address</span>
                  <input
                    className="w-full mb-7 p-1.5 border rounded-lg outline-none"
                    type="email"
                    name="email"
                    required
                    placeholder="Add new email"
                  />
                </label>
                <label>
                  <span className="text-[16px] font-medium">Password</span>
                  <input
                    className="w-full p-1.5 mb-7 border rounded-lg outline-none"
                    type="password"
                    name="password"
                    placeholder="Add new phone number"
                    required
                  />
                </label>
                <label>
                  <select name='subjeck' className='outline-none border w-full p-2 rounded-lg'>
                    <option value="react">React</option>
                    <option value="scss">Scss</option>
                    <option value="html">Html</option>
                    <option value="vite">Vite</option>
                  </select>              
                </label>
                <div className='w-full flex mt-7 justify-between'>
                  <button className='p-3 hover:bg-[#F1F1F1] rounded flex font-medium text-[16px] text-[#4F4F4F]'>
                    <img className='mr-3' src={AddIcon} alt="" />
                    Add another
                  </button>
                  <button type="submit" className='p-3 hover:bg-[#F1F1F1] rounded flex font-medium text-[16px] text-[#4F4F4F]'>
                    Add teacher
                  </button>
                </div>
              </div>
              <div className=''>
                <div className=' flex space-x-5 mb-6'>
                <select name='class' className='outline-none border w-[179px]  p-2 rounded mt-6'>
                  <option value="react N1">React N1</option>
                  <option value="react N2">React N2</option>
                  <option value="react N3">React N3</option>
                  <option value="react N4">React N4</option>
                </select>
                <select name='gennr' className='outline-none w-[179px] border  p-2 rounded mt-6'>
                  <option value="female">Female 2</option>
                  <option value="male">Male 2</option>
                </select>
                </div>
                <label>
              <span className="text-[16px] font-medium">Phone number</span>
              <input
                className="w-full p-1.5 mb-7 border rounded-lg outline-none"
                type="number"
                name="phoneNumber"
                placeholder="Add new phone number"
                required
              />
            </label>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    </>
  );
}

export default AddStudents;