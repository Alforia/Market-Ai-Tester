import React from 'react'

const Competitor = ({switchToProductinfo,switchToReport}) => {
  return (
    <div className=' w-11/12 lg:w-auto h-auto flex flex-col gap-6 '>
    <div>
        <h1 className=' text-primary text-3xl font-bold text-center'>Competitor Analysis</h1>
    </div>

    <div className=' flex flex-col text-center font-semibold gap-4'>
        <label htmlFor="">
        Do you know of any existing competitors in this market? If yes, please list them.
        </label>
        <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
    </div>

    <div className=' flex flex-col text-center font-semibold gap-4'>
        <label htmlFor="">
        Provide any insights or observations about the strengths and weaknesses of these competitors.
        </label>
        <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 ' />
    </div>

    <div className=" flex justify-between">
        
        <button className=' px-6 sm:px-12 py-3 bg-white text-black font-bold rounded-xl border hover:bg-slate-100' onClick={switchToProductinfo}> 
            Previous
        </button>
        <button className=' px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' onClick={switchToReport}>
            Next
        </button>
    </div>

</div>
  )
}

export default Competitor
