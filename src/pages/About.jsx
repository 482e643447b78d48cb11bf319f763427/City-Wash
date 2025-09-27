import TeamImg from "../assets/Team.png";

function About() {
  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden px-6 sm:px-12 lg:px-20 py-12">
        
      {/* Decorative pearl-like bubbles */}
      <div className="hidden sm:block absolute top-10 left-6 w-20 h-20 rounded-full bg-gradient-to-br from-white via-cyan-100 to-green-200 opacity-70 shadow-lg"></div>
      <div className="hidden sm:block absolute top-28 left-16 w-28 h-28 rounded-full bg-gradient-to-br from-white via-cyan-100 to-green-300 opacity-70 shadow-lg"></div>
      <div className="hidden sm:block absolute top-48 left-24 w-16 h-16 rounded-full bg-gradient-to-br from-white via-pink-100 to-purple-200 opacity-70 shadow-lg"></div>
      <div className="hidden sm:block absolute top-16 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-white via-blue-100 to-cyan-200 opacity-70 shadow-lg"></div>
      <div className="hidden sm:block absolute bottom-20 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-white via-green-100 to-cyan-300 opacity-70 shadow-lg"></div>
      <div className="hidden sm:block absolute bottom-40 right-24 w-16 h-16 rounded-full bg-gradient-to-br from-white via-pink-100 to-purple-200 opacity-70 shadow-lg"></div>

      {/* Main content grid */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-0">
            {/* Left: Team Image */}
            <div className="flex justify-center relative z-10">
            <img
                src={TeamImg}
                alt="City Wash Team"
                className="w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[550px] lg:h-[550px] object-cover rounded-full shadow-xl"
            />
            </div>

            <div className="hidden sm:block absolute w-20 h-20 bg-blue-400 rounded-full blur-sm top-50 right-35 z-10"></div>
            <div className="hidden sm:block absolute w-20 h-20 bg-blue-400 rounded-full blur-sm bottom-15 right-95 z-10"></div>

            {/* Right: About Text Bubble */}
            <div className="flex justify-center relative -ml-10 z-20">
                <div className="w-72 h-72 relative  sm:w-[500px] sm:h-[500px] lg:w-[550px] lg:h-[550px] bg-gradient-to-br from-blue-200/30 via-blue-300/30 to-white/30  backdrop-blur-sm border border-white/20 font-semibold p-6 sm:p-10 rounded-full shadow-xl text-center flex flex-col justify-center">
                    <h2 className="text-lg sm:text-2xl font-bold text-orange-600 mb-3">
                    Who we are ?
                    </h2>
                    <p className="text-gray-700 text-[10px] sm:text-base leading-relaxed">
                    Welcome to <span className="font-bold">City Wash</span>, your trusted laundry partner in town. <br />
                    We’re here to make laundry day simple, convenient, and <br /> worry-free.
                    </p>
                    <p className="mt-4 text-gray-700 text-[10px] sm:text-base leading-relaxed">
                    Founded with a mission to bring professional care to everyday clothing,{" "}
                    <span className="font-semibold">City Wash</span> combines modern technology
                    with expert handling to deliver premium laundry services right to your doorstep.
                    </p>
                </div>
                
            </div>
      </div>
    </div>
  );
}

export default About;