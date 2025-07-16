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
            <div className='w-full h-auto pb-20 bg-[#131313]'>
                <Navbar />
                <div className='w-full h-100 absolute' style={{
                    background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
                }}>
                    <div className='absolute w-full  mt-40 flex flex-col items-center '>
                        <h1 className='flex text-white text-5xl bebas-font '>official playlist of <span><img className='w-30 h-12 ml-4 ' src="image-4.png" alt="" /></span></h1>
                        <p className='text-md text-[#b6b6b6] mt-2'>Listen, learn and do practice for 3 days🎶</p>
                    </div>
                </div>
                <Bg images={["playlist/image-1.webp"]} height={"h-100"} />
                <div className='w-full h-screen flex justify-center  '>
                    <Box sx={{ width: "100%",  typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ width: '100%',  display: 'flex-col '  }}>
                                <TabList TabIndicatorProps={{ style: { display: 'none' } }} onChange={handleChange} sx={{marginLeft: 60}}>
                                    <Tab sx={{width:15, padding: 0, color: '#b6b6b6'}} label={<div className='text-3xl bebas-font text-white '>Day 1</div>} value="1" />
                                    <Tab sx={{width:"auto", padding: 0}} label={<div className='text-3xl bebas-font text-white '>Day 2</div>} value={'2'} />
                                    <Tab sx={{width:"auto", padding: 0}} label={<div className=' text-3xl bebas-font text-white'>Day 3</div>} value={'3'} />
                                </TabList>
                                <TabPanel value={'1'}>
                                    <div className='flex'>
                                        <div className='w-[70vw] h-[80vh] bg-black  rounded-lg border-[#424242] border-1  ml-40 absolute'>
                                            <div className='w-full h-40 bg-[#131313] pt-5 rounded-t-lg   flex justify-between '>
                                                <div className='w-[60vw] flex'>
                                                    <img className='w-30 h-30 ml-10 object-cover' src="image-33.jpg" alt="" />
                                                    <div className='mt-5'>
                                                        <h1 className='font-[700] text-2xl text-white ml-4'>The Sounds Project 8 - DAY1</h1>
                                                        <div className='flex gap-4  mt-1 items-center'>
                                                            <div className='w-15 h-5 bg-[#bcbcbc] bebas-font text-sm flex justify-center items-center ml-4 rounded-md'>preview </div>
                                                            <span className='text-lg font-[600] text-[#424242]'>the sound project</span>
                                                        </div>
                                                        <div className='flex ml-4 mt-1 gap-3'>
                                                            <IoMdAddCircleOutline color='#bcbcbc' size={24} />
                                                            <p className='text-sm text-[#bcbcbc] font-[500]'>Save on spotify</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='w-[40vw] '>
                                                    <img className='ml-80' src="image-35.svg" alt="" />
                                                    <div className='flex  gap-5 mt-12 ml-40'>
                                                        <div className='flex mt-2 gap-8'>
                                                            <IoPlaySkipBackSharp color='#424242' size={25} />
                                                            <IoPlaySkipForward color='#424242' size={25} />
                                                        </div>
                                                        <BsThreeDots color='#bcbcbc' size={25} className='mt-2' />
                                                        <FaPlayCircle color='white' className='mt-' size={40} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-76 overflow-y-auto whitespace-nowrap scrollbar-hide'>
                                                <APIused />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={'2'}>
                                    <div className='flex'>
                                        <div className='w-[70vw] h-[80vh] bg-black  rounded-lg border-[#424242] border-1  ml-40 absolute'>
                                            <div className='w-full h-40 bg-[#131313] pt-5   flex justify-between '>
                                                <div className='w-[60vw] flex'>
                                                    <img className='w-30 h-30 ml-10 object-cover' src="playlist/image-2.jpg" alt="" />
                                                    <div className='mt-5'>
                                                        <h1 className='font-[700] text-2xl text-white ml-4'>The Sounds Project 8 - DAY2</h1>
                                                        <div className='flex gap-4  mt-1 items-center'>
                                                            <div className='w-15 h-5 bg-[#bcbcbc] bebas-font text-sm flex justify-center items-center ml-4 rounded-md'>preview </div>
                                                            <span className='text-lg font-[600] text-[#424242]'>the sound project</span>
                                                        </div>
                                                        <div className='flex ml-4 mt-1 gap-3'>
                                                            <IoMdAddCircleOutline color='#bcbcbc' size={24} />
                                                            <p className='text-sm text-[#bcbcbc] font-[500]'>Save on spotify</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='w-[40vw] '>
                                                    <img className='ml-80' src="image-35.svg" alt="" />
                                                    <div className='flex  gap-5 mt-12 ml-40'>
                                                        <div className='flex mt-2 gap-8'>
                                                            <IoPlaySkipBackSharp color='#424242' size={25} />
                                                            <IoPlaySkipForward color='#424242' size={25} />
                                                        </div>
                                                        <BsThreeDots color='#bcbcbc' size={25} className='mt-2' />
                                                        <FaPlayCircle color='white' className='mt-' size={40} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-76 overflow-y-auto whitespace-nowrap scrollbar-hide'>
                                                <APIused />
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={'3'}>
                                    <div className='flex'>
                                        <div className='w-[70vw] h-[80vh] bg-black  rounded-lg border-[#424242] border-1  ml-40 absolute'>
                                            <div className='w-full h-40 bg-[#131313] pt-5   flex justify-between '>
                                                <div className='w-[60vw] flex'>
                                                    <img className='w-30 h-30 ml-10 object-cover' src="playlist/image-3.jpg" alt="" />
                                                    <div className='mt-5'>
                                                        <h1 className='font-[700] text-2xl text-white ml-4'>The Sounds Project 8 - DAY3</h1>
                                                        <div className='flex gap-4  mt-1 items-center'>
                                                            <div className='w-15 h-5 bg-[#bcbcbc] bebas-font text-sm flex justify-center items-center ml-4 rounded-md'>preview </div>
                                                            <span className='text-lg font-[600] text-[#424242]'>the sound project</span>
                                                        </div>
                                                        <div className='flex ml-4 mt-1 gap-3'>
                                                            <IoMdAddCircleOutline color='#bcbcbc' size={24} />
                                                            <p className='text-sm text-[#bcbcbc] font-[500]'>Save on spotify</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='w-[40vw] '>
                                                    <img className='ml-80' src="image-35.svg" alt="" />
                                                    <div className='flex  gap-5 mt-12 ml-40'>
                                                        <div className='flex mt-2 gap-8'>
                                                            <IoPlaySkipBackSharp color='#424242' size={25} />
                                                            <IoPlaySkipForward color='#424242' size={25} />
                                                        </div>
                                                        <BsThreeDots color='#bcbcbc' size={25} className='mt-2' />
                                                        <FaPlayCircle color='white' className='mt-' size={40} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-76 overflow-y-auto whitespace-nowrap scrollbar-hide'>
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
                <Footer/>
        </>
    )
}

export default Playlist
