import React from 'react'
import logo from '../assets/Images/logo.png'
import avatar from '../assets/Images/avatar.jpg'

const click =()=>{
    console.log("clicked");
}

const Header = () => {
    return (
        <div className=' w-full h-auto flex bg-transparent justify-between items-center px-12 md:px-40 py-6 absolute z-10'>
            <div className="justify-center items-center">
                <img src={logo} alt="" className=' h-10' />
            </div>
            <div className='' onClick={ click}>
            <img src={avatar} alt="" className=' h-9 rounded-full' />
            </div>
        </div>
    )
}

export default Header
