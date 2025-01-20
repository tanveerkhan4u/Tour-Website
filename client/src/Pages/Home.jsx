import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import '../Pages/Home.css'
import 'swiper/css/autoplay';
import tourData from '../Components/dummyData';
import Card from './Card';
import { FaBus } from "react-icons/fa";
import { Link } from 'react-router-dom'




const Home = () => {


  const [tourList, setTourList] = useState(tourData);

  const searchRef = useRef(null);

  const searchTour = () => {
    const filteredData = tourData.filter((tour) => {
      return tour.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    });
    setTourList(filteredData);
  }



  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src="https://www.questtours.in/backend-assets/uploads/shutterstock_127288088_copy.jpg" className='w-full h-96 mx-auto  object-cover ' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://vaabrowse.virginatlantic.com//content/dam/vhols/magnolia/virginholidays/destinations/middle-east/dubai-city/dubai-city2" className='w-full h-96 mx-auto img-fluid  object-cover ' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/empty-green-nature-scene-with-lake_1234738-245730.jpg" className='w-full h-96 mx-auto img-fluid object-cover ' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/0b/a5/a6/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_15c12bc8431b4bf1b61e" className='w-full h-96 mx-auto img-fluid object-cover ' alt="" />
        </SwiperSlide>
        
        <br /><br />
      </Swiper>
      <br />

      <div className='container  p-4'>
        <div>
          <h2 className='text-center mb-4 sm:text-md md:text-xl lg:text-4xl ml-5 text-bold'>Why book with us?</h2>
        </div>
      </div>

      <div className='container'>

        <Swiper slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30
            },
          }}

          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <SwiperSlide>
              <div className='overflow-hidden flex flex-col items-center px-4 py-4'>
                <img src="/img/download3.png" className='w-1/4 mb-2' alt="" />
                <h4 className='text-center mb-2 cursor-pointer hover:text-red-500'>Exploring Easy Trip</h4>
                <p className='text-center text-gray-500'>Book Last Minute, skip lines and get free cancellation for easier exploring</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='overflow-hidden flex flex-col items-center'>
                <img src="/img/download4.png" className='w-1/4 mb-2' alt="" />
                <h4 className='text-center mb-2 cursor-pointer hover:text-red-500'>Travel you can trust</h4>
                <p className='text-center text-gray-500'>Road reviews & reliable customer support. we are with you at every step.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='overflow-hidden flex flex-col items-center '>
                <img src="/img/download1.png" className='w-1/4 mb-2' alt="" />
                <h4 className='text-center mb-2 cursor-pointer hover:text-red-500'>Discover the possibilities</h4>
                <p className='text-center text-gray-500'>With nearly half a millions of attractions hotels & more, your are sure to find enjoy.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='overflow-hidden flex flex-col items-center'>
                <img src="/img/download2.png" className='w-1/4 mb-2' alt="" />
                <h4 className='text-center mb-2 cursor-pointer hover:text-red-500'>Enjoy deals & delight </h4>
                <p className='text-center text-gray-500'>Qualities Activities. Great Price. Plus Earn Credits to save more.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='overflow-hidden flex flex-col items-center'>
                <img src="/img/logo1.svg" className='w-1/4 mb-2' alt="logo1" />
                <h4 className='text-center mb-2 cursor-pointer hover:text-red-500'>24/7 Support </h4>
                <p className='text-center text-gray-500'>Get assistance 24/7 on any kind of travel related query. </p>
              </div>
            </SwiperSlide>
          </div>
          <br />
        </Swiper>
        <br />
      </div>

      <div className='container bg-[#fffaf9] p-4'>
        <div>
          <h3 className='text sm:text-sm md:text-xl lg:text-4xl ml-5 text-bold'>Top Destination For Your Next Vacation</h3>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 px-4 mt-5'>
          <div className='image'>
            <img src="/img/paris.png"  alt="" />
            <div className='content'>
            <h1>Paris</h1>
            <p>Paris, the capital of France, is one of the most iconic cities in the world, known for its rich history.</p>
            </div>
          </div>

          <div className=' image'>
            <img src="/img/bali.png" alt="" />
            <div className='content'>
            <h1>Bali</h1>
            <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok.</p>
            </div>
          </div>
          <div className=' image'>
            <img src="/img/phuket.png" alt="" />
            <div className='content'>
            <h1>Phuket</h1>
            <p>Phuket province is located in southern Thailand. It is the biggest Island of Thailand and sits on the Andaman sea. </p>
            </div>
          </div>
          <div className=' image'>
            <img src="/img/tokyo.png" alt="" />
            <div className='content'>
            <h1>Tokyo</h1>
            <p>Tokyo, officially the Tokyo Metropolis, is the capital of Japan. With a population of over 14 million</p>
            </div>
          </div>
          <div className=' image'>
            <img src="/img/trang.png" alt="" />
            <div className='content'>
            <h1>Nha Trang</h1>
            <p>Nha Trang is called the seafood capital of Vietnam for a reason. Teeming with marine life, the waters off the Khanh Hoa coast.</p>
            </div>
          </div>
          <div className=' image'>
            <img src="/img/cancun.png" alt="" />
            <div className='content'>
            <h1>Cancun</h1>
            <p>Cancún is the most populous city in the Mexican state of Quintana Roo, located in southeast Mexico. </p>
            </div>
          </div>
          <div className=' image'>
            <img src="/img/bangkok.png" alt="" />
            <div className='content'>
            <h1>Bangkok</h1>
            <p>Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep.</p>
            </div>
          </div>
          <div className=' image'>
            <img src="/img/malaysia.png" alt="" />
            <div className='content'>
            <h1>Malaysia</h1>
            <p>With a population of over 34 million, the country is the world's 42nd-most populous country. </p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className='container bg-zinc-200 p-4'>
        <div className="flex justify-center mt-5 space-x-2 p-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:max-w-xl md:max-w-lg" ref={searchRef} />
          <button1 onClick={searchTour} className="p-2 rounded" >
            Search
          </button1>
        </div>
      </div>
      <br />
      <div className='container'>
        <div>
          <h3 className='text sm:text-sm md:text-xl lg:text-4xl ml-5 text-bold'>Popular Activities</h3>
        </div>
      </div><br />
      <div className='container-fluid bg-slate-100 p-5 '>
        
        <div className='flex flex-wrap gap-10 justify-center mt-5 my-5 ' >
          {
            tourList.map((tour, name) => {
              return <Card key={name} tour={tour}

              />
            })
          }
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center sm:text-sm md:text-xl lg:text-4xl ml-5 mb-4 text-semibold'>Famous Tourist Attraction</h3>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 justify-center'>
          <div className='  flex flex-col items-center'>
            <img src="/img/dubai.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Dubai</p>
          </div>
          <div className=' flex flex-col items-center '>
            <img src="/img/jaipur.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Jaipur</p>
          </div>
          <div className=' flex flex-col items-center'>
            <img src="/img/kerala.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Kerala</p>
          </div>
          <div className=' flex flex-col items-center '>
            <img src="/img/leh.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Leh</p>
          </div>
          <div className='flex flex-col items-center '>
            <img src="/img/lakshadweep.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Lakshadweep</p>
          </div>
          <div className='flex flex-col items-center '>
            <img src="/img/kashmir.svg" className='w-28 h-28 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Kashmir</p>
          </div>
          <div className='flex flex-col items-center '>
            <img src="/img/bali-indonesia.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Indonesia</p>
          </div>
          <div className='flex flex-col items-center '>
            <img src="/img/paris.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Paris</p>
          </div>
          <div className='flex flex-col items-center '>
            <img src="/img/andaman-new.png" className="w-28 h-28 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out" alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Andaman</p>
          </div>
          <div className='flex flex-col items-center '>
            <img src="/img/bangalore.svg" className='hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' alt="" />
            <p className='text-center mt-3 text-lg font-semibold hover:text-[#1273df] '>Bengaluru</p>
          </div>
        </div>
      </div>
      <br />
      <div className='py-14 md:py-28 bg-gray-50'>
        <div className="container">
          <h1 className='pb-16 tracking-wider text-4xl font-semibold  text-center'>
            Why Choose Us
          </h1>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-14 sm:gap-4">
              <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                <p className='text-dark/70 font-semibold'>We specialize in creating personalized travel itineraries that cater to your interests, preferences, and budget. </p>
                <p className='text-5xl rotate-90 text-primary text-center translate-x-5 bus'>.....</p>
                <FaBus className='text-5xl bus ' />
              </div>
              <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                <FaBus className='text-5xl green' />
                <p className='text-5xl rotate-90 text-primary text-center translate-x-5 green'>.....</p>
                <p className='text-dark/70 font-semibold'>
                  Our team consists of experienced travel professionals who know the ins and outs of the best destinations.  </p>
              </div>
              <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                <p className='text-dark/70 font-semibold'>From flights and accommodations to activities and local transportation, we handle all the details so you can focus on enjoying your trip.</p>
                <p className='text-5xl rotate-90 text-primary text-center translate-x-5 yellow'>.....</p>
                <FaBus className='text-5xl yellow' />
              </div>
              <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                <FaBus className='text-5xl blue' />
                <p className='text-5xl rotate-90 text-primary text-center translate-x-5 blue'>.....</p>
                <p className='text-dark/70 font-semibold'>We offer competitive pricing without compromising on quality. Our partnerships with airlines, hotels, and local vendors ensure you get the best value for your money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      












    </div>
  )
}

export default Home