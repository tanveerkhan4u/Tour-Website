import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    <img className='w-50' src='https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg'/>
  <h1 className='text-3xl font-bold mt-5 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>Sorry, Page Not Found</h1>
    <Link to="/Home" className=' bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl mb-5 mt-2' >Go to Home Page</Link>
    <br/><br/>
  </div>
  )
}

export default Error;