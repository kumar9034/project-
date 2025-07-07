import React, { useEffect, useState } from 'react';
import Section from './Section1';
import Navbar from './Navbar';

const images = [
  '/image-1.webp',
  '/image-2.webp',
  '/image-6.webp',
  '/image-3.jpg',
]; // Add your images here

const AutoLoopBackground = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); // loop back to 0
    }, 5000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen bg-center bg-cover "
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
        <Navbar/>
        <Section/>
    </div>
  );
};

export default AutoLoopBackground;
