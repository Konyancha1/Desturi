import React from 'react';
import SolutionCard from '../layout/card';
import { FaBook, FaShoppingCart, FaLanguage } from 'react-icons/fa';

const Solution = () => {
  return (
    <div className="container mx-auto px-4 lg:px-24 py-12">
      <h2 className="text-2xl lg:text-4xl text-red-800 text-center mb-8">What We Offer</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto lg:mx-2 sm:w-[65%] w-3/4 lg:w-full">
        <SolutionCard
          icon={<FaBook />}
          title="Cultural Documentation"
          description="Dive deep into the heart of Africa through our extensive cultural documentation. From ancient rituals to modern-day traditions, explore the stories, practices, and beliefs that shape African identity."
        />
        <SolutionCard
          icon={<FaShoppingCart />}
          title="E-Commerce"
          description="Discover authentic African fashion, jewelry, artifacts, and more on our e-commerce platform. Each item tells a story and supports local artisans and communities."
        />
        <SolutionCard
          icon={<FaLanguage />}
          title="Language Learning"
          description="Immerse yourself in the diverse languages of Africa. Whether you're a beginner or an enthusiast, our language learning resources will help you connect with African culture on a deeper level."
        />
      </div>
    </div>
  );
}

export default Solution;