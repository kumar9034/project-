import React, { useEffect, useState } from 'react';
import Section from './Section1';
import Navbar from './Navbar';

 // Add your images here

const AutoLoopBackground = ({images =[], height}) => {
  const [current, setCurrent] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); // loop back to 0
    }, 5000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full ${height} bg-center bg-cover` }
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
        
    </div>
  );
};

export default AutoLoopBackground;
