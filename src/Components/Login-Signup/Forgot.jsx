import React from 'react'

const Forgot = ({switchToLogin}) => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white border-black border rounded-xl shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full select-none">
                        <div className="flex flex-col items-center justify-center gap-2 mb-8">
                            
                            <h1 className="text-2xl font-bold">
                                <span className="text-primary">Forgot</span> Password?
                            </h1>
                            <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Don't worry! Just enter your email address below, and we'll send you a link to reset your password.
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-400 ">Confirm Email</label>
                            <input className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 " placeholder="Enter your Email" />

                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-0">
                        <label className="font-semibold text-xs text-gray-400 ">OTP</label>
                        <input type="number" className=" border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 " placeholder="••••••"/>
                        <div className=' flex items-end justify-end w-full' onClick={switchToLogin}>
                            <p className=' text-primary hover:text-blue-700 cursor-pointer text-sm'>Remember Password?</p>
                        </div>

                    </div>
                    <div className="mt-5">
                        <button className="py-1 px-8 bg-primary hover:bg-blue-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Forgot
