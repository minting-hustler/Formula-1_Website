import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='fixed z-[999] w-full  pt-1  px-20 py-4 flex justify-between items-center font-title'>
        <div className='logo'>
          <img className='h-12 w-full' src="/photos/f1_logo_1.png" alt="" />
        </div>
        <div className='links flex gap-10'>
          {["Home","Latest","Schedule","teams","stats","Login"].map((item,index)=>(<Link key={index} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={`text-lg capitalize font-regular text-black ${index === 5 && "ml-32"}`}>{item}</Link>))}
        </div>
      </div>
  )
}

export default Navbar