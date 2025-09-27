import React from 'react';
import LaundryClothes from "../assets/LaundryGirl.png"

function LaundryHeroSection() {
  return (
    <>
      <div className="relative w-full h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
        
        {/* Background decorative bubbles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-4 h-4 bg-white/10 rounded-full"></div>
          <div className="absolute top-32 right-40 w-6 h-6 bg-white/15 rounded-full"></div>
          <div className="absolute top-20 right-60 w-3 h-3 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-60 left-40 w-5 h-5 bg-white/15 rounded-full"></div>
          <div className="absolute bottom-80 left-60 w-4 h-4 bg-white/10 rounded-full"></div>
          <div className="absolute top-40 left-80 w-6 h-6 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 right-80 w-7 h-7 bg-white/15 rounded-full"></div>
          <div className="absolute top-60 left-20 w-3 h-3 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/10 rounded-full"></div>
        </div>

        {/* Main content container */}
        <div className="absolute bottom-[16%] flex flex-col md:flex-row items-center justify-between h-auto w-[90%] mx-4 md:mx-14 px-4 md:px-8 gap-6">
          
          {/* Left content section */}
          <div className="bg-orange-400 text-white w-full rounded-2xl md:rounded-[200px] px-6 md:pl-20 md:pr-20 p-6 md:p-8 flex flex-col shadow-lg text-center md:text-left">
            <h1 className="text-2xl md:text-[38px] font-bold leading-snug md:leading-10">
              You <span className="text-green-600">feel better</span> when <br className="hidden md:block"/> 
              Your clothes <span className="text-green-600">looks better</span>
            </h1>
            <p className="text-sm md:text-base mt-3 opacity-80">
              Don't worry we are here to do doorstep pickup <br className="hidden md:block"/> 
              and delivery
            </p>
            <button className="inline-block bg-green-600 hover:bg-green-700 rounded-full transition text-white py-2 px-6 mt-4 font-semibold shadow-md self-center ">
              Book Now
            </button>
          </div>

          {/* Right image section */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-lg flex items-center justify-center">
              <img 
                src={LaundryClothes}
                alt="Happy woman with colorful laundry" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaundryHeroSection;