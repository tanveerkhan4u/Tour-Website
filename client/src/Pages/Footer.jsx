import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import tour from '../Components/images/tour.png';

const Footer = () => {
    return (
        <footer>
            <div className='p-10 bg-black text-[#d9d9d9] '>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='mb-5 lg:ml-20'>
                            <img src={tour} className='object-cover w-32 h-32  lg:ml-10 ' alt="" />



                            <div >
                                <ul className='flex gap-2 mt-5'>
                                    <FaFacebookF className='p-2 cursor-pointer inline-flex items-center
       rounded-full mx-1.5 text-2xl  w-10 h-10 justify-center ' style={{ border: "1px solid white" }} />
                                    <FaInstagram className='p-2 cursor-pointer inline-flex items-center
       rounded-full mx-1.5 text-2xl  w-10 h-10 justify-center' style={{ border: "1px solid white" }} />
                                    <FaXTwitter className='p-2 cursor-pointer inline-flex items-center
       rounded-full mx-1.5 text-2xl  w-10 h-10 justify-center' style={{ border: "1px solid white" }} />
                                    <FaLinkedinIn className='p-2 cursor-pointer inline-flex items-center
       rounded-full mx-1.5 text-2xl  w-10 h-10 justify-center' style={{ border: "1px solid white" }} />

                                </ul>
                            </div>
                        </div>
                        <div className='mb-5 lg:ml-20 lg:mt-5'>
                            <h4 className='text-3xl font-bold text-white'>Company</h4>
                            <ul className='mt-2'>
                                <li>Home</li>
                                <li>About </li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='mb-5 lg:mt-5'>
                            <h4 className='text-3xl font-bold text-white'>Get In Touch </h4>
                            <ul className='mt-2'>
                                +91 6394826676 <br />
                                Travel123@gmail.com <br />

                            </ul>
                        </div>

                    </div>
                </div>
                <div className="container text-4xl mt-5 ml-5 text-gray-600 ">
                    <hr />
                </div>
                <div className='text-center mt-5'>
                    <p> Copyright 2024 &copy; Tour&Travel.com - All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer