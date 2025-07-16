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
      <div className='w-full h-100 absolute z-10 ' style={{
        background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
      }}>
        <Navbar />
        <div className='w-full h-auto  pb-20 flex flex-col items-center pt-50   '>
          <h1 className='bebas-font text-5xl text-white '>Sponsor & Partnership</h1>
          <p className='text-[#b6b6b6]'>Thank you to our Sponsor & Partnership for Supporting The Sounds Project</p>

          <div className=' w-[42.5rem] ml-15 mt-30 h-20   '>
            <div>
              <img className='w-40 h-10 ml-55 absolute -mt-5' src="BG-TEXT1.svg" alt="" />
              <p className='bebas-font text-2xl text-white absolute z-1 -m-3 ml-60'>main sponsor</p>
            </div>
            <div className='flex '>
              <img className=' object-cover w-[38.3rem] h-[11.8rem] rounded-lg  ' src="sponsorandparter/image-2.svg" alt="" />
              <img className='w-50 h-10 absolute  ml-20 mt-18 z-2 ' src="image-7.png" alt="" />
              <img className='w-30 h-15 absolute ml-90 mt-15 z-1' src="image-8.png" alt="" />
            </div>
          </div>
      </div>
          
          <Box sx={{ width:"100%", backgroundColor: "#131313", typography:'body1', pt: 10, }}>
            <TabContext value={value}  >
              <Box sx={{  width:"50%", margin:'auto',  }}>
                <TabList TabIndicatorProps={{ style: { display: 'none' } }} onChange={handleChange} sx={{display:"flex", marginLeft : 20}}>
                  <Tab  component={Link} to="/" label={
                    <div className='w-35 h-10 bg-[#f19b17] bebas-font text-xl cursor-pointer flex justify-center items-center  text-white  rounded-lg '>contact us</div>} value="1"/>
                  <Tab label={<div className='w-35 h-10 bebas-font text-xl  border-1 text-white cursor-pointer hover:bg-[#f19b17] flex justify-center items-center border-[#f19b17]  ml-4 rounded-lg  '>see previously</div>} value="2"/>
                </TabList>
                <TabPanel value="2">
                <div className='w-full h-auto bg-[#131313] '>
                  <img className='w-40 h-20 -mt-10 ml-55 absolute' src="BG-TEXT1.svg" alt="" />
                  <p className='text-xl bebas-font text-white absolute ml-58 -mt-3'>SUPPORTING SPONSOR</p>
                  <img className='w-[30rem] h-60 mt-10 ml-15 absolute ' src="sponsorandparter/image-3.webp" alt="" />
                    <img className='w-[40rem] h-80 mt-10' src="sponsorandparter/image-2.svg" alt="" />
                <div className=' pt-10'>
                  <img className='w-40 h-20  ml-55 absolute' src="BG-TEXT1.svg" alt="" />
                  <p className='text-2xl bebas-font text-white absolute ml-58  mt-7'>TENANT PARTNER</p>
                  <img className='w-[30rem] h-60 mt-17 ml-12 absolute ' src="sponsorandparter/image-4.webp" alt="" />
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
      <div   className='w-full h-screen bg-[#131313] absolute'>
      </div>
    </>
  )
}

export default Sponsorandparter
