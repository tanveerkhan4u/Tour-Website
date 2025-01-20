import React, { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Error from './Pages/Error'
import { Routes, Route, NavLink, Navigate, Link } from 'react-router-dom'
import Header from './Components/Header'
import 'react-toastify/dist/ReactToastify.css';
import Otp from './Pages/Otp'
import Card from './Pages/Card'
import Footer from './Pages/Footer'
import Tour1 from './Pages/Tour1'
import Tour2 from './Pages/Tour2'
import Tour3 from './Pages/Tour3'
import Tour4 from './Pages/Tour4'
import Tour5 from './Pages/Tour5'
import Tour6 from './Pages/Tour6'
import Modal from './Pages/Modal'

function App() {


  const [showModal, setShowModal] = useState(false);
  


  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Otp' element={<Otp />} />
        <Route path='*' element={<Error />} />
        <Route path='/Card' element={<Card />} />
        <Route path='/Tour1' element={<Tour1 setShowModal={setShowModal} />} />
        <Route path='/Tour2' element={<Tour2 setShowModal={setShowModal}/>} />
        <Route path='/Tour3' element={<Tour3 setShowModal={setShowModal}/>} />
        <Route path='/Tour4' element={<Tour4 setShowModal={setShowModal}/>} />
        <Route path='/Tour5' element={<Tour5 setShowModal={setShowModal}/>} />
        <Route path='/Tour6' element={<Tour6 setShowModal={setShowModal}/>} />
       <Route path='/Modal' element={showModal && <Modal setShowModal={setShowModal} />}/>
      </Routes>
      {showModal && (
        <Modal setShowModal={setShowModal} />
      )}
        


      <Footer />
    </>
  )
}

export default App;
