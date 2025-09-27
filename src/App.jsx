import { useState } from "react";
import LaundryHeroSection from "./pages/Landing"
import Booking from "./pages/Booking";
import Service from "./pages/Service";
import ContactUS from "./pages/ContactUs";
import FloatingButton from "./components/FloatingButtom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";



function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <FloatingButton />
      {showLogin ? (
        <Login onClose={() => setShowLogin(false)} />
      ) : (

        <>
          <section id="home" className="min-h-screen scroll-mt-20">
            <LaundryHeroSection />
          </section>
          <section id="booking" className="min-h-screen scroll-mt-20">
            <Booking />
          </section>
          <section id="about" className="min-h-screen scroll-mt-20">
            <About />
          </section>
          <section id="services" className="min-h-screen scroll-mt-20">
            <Service />
          </section>
          <section id="contact" >
            <ContactUS />
          </section>
        </>
      )}
      <Footer/>
    </>
  );
}
export default App