import React from 'react'
import { Link } from 'react-router-dom'

const Tour2 = ({ setShowModal }) => {
  return (
    <div>

      <div
        style={{
          backgroundImage: `url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmw4NjkwMjA2NjMzLWltYWdlLWt0d3A1a3MwLmpwZw.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}
        className="relative h-64 sm:h-80 md:h-96 h-96"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold  rounded">
            Welcome to Kiwiana Panorama
          </h1>
        </div>
      </div>
      <div className='container bg-gray-100'>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-4 mb-5'>Description</h3>
        <p className='text-md sm:text-sm md:text-md lg:text-md xl:text-xl ml-4 text-gray-500'>The Kiwiana Panorama is a thrilling 16-day adventure tour through New Zealand, designed to showcase the country’s stunning landscapes, vibrant culture, and adrenaline-packed activities. Once offered by Contiki, this tour catered to travelers aged 18 to 35, providing an unforgettable journey through iconic destinations. Highlights included exploring the geothermal wonders of Rotorua, experiencing Māori culture through hāngi dinners and dance performances, cruising on Lake Taupo, and hiking the volcanic trails of Tongariro National Park. The tour also featured the bustling arts scene of Wellington, the adventure-packed activities of Queenstown, and the breathtaking Franz Josef Glacier. Accommodation was a mix of hotels, hostels, and lodges, ensuring a comfortable experience, with daily breakfasts and select dinners included. Although the Kiwiana Panorama tour has been rebranded as the New Zealand Panorama, it remains a favorite for those seeking an action-packed exploration of New Zealand's beauty and culture.</p>
      </div>
      <br />
      <div className="flex justify-center mt-5">
        
          <button  onClick={() => setShowModal(true)} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl mb-5">
            More Enquiry
          </button>
        
      </div>

    </div>
  )
}

export default Tour2