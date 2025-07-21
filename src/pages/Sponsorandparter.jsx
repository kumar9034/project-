import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Bg from '../component/Bg'
import Footer from '../component/Footer'
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from 'react-router-dom';

const Sponsorandparter = () => {
  const [value , setValue] = useState("1")

const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    < >
      <div className='w-full h-[70vh] absolute z-10 ' style={{
        background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
      }}>
        <Navbar />
        <div className='w-full h-[70vh]   pb-20 flex flex-col items-center pt-50   '>
          <h1 className='bebas-font sm:text-5xl text-4xl text-white '>Sponsor & Partnership</h1>
          <p className='text-[#b6b6b6] text-center'>Thank you to our Sponsor & Partnership for Supporting The Sounds Project</p>

          <div className=' sm:w-[45vw] w-40 sm:ml-[8vw] ml-5 mt-30  h-20   '>
            <div>
              <img className='sm:w-[20vw] w-30 h-10 sm:ml-[12vw] ml-5 absolute -mt-5' src="BG-TEXT1.svg" alt="" />
              <p className='bebas-font sm:text-3xl text-lg text-white absolute z-1 -mt-4 sm:ml-[17vw] ml-10'>main sponsor</p>
            </div>
            <div className='flex '>
              <img className=' object-cover sm:w-[38.3rem] w-60 h-[11.8rem] rounded-lg  ' src="sponsorandparter/image-2.svg" alt="" />
              <img className='sm:w-50 w-25  h-10 absolute  sm:ml-20 ml-8 sm:mt-18 mt-10 z-2 ' src="image-7.png" alt="" />
              <img className='sm:w-30 w-15 h-15 absolute sm:ml-90 ml-13 sm:mt-15 mt-28 z-1' src="image-8.png" alt="" />
            </div>
          </div>
      </div>
          
          <Box sx={{ width:"100%", backgroundColor: "#131313", typography:'body1', pt: 40, pl:5 }}>
            <TabContext value={value}  >
              <Box sx={{  width:"100%", margin:'auto',  }}>
                <TabList TabIndicatorProps={{ style: { display: 'none' } }} onChange={handleChange} className='sm:ml-[37vw] ml-[10vw]'>
                  <Tab className='w-30 '  component={Link} to="/contact-us" label={
                    <div className='w-30 h-10 bg-[#f19b17] bebas-font text-xl cursor-pointer flex justify-center items-center  text-white  rounded-lg '>contact us</div>} value="1"/>
                  <Tab className='w-35' label={<div className='w-30 h-10 bebas-font text-xl  border-1 text-white cursor-pointer hover:bg-[#f19b17] flex justify-center items-center border-[#f19b17]  ml-4 rounded-lg  '>see previously</div>} value="2"/>
                </TabList>
                <TabPanel value="2">
                <div className='w-full h-auto bg-[#131313] flex flex-col items-center pt-10'>
                  <img className='w-40 h-20  ml-5 absolute mt-15 sm:mt-0' src="BG-TEXT1.svg" alt="" />
                  <p className='text-xl bebas-font text-white absolute ml-5 mt-22'>SUPPORTING SPONSOR</p>
                  <img className='sm:w-[30rem] w-80 sm:h-60 h-40 sm:mt-20  mt-30 absolute ' src="sponsorandparter/image-3.webp" alt="" />
                    <img className='sm:w-[40rem] h-80 mt-10' src="sponsorandparter/image-2.svg" alt="" />
                <div className=' pt-10'>
                  <img className='w-40 h-20  sm:ml-55 ml-18 mt-15 absolute' src="BG-TEXT1.svg" alt="" />
                  <p className='text-2xl bebas-font text-white absolute sm:ml-58 ml-22 mt-21  sm:mt-7'>TENANT PARTNER</p>
                  <img className='sm:w-[30rem] w-60 sm:h-60 h-40 sm:mt-17 mt-30 sm:ml-20 ml-8 absolute ' src="sponsorandparter/image-4.webp" alt="" />
                  <img className='w-[40rem] h-80 mt-10' src="sponsorandparter/image-2.svg" alt="" />
                </div>
                </div>
                </TabPanel>
              </Box>
            </TabContext >
          </Box>
          <Footer/>
        </div>
      <div className='w-full h-100 absolute z-9'>
        <Bg  images={['sponsorandparter/image-1.webp']} height={'h-100'} />
      </div>
      
    </>
  )
}

export default Sponsorandparter
