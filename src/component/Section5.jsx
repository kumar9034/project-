import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import APIused from './APIused';

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
        <div className='w-[75vw] h-[80vh] bg-black  rounded-lg border-[#424242] border-1 ml-40 mt-15 absolute'>
            <div className='w-full h-40 bg-[#131313] pt-5   flex justify-between '>
                <div className='w-[60vw] flex'>
                <img className='w-30 h-30 ml-10 object-cover' src="image-33.jpg" alt="" />
                <div className='mt-5'>
                <h1 className='font-[700] text-2xl text-white ml-4'>The Sounds Project 8 - DAY 1</h1>
                <div className='flex gap-4  mt-1 items-center'>
                <div className='w-15 h-5 bg-[#bcbcbc] bebas-font text-sm flex justify-center items-center ml-4 rounded-md'>preview </div>
                <span className='text-lg font-[600] text-[#424242]'>the sound project</span>
                </div>
                <div className='flex ml-4 mt-1 gap-3'>
                    <IoMdAddCircleOutline color='#bcbcbc' size={24}/>
                    <p className='text-sm text-[#bcbcbc] font-[500]'>Save on spotify</p>
                </div>

                </div>
                </div>
                <div className='w-[40vw] '>
                    <img className='ml-80' src="image-35.svg" alt="" />
                    <div className='flex  gap-5 mt-12 ml-40'>
                    <div className='flex mt-2 gap-8'>
                      <IoPlaySkipBackSharp color='#424242' size={25}/>
                      <IoPlaySkipForward color='#424242'size={25} />
                    </div>
                    <BsThreeDots color='#bcbcbc' size={25} className='mt-2' />
                    <FaPlayCircle color='white' className='mt-' size={40} />

                    </div>
                </div>
            </div>
                <div className='w-full h-76 overflow-y-auto whitespace-nowrap scrollbar-hide'>
                <APIused/>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
