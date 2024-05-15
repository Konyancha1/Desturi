import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const handleClick = () => {
    toast.success("Redirecting to the waitlist form...");
    setTimeout(() => {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd4tKgVqNxTROZMMXCfikEQjdOUq6u87bfgvGjoUVpj8H7Wjw/viewform?usp=sharing';
    }, 2000)
  };

  return (
    <div className="bg-red-800 rounded-lg py-12 mx-auto w-3/4 shadow-md mb-24">
      <div className="container mx-auto px-4 lg:px-24">
        <p className="text-lg lg:text-xl text-white text-center mb-8">
          Join our waitlist today to be the first to experience Desturi when we launch our main website. By joining us, you're not just signing up for a platform – you're becoming a champion of African heritage and empowerment.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="bg-white text-red-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Join Waitlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
