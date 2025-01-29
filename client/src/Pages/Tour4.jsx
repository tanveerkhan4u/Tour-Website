import React from 'react'
import { Link } from 'react-router-dom'

const Tour4 = ({ setShowModal }) => {
  return (
    <div>
      <div>
      
            <div
              style={{
                backgroundImage: `url(https://crillontours.travel/wp-content/uploads/2018/08/Crillon-Tours-Full-day-city-tour-of-La-Paz-1.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
      
              }}
              className="relative h-64 sm:h-80 md:h-96 h-96"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold  rounded">
                  Welcome to Anchorage to la paz
                </h1>
              </div>
            </div>
            <div className='container-fluid bg-gray-100'>
              <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-4 mb-5'>Description</h3>
              <p className='text-md sm:text-sm md:text-md lg:text-md xl:text-xl ml-4 text-gray-500'>A journey from Anchorage, Alaska, to La Paz, Mexico, offers a remarkable transition from the icy wilderness of the north to the warm beaches of Baja California Sur. Anchorage, surrounded by snow-capped mountains and expansive forests, is a gateway to Alaskan adventures, including glaciers, wildlife, and the northern lights. As you travel south, the landscape changes dramatically, crossing lush forests, arid deserts, and bustling urban hubs. Arriving in La Paz, you’re greeted by the tranquil turquoise waters of the Sea of Cortez, pristine beaches, and vibrant marine life. Known for its laid-back charm, La Paz offers incredible opportunities for snorkeling, kayaking, and whale-watching, making it a perfect escape for nature lovers and adventure seekers alike. This journey is a testament to the incredible diversity of North America, offering unforgettable contrasts in scenery, climate, and culture.</p>
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

export default Tour4