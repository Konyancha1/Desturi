import React from 'react';
import culture from '../../assets/image1.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto lg:px-24 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start font-sans">
          <div className="lg:w-1/2 lg:pr-16 sm:w-3/4 w-[80%] mt-8 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl text-left text-red-800">Welcome to Desturi: Where African Heritage Flourishes</h1>
            <p className="text-lg lg:text-xl mt-4 lg:mt-8 text-gray-700">At Desturi, we're more than just a startup – we're a movement dedicated to preserving, celebrating, and promoting the vibrant richness of African culture. Our mission is to empower local communities, honor tradition, and showcase the beauty of Africa to the world.</p>
          </div>
          <div className="lg:w-1/2 lg:pl-16 sm:w-3/4 w-[80%] h-[25rem] lg:h-[40rem] mt-8 lg:mt-0">
            <img
              src={culture}
              alt="Culture"
              className="w-full lg:max-w-md object-cover rounded-lg shadow-lg lg:ml-auto lg:mt-8"
              style={{ maxHeight: '100%' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
