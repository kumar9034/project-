import React from 'react'

const Footer = () => {
  return (
    <div className='h-[25rem] w-full bg-[#131313] pt-8 pl-19 pr-19'>
      <div className='flex gap-5 '>
        <img className='w-32 h-14' src="image-4.png" alt="" />
        <div>
            <p className='bebas-font text-[25px] text-white -mt-8 '>8<span className='text-7xl text-red-900 mr-2 ml-2'>.</span>9<span className='text-7xl text-red-900 mr-2 ml-2'>.</span> IO Agustus 2025</p>
            <p className='bebas-font text-[25px] text-white -mt-10'>ECOVENTION & ECOPARK ANCOL<span className='text-7xl text-red-900 mr-2 ml-2'>.</span>JAKARTA, INDONESIA</p>
        </div>
      </div>
      <div>
        <h1 className='text-5xl bebas-font text-white mt-4'>Where the dreamers go. live concert matters.</h1>
      </div>
      <div className='w-full border-1 border-[#cccccc] mt-6 '></div>
      <div className='flex justify-between pt-5 '>
        <div className='flex flex-wrap leading-none  gap-y-1 gap-x-5 w-[50%]' >
        <p className='bebas-font text-[#ffffff] text-[21px] hover:text-[#f19b17] flex'>Home <img className='w-6 h-6 ' src="image-65.svg" alt="" /></p>
        <p className='bebas-font text-[#ffffff] text-[21px] hover:text-[#f19b17] flex'>Become press<img className='w-6 h-6 ' src="image-65.svg" alt="" /></p>
        <p className='bebas-font text-[#ffffff] text-[21px] hover:text-[#f19b17] flex'>become a sponsor & partners <img className='w-6 h-6 ' src="image-65.svg" alt="" /></p>
        <p className='bebas-font text-[#ffffff] text-[21px] hover:text-[#f19b17] flex'>contact us <img className='w-6 h-6 ' src="image-65.svg" alt="" /></p>
        </div>
        <div className='flex gap-4 items-center'>
            <p className='bebas-font text-[#cccccc] text-[18px]'>follow us</p>
            <img className='w-7 h-7' src="image-66.svg" alt="" />
            <img className='w-7 h-7' src="image-67.svg" alt="" />
            <img className='w-7 h-7' src="image-68.svg" alt="" />
            <img className='w-7 h-7' src="image-69.svg" alt="" />
            <img className='w-7 h-7' src="image-70.svg" alt="" />
            <img className='w-7 h-7' src="image-71.svg" alt="" />
        </div>
      </div>
      <div className='w-full border-1 border-[#cccccc] mt-6 '></div>
      <div className='flex justify-between items-center h-27 '>
            <p className='bebas-font text-white text-md '>© 2014 - 2025 THESOUNDSPROJECT&CO</p>
            <p className='bebas-font text-white text-lg gap-2 flex '>member of <img className='w-10 h-7' src="image-72.svg" alt="" /></p>
      </div>
    </div>
  )
}

export default Footer
