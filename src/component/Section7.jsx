import React from 'react'

const Section7 = () => {
  return (
    <div className='w-full h-auto   bg-[#131313]'>
      <div className='w-full flex pl-[25rem] items-center pt-20 '>
        <img className='w-60 h-15 ' src="bg-text.svg" alt="" />
        <p className='bebas-font text-white text-[2.1rem] ml-2 absolute '>Memorable moment</p>
        <p className='bebas-font text-white text-3xl ml-3 mr-3 '>at</p>
        <img className='w-30 h-13' src="image-4.png" alt="" />
      </div>
      <div className='w-full h-100'>

      </div>

      <div className='flex justify-center items-center gap-5 mt-20 pb-10'>
        <div className='w-50 h-13 bg-[#ffa000]  rounded-lg text-white bebas-font text-2xl flex justify-center items-center  '>share your Memories</div>
        <div className='w-30 h-13 border-[#ffa000] border-1 rounded-lg hover:bg-[#ffa000]  text-2xl  text-white bebas-font flex justify-center items-center '>see all</div>
      </div>
    </div>
  )
}

export default Section7
