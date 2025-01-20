import React, { useEffect } from 'react'
import { useState } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import tour from './images/tour.png'



const Header = () => {

  
  const navigate = useNavigate();

  

  useEffect(() => {

    if (!localStorage.getItem('userdbtoken')) {
      navigate('/');
    }
  }, [])




  return (

    <header className='bg-white'>
      <nav className='flex justify-between items-center w-[92%] mx-auto '>
        <div>
          <Link to='/Home'>
          <img src={tour} className='h-16 w-auto object-cover ' alt="" />
          </Link>
        </div>

        <div className='flex items-center gap-6'>

        
          <button onClick={() => {
            localStorage.removeItem('userdbtoken');
            navigate('/');
          }}
            className=' bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl mb-5 mt-2'>Logout</button>


         

        </div>

      </nav>
    </header>
  )
}

export default Header;




{/* <button onClick={()=>{
  localStorage.removeItem('userdbtoken');
  navigate('/');
} } className='bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600'>Logout</button> */}
