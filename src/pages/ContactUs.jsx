import FloatingButton from "../components/FloatingButtom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import ContactImg from "../assets/Contact.png";

function ContactUS() {
  return (
    <>
      <FloatingButton />

      <div className="h-auto md:h-[650px] max-w-screen bg-orange-300 pt-4 pb-8 md:pt-0 md:pb-0 
                      md:ml-[100px] md:mr-[200px] rounded-t-[100px] md:rounded-t-[400px] 
                      md:rounded-bl-[400px] flex flex-col md:flex-row items-center overflow-hidden gap-6 md:gap-0">
        
        {/* Left: Image */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img
            className="w-[90%] md:w-[720px] h-auto md:h-[780px] object-contain"
            src={ContactImg}
            alt="ContactUs Image"
          />
        </div>

        {/* Right: Form */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start px-6 md:px-0">
          <h2 className="text-white font-semibold text-2xl md:text-[25px] mb-6 md:ml-[100px]">
            Contact Us
          </h2>

          <form className="flex flex-col space-y-4 w-full max-w-[410px] text-[14px] md:text-[15px]">
            
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-white">
                <FaUser /> Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 rounded-lg shadow-lg bg-orange-200 focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-white">
                <FaPhoneAlt /> Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-2 shadow-lg bg-orange-200 rounded-lg focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-white">
                <MdEmail /> Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 shadow-lg bg-orange-200 rounded-lg focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="flex items-center gap-2 text-white">
                <MdLocationOn /> Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full p-2 shadow-lg bg-orange-200 rounded-lg focus:ring focus:ring-orange-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 text-white">
                📝 Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full h-32 md:h-40 p-2 shadow-lg bg-orange-200 rounded-lg focus:ring focus:ring-orange-500"
              ></textarea>
            </div>

            {/* Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-[30px]">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUS;