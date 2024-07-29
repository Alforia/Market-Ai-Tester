import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Signup = ({ switchToLogin }) => {
  return (
    <div>
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-black md:max-w-lg mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">Sign up</span> for a free account
        </h1>

        <div className=' sm:w-96 w-60'>
         
          <div className="flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-400 ">Full Name</label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500"
                  placeholder="Full Name"
                />
              </div>
             
          

          <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">Email Address</label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500"
                placeholder="Email address"
              />
            </div>


            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">Create Password</label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500"
                placeholder="Create Password"
              />
            </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-lg hover:bg-blue-600"
            >
              Register
            </button>
          </div>

          <hr className="my-6 border-gray-300 w-full" />

          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-500">or sign up with</p>
            <button
              type="button"
              className="mt-3 flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
                <div className=' flex gap-4 items-center '>
              <FcGoogle size={25} />
              <span>Sign up with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
