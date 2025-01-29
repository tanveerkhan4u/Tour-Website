import React from 'react'
import { Link } from 'react-router-dom'




const Tour5 = ({ setShowModal }) => {
  return (
    <div>
          <div>
          
                <div
                  style={{
                    backgroundImage: `url(https://4kwallpapers.com/images/wallpapers/los-angeles-city-city-skyline-cityscape-aerial-view-blue-2880x1800-4285.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
          
                  }}
                  className="relative h-64 sm:h-80 md:h-96 h-96"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold  rounded">
                      Welcome to Los Angeles
                    </h1>
                  </div>
                </div>
                <div className='container-fluid bg-gray-100'>
                  <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-4 mb-5'>Description</h3>
                  <p className='text-md sm:text-sm md:text-md lg:text-md xl:text-xl ml-4 text-gray-500'>Los Angeles, often referred to as LA, is a sprawling metropolis in Southern California known for its vibrant culture, entertainment industry, and sunny weather. As the home of Hollywood, it’s the global epicenter of film and television, attracting dreamers and creatives from around the world. Beyond its celebrity allure, LA offers diverse neighborhoods, from the glitz of Beverly Hills and the artistic vibes of Silver Lake to the historic charm of Olvera Street and the beachfront lifestyle of Santa Monica and Venice. Iconic landmarks like the Hollywood Sign, Griffith Observatory, and Getty Center draw millions of visitors annually, while its culinary scene reflects the city's multicultural fabric. Whether exploring its world-class museums, hiking in the nearby mountains, or relaxing on its sun-soaked beaches, Los Angeles offers endless possibilities, making it a dynamic and unforgettable destination.</p>
                </div>
                <br />
                <div className="flex justify-center mt-5">
            
                    <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl mb-5">
                      More Enquiry
                    </button>
                  
                </div>
          
              </div>
    
        </div>
  )
}

export default Tour5