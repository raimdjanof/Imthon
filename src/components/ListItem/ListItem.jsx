import React from 'react'

function ListItem( {UrlImg,title,text}) {
  return (
    <li className='flex space-x-5'>
            <img className='mb-9' src={UrlImg} alt=" icon img" />
            <div>
              <h2 className='font-medium text-[#4F4F4F] mb-2 text-[24px]'>{title} </h2>
              <p  className='text-[##4F4F4F] w-[510px]'>{text}</p>
            </div>
          </li>
  )
}

export default ListItem