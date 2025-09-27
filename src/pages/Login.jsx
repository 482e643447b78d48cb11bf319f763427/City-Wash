import LogoImg from "../assets/Logo.png";
import LoginImg from"../assets/city_wash_login.jpg";

function Login({ onClose }) {
  return (
    <>
      <div className="fixed flex min-h-screen w-screen bg-[#011a10] z-50 overflow-x-hidden">
        {/* Left section for Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={LoginImg}
            alt="Login Image"
          />
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative px-4">
          {/* Close / Logo */}
          <div
            className="absolute top-4 right-4 md:right-8 cursor-pointer"
            onClick={onClose}
          >
            <img className="h-12 rounded-lg" src={LogoImg} alt="Logo" />
          </div>

          {/* Slogan */}
          <h2 className="text-xl sm:text-2xl md:text-[30px] font-bold text-orange-500 text-center px-2">
            You feel better{" "}
            <span className="text-green-500">
              when your clothes looks better!
            </span>
          </h2>

          {/* Login Box */}
          <div className="w-full max-w-[400px] bg-[#103729] rounded-xl shadow-lg p-6 sm:p-[30px] sm:px-[45px] mt-6">
            <h3 className="text-white text-xl sm:text-[25px] text-center font-bold">
              Welcome Back!
            </h3>
            <p className="text-sm sm:text-[16px] text-white text-center">
              Login to your account
            </p>
            <br />

            <label className="text-sm sm:text-[16px] text-white">Email ID</label>
            <input
              className="w-full text-gray-300 rounded-sm border border-gray-600 bg-[#154633] focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 p-2"
              placeholder="Enter your email"
              type="email"
            />

            <button className="bg-green-600 cursor-pointer text-white text-center w-full py-2 rounded-sm font-semibold mb-2 hover:bg-green-500">
              Send OTP
            </button>

            <p className="text-center text-white mb-2">or</p>

            <button className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-lg text-white hover:bg-green-500 transition mb-2">
              Login with
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
            </button>

            <p className="text-center text-xs sm:text-[14px] text-white">
              Don't have an account{" "}
              <button className="text-green-600 font-semibold cursor-pointer">Sign Up</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;