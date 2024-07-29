import React from 'react'

const BasicInfo = ({switchToProductinfo}) => {
    return (
        <div className=' w-11/12 lg:w-auto h-auto flex flex-col gap-6'>
            <div>
                <h1 className=' text-primary text-3xl font-bold text-center'>Basic Information & Market Details</h1>
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    What is the name of your business or potential business?
                </label>
                <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    What industry or sector does your business belong to or are you interested in?
                </label>
                <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    In which country are you planning to start or expand your business?
                </label>
                <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    Is there a specific city or region within this country that you are targeting?
                </label>
                <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
            </div>

            <div className=" flex justify-center">
                
            <button className=' px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' onClick={switchToProductinfo}>
            Next
        </button>
            </div>

        </div>
    )
}

export default BasicInfo
