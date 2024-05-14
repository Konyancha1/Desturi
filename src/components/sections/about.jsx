import React from 'react';
import culture from '../../assets/image2.jpg';

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-24 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start font-sans">
          <div className="lg:w-1/2 lg:pr-16 sm:w-3/4 w-[80%] h-[25rem] lg:h-[40rem] mt-8 lg:mt-0">
            <img
              src={culture}
              alt="Coffee Farmer"
              className="w-full lg:max-w-md object-cover rounded-lg shadow-lg lg:ml-auto lg:mt-8"
              style={{ maxHeight: '100%' }}
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16 sm:w-3/4 w-[80%] mt-8 lg:mt-0 flex flex-col space-y-8">
            <div>
              <h1 className="text-2xl lg:text-4xl text-left text-red-800">Our Promise</h1>
              <p className="text-lg lg:text-xl mt-4 lg:mt-8">At Desturi, authenticity is our cornerstone.
               We collaborate directly with custodians of tradition, artisans, and community members to 
               ensure that every aspect of our platform reflects the true spirit of Africa.
              </p>
            </div>
            <div>
              <h1 className="text-2xl lg:text-4xl text-left text-red-800">Our Vision</h1>
              <p className="text-lg lg:text-xl mt-4 lg:mt-8">Africa is more than a continent; 
                <span className='text-red-800 font-semibold'> it's a treasure trove of history, art, and diversity.</span>
                Yet, many aspects of its rich heritage remain undiscovered or underappreciated. Desturi aims to 
                change that by creating a platform that serves as a
                <span className='text-red-800 font-semibold'> bridge between the past, present, and future of 
                Africa.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;