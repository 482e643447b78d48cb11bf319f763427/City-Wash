import LogoImg from "../assets/Logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ onLoginClick }){
    const[isOpen, setIsOpen] = useState(false);
    return(
        
        <nav className="fixed w-full  bg-orange-500 px-8 py-4 shadow-md z-40">
            <div className="flex items-center justify-between">
                <img className=" h-12 w-auto object-contain rounded-lg " src={LogoImg} alt="logo"/>
            
                <ul className="hidden md:flex space-x-20 text-white font-medium">
                    <li><a href="#home" className="cursor-pointer">Home</a></li>
                    <li><a href="#booking" className="cursor-pointer">Book Now</a></li>
                    <li><a href="#about" className="cursor-pointer">About us</a></li>
                    <li><a href="#services" className="cursor-pointer">Services</a></li>
                    <li><a href="#contact" className="cursor-pointer">Contact Us</a></li>
                </ul>
                
                <button
                    onClick={onLoginClick}
                    className="hidden md:block bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700">
                    Login
                </button>

                {/* Hamburger Menu for mobile */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            

            {/* Mobile Dropdown */}
            {isOpen &&(
                <div className="absolute top-full left-0 w-full bg-orange-500 flex flex-col items-center space-y-4 py-4 text-white font-medium shadow-md">
                    <a href="#home">Home</a>
                    <a href="#booking">Booking</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact Us</a>

                    <button onClick={onLoginClick} className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700">
                        Login
                    </button>
                </div>
            )}

        </nav>
  );
}


export default Navbar