import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import LaundryClothes from "../assets/LaundryGirl.png"

function LaundryHeroSection(){
  return (
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

      {/* Floating action buttons */}
      <div className="absolute left-8 bottom-1/5 transform -translate-y-1/2 z-20">
        <button className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 mb-4">
          <Phone className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="absolute right-8 bottom-1/5 transform -translate-y-1/2 z-20">
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>

        {/* Main content container */}
        <div className="absolute bottom-1/6 flex items-center justify-between h-auto w-[90%] mx-14 px-8">
        
            {/* Left content section */}
            
            {/* Content card with rounded background */}
            <div className="bg-orange-400 text-white w-full rounded-[200px] pl-20 pr-20 p-8 flex flex-col shadow-lg">
                <h1 className="text-3xl font-bold leading-10">You <span className="text-green-600">feel better</span> when <br/> Your clothes <span className="text-green-600">looks better</span></h1>
                <p className="text-sm mt-3 opacity-80">Don't worry we are here to do doorstep pickup<br/> and delivery</p>
                <button className="inline-block bg-green-600 hover:bg-green-700 rounded-[50px]  transition text-white p-2 mt-4 font-semibold shadow-md w-36 self-center">Book Now</button>
            </div>
            

            {/* Right image section */}
            <div className="  left-20/12 z-10">
                <div className="w-96 h-96 rounded-lg flex items-center justify-center">
                {/* Sample image placeholder - replace with actual image */}
                <img 
                    src={LaundryClothes}
                    alt="Happy woman with colorful laundry" 
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
            </div>
        
        </div>

      
    </div>
  );
};

export default LaundryHeroSection;