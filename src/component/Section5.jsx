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
        <div className='sm:flex  '>
          <h1 className='bebas-font sm:text-5xl text-[2.5rem]  text-white'>official playlist of</h1>
          <span><img className='w-30 h-12 ml-3 inline-block ml-16' src="image-4.png" alt="" /></span>
        </div>
        <p className='bebas-font text-lg text-center text-[#616161] mt-2'>Listen, learn and do practice for 3 days🎶</p>
      </div>
      <div className="w-full min-h-screen  relative">
        <img
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          src="image-32.svg"
          alt=""
        />

        <div className="relative z-10 pt-10 space-y-8 flex flex-col items-center">
          <div className='border-1 sm:w-[80vw] w-[95vw]  h-[90vh] bg-[#131313]  rounded-lg border-[#1f1f1f]'>

            <div
              className="bg-[#1f1f1f] rounded-xl p-4 sm:flex items-center w-[95vw] sm:w-[80vw] max-w-5xl shadow-lg"
            >
              {/* Album Image */}
              <img
                src="image-33.jpg"
                alt="Album Cover"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-md object-cover mb-4 sm:mb-0"
              />

              {/* Info Section */}
              <div className="flex-1 sm:ml-6 text-white space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold">
                  The Sounds Project 8 - DAY 
                </h2>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="bg-gray-200 text-black px-2 py-1 text-xs rounded">
                    Preview
                  </span>
                  <span>The Sounds Project</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-2">
                  <IoMdAddCircleOutline size={18} />
                  <p>Save on Spotify</p>
                </div>
              </div>

              {/* Right Icons */}
              <div className="flex items-center justify-end sm:ml-auto mt-4 sm:mt-0 gap-4 text-white">
                <IoPlaySkipBackSharp size={22} className="text-gray-500" />
                <IoPlaySkipForward size={22} className="text-gray-500" />
                <BsThreeDots size={22} className="text-gray-500" />
                <FaPlayCircle size={40} className="text-white" />
                <img
                  src="image-35.svg"
                  alt="Spotify"
                  className="w-8 h-8"
                  />
              </div>
            </div>
            <div className=' w-full sm:h-[59vh] h-[35vh]  overflow-y-auto whitespace-nowrap scrollbar-hide'>

            <APIused/>
            </div>
                  </div>
        </div>
      </div>

    </div>
  )
}

export default Section5
