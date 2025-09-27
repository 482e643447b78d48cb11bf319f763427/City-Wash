import LogoImg from "../assets/Logo.png";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-orange-500 text-white py-10 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 sm:px-[100px]">
            {/* Logo + Description */}
            <div>
                <div className="flex items-center mb-4">
                    <img
                    src={LogoImg} 
                    alt="City Wash"
                    className="h-12 rounded-md"
                    />
                </div>
                <p className="text-sm leading-relaxed">
                    City Wash is your trusted laundry partner offering fast, affordable,
                    and professional care for your clothes. With doorstep pick-up,
                    express delivery, and eco-friendly cleaning, we make laundry
                    hassle-free—so you can focus on what matters.
                </p>
            </div>

            {/* Quick Links */}
            <div>
            <h3 className="font-semibold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Book a Service</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
            </div>

            {/* Service Timings */}
            <div>
            <h3 className="font-semibold text-lg mb-4">Service Timings</h3>
            <p className="text-sm">
                <span className="font-bold">Pick-up & Delivery:</span><br />
                Available all 7 days – 10:00 AM to 9:00 PM
            </p>
            <p className="text-sm mt-4">
                <span className="font-bold">Customer Support:</span> 24×7 Support
            </p>
            </div>

            {/* Location */}
            <div>
            <h3 className="font-semibold text-lg mb-4">Our Location</h3>
            <p className="text-sm">
                <span className="font-bold">City Wash Laundry Services</span><br />
                No. 9, Thendral Nagar,<br />
                Sathuvachari, Vellore-632009<br />
                +91 81898 00888, +91 88259 65775
            </p>
            </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-4 flex  items-center justify-end space-y-3 sm:gap-[200px] sm:px-[100px] ">
            <p className="text-md text-center">
                © {new Date().getFullYear()} City Wash | A unit of SG Groups | Powered by 
                <span className="font-semibold"> Least Action Company</span>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 ">
                <a href="#" className="hover:opacity-80">
                <Instagram className="w-7 h-7" />
                </a>
                <a href="#" className="hover:opacity-80">
                <Facebook className="w-7 h-7" />
                </a>
                <a href="#" className="hover:opacity-80">
                <Linkedin className="w-7 h-7" />
                </a>
                <a href="#" className="hover:opacity-80">
                <Youtube className="w-7 h-7" />
                </a>
            </div>
        </div>
      
    </footer>
  );
}

export default Footer;