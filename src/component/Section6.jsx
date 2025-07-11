import React, { useRef, useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { FaPlayCircle } from "react-icons/fa";
import Card2 from './Card2';

const Section6 = () => {
  const [value, setValue] = useState('1');
  const videoRef = useRef(null)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const togglePlay = (url) => {
    videoRef.current.src = url
    videoRef.current.play();
  }

  const pause = ()=>{
    videoRef.current.pause();
  }
  



  return (
    <div className='w-full h-auto bg-[#131313]'>
      <div className='flex-col pl-[20rem] items-center gap-3 pt-20'>
        <h1 className='flex bebas-font text-white text-[2.5rem]'>
          Peek into the excitement of Logo of
          <span>
            <img className='w-24 h-10 ml-3 mr-3' src="image-4.png" alt="" />
          </span>
          2025
        </h1>
        <p className='text-[#bcbcbc] ml-35 text-[18px]'>
          Watch the official AFTERMOVIE “Discover Miracle”
        </p>
      </div>

      <Box sx={{ width: '100%', typography: 'body1', mt: 5 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '50%', margin: 'auto', }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" className='ml-25'>
              <Tab label={<span className='bebas-font text-white text-3xl'>after movie</span>} value="1" />
              <Tab label={<span className='bebas-font text-white text-3xl'>live from the fest </span>} value="2" />
            </TabList>
          </Box >
          <TabPanel value="1"> <div className=' w-full h-[27rem] flex justify-center  '>
            <div className='w-[50rem] h-[20rem] flex mt-10 ml-40 '>
              <img className='w-[40rem] h-[23rem] object-cover' src="image-34.svg" alt="" />
              <video ref={videoRef} onClick={()=>{togglePlay('video-1.mp4')}} onDoubleClick={pause} className='w-[35rem] transition-transform duration-300 ease-in-out hover:scale-102 h-77 mt-7 object-cover absolute ml-10 'poster='image-36.webp'></video>
              <FaPlayCircle className='absolute z-10 ml-73 mt-38 ' color='white' size={50}/>
            </div>
            </div></TabPanel>
          <TabPanel value="2"><div className='  w-full h-[27rem]'>
            <Card2/>
            
            </div></TabPanel>
          
        </TabContext>
      </Box>
    </div>
  );
};

export default Section6;
