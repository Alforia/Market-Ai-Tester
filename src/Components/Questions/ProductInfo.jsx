import React from 'react'

const ProductInfo = ({switchToBasic, switchToCompetitor}) => {
  return (
    <div className=' w-11/12 lg:w-auto h-auto flex flex-col gap-6'>
    <div>
        <h1 className=' text-primary text-xl lg:text-3xl font-bold text-center'>Product/Service Information
        & Target Audience</h1>
    </div>

    <div className=' flex flex-col text-center font-semibold gap-4'>
        <label htmlFor="">
        What product or service are you planning to offer or currently offering? 
        </label>
        <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
    </div>

    <div className=' flex flex-col text-center font-semibold gap-4'>
        <label htmlFor="">
        What makes your product/service unique or different from competitors?
        </label>
        <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
    </div>

    <div className=' flex flex-col text-center font-semibold gap-4'>
        <label htmlFor="">
        Who is your target audience?
        </label>
        <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
    </div>

    <div className=' flex flex-col text-center font-semibold gap-4'>
        <label htmlFor="">
        Provide any specific details about your target customers, such as age group or income level.
        </label>
        <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
    </div>

    <div className=" flex justify-between">
        
        <button className=' px-6 sm:px-12 py-3 bg-white text-black font-bold rounded-xl border hover:bg-slate-100' onClick={switchToBasic}> 
            Previous
        </button>
        <button className=' px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' onClick={switchToCompetitor}>
            Next
        </button>
    </div>

</div>
  )
}

export default ProductInfo
