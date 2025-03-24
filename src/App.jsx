import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Content from './components/Content'
import CoverPage from './components/CoverPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/",
      element:<><Home/></>
    },
  ])
  return (
    <div className='w-full h-screen  text-white bg-zinc-950'>
      <RouterProvider router = {router}/>
      
    </div>
  )
}

export default App