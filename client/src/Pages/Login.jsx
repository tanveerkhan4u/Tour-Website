import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../Services/Apis"



const Login = () => {

  const [email, setEmail] = useState("");
  console.log(email);

  const navigate = useNavigate();

  // sendotp function

  const sendotp = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your Email")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email")
    } else {
      const data = {
        email: email
      }
      const response = await sentOtpFunction(data);

      if (response.status === 200) {
        navigate("/Otp",{state:email})
      } else {
        toast.error(response.response.data.error);
      }

    }
  }




  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Welcome Back, Log In
            </h1>
            <form className="space-y-4 md:space-y-6" >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl mb-5"
                onClick={sendotp}
              >
                Log In
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  <NavLink to="/Register">Sign up</NavLink>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>

  )
}

export default Login;