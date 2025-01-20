import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Card({ tour }) {
  console.log(tour);


  return (
    <>
      <Link to={`/Tour${tour.id}`} className=' text-decoration-none'>
        <div className='font-bold w-[350px] bg-white p-5 flex flex-col rounded-lg gap-2 shadow-xl'>
          <img src={tour.img} alt="" className='w-auto h-[180px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out ' />
          <div className='text-md flex justify-between mt-2'>
            <h2>{tour.name}</h2>
            <span className='text-orange-500 '>₹{tour.price}</span>
          </div>
          <p className='text-sm font-normal'>{tour.desc.slice(0, 50)}...</p>
          <div className='flex justify-between'>
            <span className='flex justify-center items-center'>
              <AiFillStar className='mr-1 text-yellow-400' /> {tour.rating}
            </span>
            <button className='p-1 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600'>More Details</button>
          </div>
        </div>
      </Link>




    </>
  )
}

export default Card