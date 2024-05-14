import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);

    toast.success('Successfully joined the waitlist!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setEmail('');
  };

  return (
    <div className="bg-red-800 rounded-lg py-12 mx-auto w-3/4 shadow-md mb-24">
      <div className="container mx-auto px-4 lg:px-24">
        <p className="text-lg lg:text-xl text-white text-center mb-8">
          Join our waitlist today to be the first to experience Desturi when we launch our main website. By joining us, you're not just signing up for a platform – you're becoming a champion of African heritage and empowerment.
        </p>
        <div className="flex justify-center">
          <form onSubmit={handleFormSubmit} className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              className="py-3 px-6 rounded-lg text-lg bg-white text-red-800 placeholder-red-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-white text-red-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;