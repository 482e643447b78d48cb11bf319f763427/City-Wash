import WashImg from "../assets/ServiceWash.png";

function ServiceCard({title}){
    

    return(
         <div className=" sm:h-[270px] h-[220px] relative bg-green-300/25 sm:rounded-[30px] rounded-[20px] shadow-lg overflow-hidden p-4 sm:p-6 flex items-center justify-center transform transition-all duration-300 ease-in-out  hover:scale-105 hover:shadow-2xl">
            {/* Placeholder for Image */}
            <img className="sm:h-[250px] h-[180px]  w-auto object-cover" src={WashImg} alt="Service Image"/>

            {/* Bubble Overlay */}
            <div className="absolute bottom-4 right-4 h-[90px] w-[90px] sm:h-[130px] sm:w-[130px] px-3 sm:px-[25px] flex items-center justify-center text-xs sm:text-base text-white font-semibold rounded-full bg-gradient-to-br from-green-400/60 via-green-600/40 to-green-800/20 border border-white/30 shadow-lg shadow-green-900/40 backdrop-blur-xs">
                {title}
            </div>


        
            {/* Decorative Bubbles */}
            <div className="absolute top-10 right-10 w-10 h-10 sm:w-16 sm:h-16  rounded-full bg-gradient-to-br from-white/70 via-white/20 to-transparent border border-white/40 shadow-lg shadow-white/20 backdrop-blur-md"></div>
            <div className="absolute bottom-12 left-10 h-5 w-5 sm:w-8 sm:h-8  rounded-full bg-gradient-to-br from-white/50 via-white/10 to-transparent border border-white/30 shadow-lg shadow-white/20 backdrop-blur-md"></div>
        </div>
    )
}

export default ServiceCard