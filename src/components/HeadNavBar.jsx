import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://avalon.glitchctf.games'); // Adjust the URL to your PocketBase instance

const HeadNavBar = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const navigate = useNavigate();
  const sliderRef = useRef(null); // Reference for the slider

  const toggleSlider = () => {
    setSliderOpen(!isSliderOpen);
  };

  const handleLogout = async () => {
    pb.authStore.clear();  // Clear the auth token
    setSliderOpen(false);
    navigate('/login');  // Redirect to login page
  };

  const isLoggedIn = pb.authStore.isValid;

  // Close slider when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        setSliderOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sliderRef]);

  return (
    <nav className="bg-white/30 sticky top-0 backdrop-blur-lg text-black p-4 z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-3xl">
          <Link to={"/"}>Cater Pilot</Link>
        </div>
        <div className="font-mono space-x-8 sm:space-x-4 text-xl">
          <Link to={"/"} className="text-black hover:text-gray-400">Home</Link>
          <Link to={"/records"} className="text-black hover:text-gray-400">Records</Link>
          <Link to={"/new"} className="text-black hover:text-gray-400">New</Link>
          <Link to={"/contact"} className="text-black hover:text-gray-400">Contact</Link>
        </div>
        <div className="relative">
          <img 
            style={{ height: 45, width: 45 }}
            className='rounded-full cursor-pointer'
            src={"user-image.png"} 
            alt="User Profile" 
            onClick={toggleSlider}
          />
          {/* Slider */}
          {isSliderOpen && (
            <div ref={sliderRef} className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="block px-4 py-2 text-black hover:bg-gray-100">Your Profile</Link>
                  <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-black hover:bg-gray-100">Logout</button>
                </>
              ) : (
                <Link to="/login" className="block px-4 py-2 text-black hover:bg-gray-100">Login</Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeadNavBar;
