import React, { useState,  } from 'react'
import { IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { travelfunction } from '../Services/Apis';


function Modal({ setShowModal }) {

  

  const [inputdata, setInputdata] = useState({
      name: "",
      groupSize: "",
      ageGroup: "",
      budget:""
    });

    const navigate = useNavigate();

    // set input value

    const handleChange = (e)=>{
      const {name,value} = e.target;
      setInputdata({...inputdata,[name]:value})
    }

    // Enter the data


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,groupSize,ageGroup,budget} = inputdata;
    
        if(name === ""){
          toast.error("Enter Your Name")
        }else if(groupSize === ""){
          toast.error("Enter Your Group Size")
        }else if(ageGroup === ""){
          toast.error("Enter Your Age Group")
        }else if(budget === ""){
          toast.error("Enter Your Budget")
        }else{
          const response = await travelfunction(inputdata);
          
          if(response.status === 200){
            setInputdata({...inputdata,name:"", groupSize:"", ageGroup:"", budget:""});
            navigate("/Register")
            
          }else{
            toast.error(response.response.data.error);
          }
          
        }
      };




  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='mt-10 flex flex-col gap-5 text-white'>
        <button onClick={() => setShowModal(false)} className='place-self-end'><IoMdClose size={30} /></button>
        <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl  font-semibold'>Please Share Your Details</h1>
          


          <form >
          <div className='w-full'>
              <label htmlFor='name' className='block text-sm font-medium text-white mb-2'>Name</label>
              <input
                type="text"
                id=''
                name='name'
                onChange={handleChange}
                className='w-full px-4 py-3 text-black border-gray-300 rounded-xl'
                placeholder='Enter your name'
                alt=''
              />
            </div>
            <div className='w-full mt-4'>
              <label htmlFor='groupSize' className='block text-sm font-medium text-white mb-2'>Group Size</label>
              <input
                type="number"
                id=''
                name="groupSize"
                onChange={handleChange}
                className='w-full px-4 py-3 text-black border-gray-300 rounded-xl'
                placeholder='Enter group size'
                alt=''
              />
            </div>
            <div className='w-full mt-4'>
              <label htmlFor='ageGroup' className='block text-sm font-medium text-white mb-2'>Age Group</label>
              <input
                type="number"
                id=''
                name="ageGroup"
                onChange={handleChange}
                className='w-full px-4 py-3 text-black border-gray-300 rounded-xl'
                placeholder='Enter age group'
                alt=''
              />
            </div>
            <div className='w-full mt-4'>
              <label htmlFor='budget' className='block text-sm font-medium text-white mb-2'>Budget</label>
              <input
                type="number"
                id=''
                name="budget"
                onChange={handleChange}
                className='w-full px-4 py-3 text-black border-gray-300 rounded-xl'
                placeholder='Enter your budget'
                alt=''
              />
            </div>
            <button type='submit' onClick={handleSubmit} className='mt-4 w-full flex-items justify-center gap-2 px-5 py-3 font-medium rounded-xl bg-black'>Submit</button>
          </form>
        </div>
      </div>
       <ToastContainer />
    </div>
  )
}

export default Modal













