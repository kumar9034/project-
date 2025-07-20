import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Bg from '../component/Bg'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import APIused from '../component/APIused';
import Footer from "../component/Footer"

const Playlist = () => {
    const [value, setValue] = useState("1")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className='w-full h-auto pb-20 bg-[#131313] '>
                <Navbar />
                <div className='w-full h-100 absolute' style={{
                    background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
                }}>
                    <div className='absolute w-full  mt-40 flex flex-col flex-wrap text-center items-center '>
                        <h1 className='flex flex-wrap justify-center text-white text-5xl bebas-font '>official playlist of <span><img className='w-30 h-12 ml-4 ' src="image-4.png" alt="" /></span></h1>
                        <p className='text-md text-[#b6b6b6] mt-2'>Listen, learn and do practice for 3 days🎶</p>
                    </div>
                </div>
                <Bg images={["playlist/image-1.webp"]} height={"h-100"} />
                <div className='w-[90vw] min-h-screen  flex justify-center  sm:px-10 pl-3  pr-4'>
                    <Box sx={{ width: "100%",  typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ width: '90vw', display: 'flex-col ', alignItems: 'center' }}>
                                <TabList TabIndicatorProps={{ style: { display: 'none' } }} onChange={handleChange} className='sm:ml-[35vw] ml-[15vw]' >
                                    <Tab sx={{ padding: 0, color: '#b6b6b6', minWidth: 80 }} label={<div className='text-3xl bebas-font text-white '>Day 1</div>} value="1" />
                                    <Tab sx={{ padding: 0, minWidth: 80 }} label={<div className='text-3xl bebas-font text-white '>Day 2</div>} value={'2'} />
                                    <Tab sx={{ padding: 0, minWidth: 80 }} label={<div className=' text-3xl bebas-font text-white'>Day 3</div>} value={'3'} />
                                </TabList>
                                <TabPanel value={'1'}>
                                    <div className="relative z-10  space-y-8 flex flex-col items-center">

                                        <div className='border-1 sm:w-[80vw] w-[95vw]  h-auto bg-[#131313] mr-1 rounded-lg border-[#2e2c2c]'>

                                            <div
                                                className="bg-[#1f1f1f] rounded-xl p-4 sm:flex items-center w-[94vw] sm:w-[80vw] max-w-5xl shadow-lg"
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
                                                        The Sounds Project 8 - 1 DAY
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
                                            <div className=' w-full sm:h-[59vh] h-[40vh]  overflow-y-auto whitespace-nowrap scrollbar-hide'>

                                                <APIused />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={'2'}>
                                    <div className="relative z-10  space-y-8 flex flex-col items-center">
                                        <div className='border-1 sm:w-[80vw] w-[95vw]  h-auto bg-[#131313]  rounded-lg border-[#1f1f1f]'>

                                            <div
                                                className="bg-[#1f1f1f] rounded-xl p-4 sm:flex items-center w-[94vw] sm:w-[80vw] max-w-5xl shadow-lg"
                                            >
                                                {/* Album Image */}
                                                <img
                                                    src="playlist/image-2.jpg"
                                                    alt="Album Cover"
                                                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-md object-cover mb-4 sm:mb-0"
                                                />

                                                {/* Info Section */}
                                                <div className="flex-1 sm:ml-6 text-white space-y-2">
                                                    <h2 className="text-xl sm:text-2xl font-bold">
                                                        The Sounds Project 8 - 2 DAY
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
                                            <div className=' w-full sm:h-[59vh] h-[40vh]  overflow-y-auto whitespace-nowrap scrollbar-hide'>

                                                <APIused />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={'3'}>
                                    <div className="relative z-10  space-y-8 flex flex-col items-center">
                                        <div className='border-1 sm:w-[80vw] w-[95vw]  h-auto bg-[#131313]  rounded-lg border-[#1f1f1f]'>

                                            <div
                                                className="bg-[#1f1f1f] rounded-xl p-4 sm:flex items-center w-[94vw] sm:w-[80vw] max-w-5xl shadow-lg"
                                            >
                                                {/* Album Image */}
                                                <img
                                                    src="playlist/image-3.jpg"
                                                    alt="Album Cover"
                                                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-md object-cover mb-4 sm:mb-0"
                                                />

                                                {/* Info Section */}
                                                <div className="flex-1 sm:ml-6 text-white space-y-2">
                                                    <h2 className="text-xl sm:text-2xl font-bold">
                                                        The Sounds Project 8 - 3 DAY
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
                                            <div className=' w-full sm:h-[59vh] h-[40vh]  overflow-y-auto whitespace-nowrap scrollbar-hide'>

                                                <APIused />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Box>
                        </TabContext>
                    </Box>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Playlist
