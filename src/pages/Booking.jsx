import React from "react";
import LoginImg from "../assets/Book.png";



function Booking() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:ml-[150px] mx-4 my-6">
        
        {/* left side for Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            className="w-full max-w-[650px] object-cover rounded-2xl"
            src={LoginImg}
            alt="Laundry Booking"
          />
        </div>

        {/* right side for form fill-up */}
        <div className="bg-white p-6 rounded-lg flex-1">
          <div className="w-full lg:w-[630px] mx-auto">
            <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-400 mb-6 py-3 bg-gradient-to-b from-gray-200 to-gray-50 rounded-t-2xl">
              Book Your Laundry Pickup
            </h2>

            <div className="w-full lg:w-[430px] mx-auto">
              <form className="space-y-6 text-base md:text-[20px]">
                {/* Full Name */}
                <div>
                  <label className="block text-sm md:text-[16px] text-gray-600 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border border-gray-600 rounded-sm focus:ring focus:ring-blue-500"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm md:text-[16px] text-gray-600 font-medium">
                    Address *
                  </label>
                  <select className="w-full p-2 border text-gray-500 rounded-sm focus:ring focus:ring-blue-500 mb-2 text-sm md:text-base">
                    <option value="">
                      No addresses found. Please add an address
                    </option>
                    <option value="home">123 Main Street, Kathmandu</option>
                    <option value="office">Office - Thamel, Kathmandu</option>
                  </select>
                  <button
                    type="button"
                    className="text-blue-700 text-xs md:text-sm font-semibold"
                  >
                    + Add new address
                  </button>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm md:text-[16px] text-gray-600 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded-sm focus:ring focus:ring-blue-500"
                  />
                </div>

                {/* Pickup Date */}
                <div>
                  <label className="block text-sm md:text-[16px] text-gray-600 font-medium">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 text-gray-500 border rounded-sm focus:ring focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 rounded-sm text-white w-full p-2 text-sm md:text-base"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;