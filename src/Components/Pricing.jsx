import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaRupeeSign } from "react-icons/fa";

const Pricing = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: starterRef, inView: starterInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: essentialRef, inView: essentialInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: monthlyRef, inView: monthlyInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <main id='pricing' className="max-w-6xl mx-auto pt-10  px-8 pb-32">
      <div ref={headingRef} className={`max-w-md mx-auto mb-14 text-center transition-transform transform duration-1000 ${headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl"><span className="text-primary">Flexible</span> Plans</h1>
        <p className="text-xl text-gray-500 font-medium">Choose a plan that works best for you and your team.</p>
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row gap-5">
        <div ref={starterRef} className={`w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 transition-transform transform duration-1000 ${starterInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Starter</span>
              <span><span className="font-medium text-gray-500 text-xl align-top">₹&thinsp;</span><span className="text-3xl font-bold">129 </span></span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"> <span className="text-black"> 1 credit </span> for full view access for Report.</span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"><span className="text-black">Upto 2 </span> extra Revisions to update a report.</span>
            </li>
          </ul>
          <div className="flex justify-center items-center bg-primary hover:bg-blue-700 rounded-xl py-5 px-4 text-center text-white text-xl">
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </div>
        </div>

        <div ref={essentialRef} className={`w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-white text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0 border-blue-700 border-2 relative transition-transform transform duration-1000 ${essentialInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className='absolute h-8 md:h-10 w-32 bg-primary top-0 right-0 rounded-tr-2xl rounded-bl-2xl flex justify-center items-center'>
            <h1 className='text-white font-medium'>Most Selected</h1>
          </div>
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-black">Essential</span>
              <span><span className="font-medium text-xl align-top">₹&thinsp;</span><span className="text-3xl font-bold text-black">299 </span></span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"> <span className="text-black">5 credits </span> for full view access for Report. </span>
            </li>
            <li className="flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"><span className="text-black">Upto 3 </span> extra Revisions to update a report.</span>
            </li>
          </ul>
          <div className="flex justify-center items-center bg-primary hover:bg-blue-700 rounded-xl py-5 px-4 text-center text-white text-xl">
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </div>
        </div>

        <div ref={monthlyRef} className={`w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 transition-transform transform duration-1000 ${monthlyInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Monthly</span>
              <span><span className="font-medium text-gray-500 text-xl align-top">₹&thinsp;</span><span className="text-3xl font-bold">799 </span></span><span className="text-gray-500 font-medium">/ month</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"><span className="text-black">Upto additional 20 </span> Research Reports per month.</span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">Unused report credits <span className="text-black">rolled over to the next month</span></span>
            </li>
          </ul>
          <div className="flex justify-center items-center bg-primary hover:bg-blue-700 rounded-xl py-5 px-4 text-center text-white text-xl">
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
