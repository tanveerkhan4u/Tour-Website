import React from 'react'
import { Link } from 'react-router-dom'

const Tour6 = ({ setShowModal }) => {
  return (
     <div>
               <div>
               
                     <div
                       style={{
                         backgroundImage: `url(https://t4.ftcdn.net/jpg/01/71/06/27/360_F_171062704_f2SxXQNagehT2PZTvCKQCwOZcDzKG6Mm.jpg)`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
               
                       }}
                       className="relative h-64 sm:h-80 md:h-96 h-96"
                     >
                       <div className="absolute inset-0 flex items-center justify-center">
                         <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold  rounded">
                           Welcome to Santiago
                         </h1>
                       </div>
                     </div>
                     <div className='container bg-gray-100'>
                       <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-4 mb-5'>Description</h3>
                       <p className='text-md sm:text-sm md:text-md lg:text-md xl:text-xl ml-4 text-gray-500'>Santiago, the vibrant capital of Chile, is a dynamic city nestled in a valley surrounded by the majestic Andes Mountains. As the country’s cultural, political, and economic hub, Santiago blends modern skyscrapers with historic colonial architecture, creating a unique skyline. The city's neighborhoods, such as the bohemian Bellavista and upscale Las Condes, offer diverse experiences, from lively street art and trendy cafes to luxury shopping and fine dining. Visitors can explore landmarks like Plaza de Armas, the historic heart of the city, or ascend Cerro San Cristóbal for breathtaking panoramic views. Santiago is also a gateway to Chile’s renowned wine regions, with world-class vineyards just a short drive away. Its vibrant markets, such as La Vega Central, showcase the flavors of Chile, while museums like the Museum of Memory and Human Rights provide insight into the nation’s history. Whether you’re seeking adventure, culture, or culinary delights, Santiago offers an unforgettable experience at the crossroads of tradition and modernity.</p>
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

export default Tour6