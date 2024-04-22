import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Auth/Home/Home'
import AddStudents from './pages/Auth/AddStudents/AddStudents'
import SingleStudents from './pages/Auth/SingleStudents/SingleStudents'
import Login from "./pages/UnAuth/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import Teachers from "./pages/Teachers/Teachers"
import Students from "./pages/Students/Students"
import Billing from "./pages/Billing/Billing"
import Settings from "./pages/Settings/Settings"
import Exams from "./pages/Exams/Exams"
import Features from "./pages/Features/Features"
import Navigator from './components/Navigator/Navigator'
function Authentication( ) {
  const [students , setStudents] = useState(JSON.parse(window.localStorage.getItem("students")) ||[
    {
      id:1,
      avatarImg: 'img',
      name:"Otabek",
      email:"raimdjanof@gmail.com",
      phone:"Iphone",
      phoneNumber:"+998917738727",
      createAt:"19.04.2024"
  },
  ])
  window.localStorage.setItem("students", JSON.stringify(students))
  return (
    <div className='flex'>
      <nav className='w-[20%] bg-[#152259] h-[100vh] '>
      <Navigator/>
      </nav> 
      <div className='w-[80%] '>

        <div className=''> 
        <Routes>
          <Route path='/add' element={<AddStudents setStudents={setStudents} students={students}/>}/>
          <Route path='/single/:id' element={<SingleStudents students={students}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/home' element={<Home students={students} setStudents={setStudents}/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/exams' element={<Exams/>}/>
          <Route path='/features' element={<Features/>}/>
        </Routes>

        </div>
      </div>
    </div> 
  )
}

export default Authentication




// import Arrow from "./assets/Image/arrow.svg"
// import Icon from "./assets/Image/Icon.svg"
// import Admin from "./assets/Image/Admin.jpg"
// import Pusk from "./assets/Image/Pusk.svg"