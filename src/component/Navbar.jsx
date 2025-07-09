import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const logo = [
    '/image-7.png',
    '/image-8.png'
  ]

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logo.length); // loop back to 0
    }, 5000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='w-full h-18 bg-black/10 backdrop-blur-md fixed top-0 left-0 z-90 absolute flex items-center justify-between px-10'>
      <div className='w-22 z-60  flex  '>
        <img src="image-5.png" alt="" />
      </div>
      <div className='lg:block hidden w-110  lg:flex gap-5  '>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300  font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/'>Home</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300  font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/'>LineUp</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/'>Sponsor&partner</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/'>photoes</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/'>playlist</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/'>contactus</Link></p>
      </div>
      <div className=' w-60 ml-10 flex justify-center items-center gap-3'>
        <div className='' style={{
          backgroundImage: `url(${logo[current]})`,
        }} >

        </div>
        <div className=' hidden lg:block'>
          <div className='w-35 h-10  cursor-pointer border-1 border-[#f19b17] flex items-center justify-center text-[#f19b17] bebas-font text-[1.4rem] rounded-lg hover:text-white hover:bg-[#f19b17]'>buy tickets</div>
        </div>
        <div className='lg:hidden block  '>
          <TiThMenu size={25} color='white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
