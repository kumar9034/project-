import React from 'react'

const Section5 = () => {
  return (
    <div className='w-full h-auto bg-[#131313] '>
      <div className='flex flex-col pb-10 justify-center items-center '>
        <div className='flex '>
        <h1 className='bebas-font text-5xl text-white'>official playlist of</h1>
        <span><img className='w-30 h-12 ml-3' src="image-4.png" alt="" /></span>
        </div>
        <p className='bebas-font text-lg text-[#616161] mt-2'>Listen, learn and do practice for 3 days🎶</p>
      </div>
      <div className='flex'>
        <img className='w-full h-[100vh]  object-cover' src="image-32.svg" alt="" />
        <div className='w-[75vw] h-[80vh] bg-black rounded-lg border-[#424242] border-1 ml-40 mt-15 absolute'>
            <div className='w-full h-40 bg-[#131313] pt-5 flex justify-between '>
                <div className='w-[60vw] flex'>
                <img className='w-30 h-30 ml-10 object-cover' src="image-33.jpg" alt="" />
                <h1 className='bebas-font text-4xl text-white ml-4'>The Sounds Project 8 - DAY 1</h1>
                </div>
                <div className='w-[40vw] '>
                    <img className='ml-80' src="image-34.svg" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
