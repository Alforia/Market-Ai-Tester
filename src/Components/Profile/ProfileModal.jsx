import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import img from "../../assets/Images/avatar.jpg"

const ProfileModal = ({ ToModalClose,  handleLogout }) => {
    const logoutClick = ()=>{
        ToModalClose();
        handleLogout();
    }
    return (
        <div className=' flex flex-col items-center gap-2'>
            <div>
                <img src={img} alt="" className=' h-20 rounded-full ' />
            </div>
            <div className=' flex items-center flex-col font-medium  '>
                <h1 className=' text-xl font-semibold'>
                    Akash Kottil
                </h1>
                <h1 className=''>kottilakash@gmail.com</h1>
            </div>
            <div className=' bg-red-500  px-7 py-2 rounded-lg text-white font-semibold' onClick={logoutClick}>
                <button>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ProfileModal
