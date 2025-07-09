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
      <span className=' absolute bebas-font text-[1.7rem] flex  '>enjoy your </span>
      <div className='flex ml-25'>
        <span className='bebas-font flex z-65 absolute text-[1.5rem] ml-4'>{text[current]} </span>
        <img className=' relative w-47  h-11 z-60 ' src="bg-text.svg" alt="" />

      </div>
        <p className='bebas-font text-[1.7rem]'>at</p>

      </div>
      <div className=' h-auto '>
        <img className='h-69 w-[36.3rem]' src="image-4.png" alt="" />
      </div>
      <div>
        <h1 className='bebas-font text-[2.5rem]  '>
          8 <span className='text-7xl text-[#ac0f10] mx-2 '>.</span> 9 <span className='text-7xl text-[#ac0f10] mx-2'>.</span> io August 2025
        </h1>
      </div>
      <h1 className='bebas-font h-10 text-[1.9rem] '>ECOVENTION & ECOPARK ANCOL <span className='text-7xl h-2 w-5 text-[#ac0f10] mx-2'>.</span> JAKARTA, INDONESIA</h1>
    </div>
  )
}

export default Section
