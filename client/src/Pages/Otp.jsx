import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { userVerify } from "../Services/Apis"

const Otp = () => {


    const [otp, setOtp] = useState("");

    const location = useLocation();

    const navigate = useNavigate();

    const LoginUser = async (e) => {
        e.preventDefault();

        if (otp === "") {
            toast.error("Enter Your Otp")
        } else if (!/[^a-zA-Z]/.test(otp)) {
            toast.error("Enter Valid Otp")
        } else if (otp.length < 6) {
            toast.error("Otp length minimum 6 digit")
        } else {
            const data = {
                otp, email: location.state
            }
            const response = await userVerify(data);
            if (response.status === 200) {
                localStorage.setItem("userdbtoken", response.data.userToken);
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate("/Home")
                }, 5000);
            } else {
                toast.error(response.response.data.error)
            }
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Please Enter Your OTP
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label
                                    htmlFor="otp"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    OTP
                                </label>
                                <input
                                    type="number"
                                    name="otp"
                                    id=""
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                    placeholder="Enter your Otp"
                                    required=""
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={LoginUser}
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-xl mb-5"

                            >
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>

    )
}

export default Otp