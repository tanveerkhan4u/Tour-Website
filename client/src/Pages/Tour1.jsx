import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'



const Tour1 = ({ setShowModal }) => {


  

  return (


    <>
      <div
        style={{
          backgroundImage: `url(/img/singaporetrip.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}
        className="relative h-64 sm:h-80 md:h-96 h-96"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold  rounded">
            Welcome to Singapore Trip
          </h1>
        </div>
      </div>
      <div className='container-fluid bg-gray-100'>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-4 mb-5'>Description</h3>
        <p className='text-md sm:text-sm md:text-md lg:text-md xl:text-xl ml-4 text-gray-500'>Singapore is a vibrant, multicultural city known for its stunning architecture, world-class attractions, delicious food, and lush greenery despite being highly urbanized. It’s perfect for families, solo travelers, and even business trips.Singapore, often referred to as the "Lion City," is a dynamic and cosmopolitan destination known for its remarkable blend of modernity and tradition. Despite its small size, this city-state boasts world-class attractions, lush green spaces, and a rich cultural heritage. Iconic landmarks like Marina Bay Sands, Gardens by the Bay, and the Merlion symbolize Singapore's innovative spirit and architectural brilliance. Its multicultural neighborhoods, including Chinatown, Little India, and Kampong Glam, offer a glimpse into the harmonious coexistence of diverse ethnicities. Renowned for its hawker centers, Singapore is a food lover's paradise, serving everything from Hainanese chicken rice to chili crab. With efficient public transport, a reputation for cleanliness, and a warm tropical climate, Singapore provides a seamless travel experience, making it a must-visit destination for tourists from around the globe.</p>
      </div>
      <br />
      <div className="flex justify-center mt-5 ">
        
        <button   onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl mb-5 "
        >
          enuiry now
        </button>
    
        
         
      </div>
    </>
  )
}

export default Tour1