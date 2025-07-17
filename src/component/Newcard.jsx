import React from 'react'

const Newcard = ({name, price, start , width}) => {
  return (
    <div className={`w-68  h-66 `}>
        <div className='flex'>
      <span className='w-8 mt-40 rounded-tr-[50%] rounded-br-[50%] h-8 bg-[#131313] absolute -ml-4 z-1'></span>
      <img className={`w-68 h-44 object-cover rounded-lg relative border-b border-dashed border-[#424242]` } src="image-31.svg" alt="" />
      <span className='absolute w-64 h-44 px-5'>
      <span className='absolute text-3xl flex flex-wrap text-white bebas-font w-42 mt-4'>{name} <span className='w-15 pl-2  rounded-lg ml-45 text-sm pt-1 mt-2 h-6 bg-[#616161] absolute'>presale 2</span></span>
      <span className='absolute mt-25 text-[15px] text-[#616161]'>{start}</span>
      <span className='bebas-font text-white mt-30 absolute text-4xl'>idn {price}</span>
      <span className=' absolute mt-34 ml-14'><img className='w-23 h-10' src="BG-TEXT1.svg" alt="" /></span>
      <span className=' absolute mt-37 ml-16 text-white bebas-font text-sm '>almost sold out</span>

      </span>
      <span className='w-8 mt-40 rounded-tl-[50%] rounded-bl-[50%] h-8 bg-[#131313] absolute ml-63 z-1'></span>
        </div>
        <div className='w-68 h-20 rounded-br-sm bg-[#2a2a2a] '>
            <span className='w-50 h-10 bg-[#f19b17] rounded-lg absolute text-white bebas-font ml-10 cursor-pointer mt-4 text-2xl pl-13 pt-2 '>buy tickets</span>
        <span className='w-4 mt-18 ml-2 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-7 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-12 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-17 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-22 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-27 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-32 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-37 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-42 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-47 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-52 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        <span className='w-4 mt-18 ml-57 rounded-tl-[50%] rounded-tr-[50%] h-3 bg-[#131311] absolute  z-1'></span>
        
        </div>
        
    </div>
  )
}

export default Newcard
