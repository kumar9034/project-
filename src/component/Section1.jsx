import React, { useEffect, useState } from 'react'

const Section = () => {
  const text = [
    'EMOTIONAL MOMENT',
    'crowdsurf MOMENTs',
    'MEMORABLE MOMENT',
    'romantic moment '
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % text.length); // loop back to 0
    }, 3000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className=' absolute mt-28 z-80 h-80 text-white flex flex-col w-full  items-center  '>
      <div className='flex  '>
      <span className=' absolute bebas-font sm:text-[1.7rem] text-[1.4rem] flex  mt-2 '>enjoy your </span>
      <div className='flex sm:ml-25 ml-22'>
        <span className='bebas-font flex z-65 absolute sm:text-[1.5rem] text-[1.2rem] sm:ml-4 ml-2 mt-2'>{text[current]} </span>
        <img className=' relative sm:w-47 w-36  h-11 z-60 ' src="bg-text.svg" alt="" />

      </div>
        <p className='bebas-font sm:text-[1.7rem] text-[1.5rem] mt-2 ml-3 sm:ml-0 sm:mt-0'>at</p>

      </div>
      <div className=' h-auto '>
        <img className='sm:h-69 h-35 sm:w-[36.3rem] w-[20rem] ' src="image-4.png" alt="" />
      </div>
      <div >
        <h1 className='bebas-font sm:text-[2.5rem] text-[1.8rem]  '>
          8 <span className='text-7xl   text-[#ac0f10] mx-2 '>.</span> 9 <span className='text-7xl text-[#ac0f10] mx-2'>.</span> io August 2025
        </h1>
      </div>
      <h1 className='bebas-font h-10 sm:text-[1.9rem] text-[1.7rem] text-center -mt-8  '>ECOVENTION & ECOPARK ANCOL <span className='text-7xl h-2 w-5 text-[#ac0f10] mx-2'>.</span> JAKARTA, INDONESIA</h1>
    </div>
    
  )
}

export default Section
