import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const logo = [
    '/image-7.png',
    '/image-8.png'
  ]

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logo.length); // loop back to 0
    }, 5000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (

    <Box sx={{ width: '90vw', backgroundColor: "#131313", height: "100%" }} role="presentation" onClick={toggleDrawer(false)}>
      <div className='flex justify-between bg-[#1f1d1d] h-auto pb-6 border-[#f19b17] border-y-1'><img className='w-30 h-15 mt-5 ml-5' src="image-4.png" alt="" />
        <div className='flex gap-3 mt-10'>
          <img className='w-25 h-6  ' src="image-7.png" alt="" />
          <IoClose color='white' size={30} />
        </div>
      </div>
      <List>
        <ListItem >
          <div className='flex-col px-5   '>
          <Link to="/">
          <button className='mt-4 bebas-font text-2xl  text-white mb-4 cursor-pointer '>home </button>
          </Link>
          <div className='w-70 border-1 border-[#262626]'></div>
          <Link to="/lineup">
          <button className='mt-4 bebas-font text-2xl  text-white mb-4 cursor-pointer '>line up</button>
          </Link>
          <div className='w-70 border-1 border-[#262626]'></div>
          <Link to="/sponsor-parter">
          <button className='mt-4 bebas-font text-2xl  text-white mb-4 cursor-pointer '>sponsor&partner</button>
          </Link>
          <div className='w-70 border-1 border-[#262626]'></div>
          <Link to="/photo">
          <button className='mt-4 bebas-font text-2xl  text-white mb-4 cursor-pointer '>photo</button>
          </Link>
          <div className='w-70 border-1 border-[#262626]'></div>
          <Link to="/playlist">
          <button className='mt-4 bebas-font text-2xl  text-white mb-4 cursor-pointer '>playlist</button>
          </Link>
          <div className='w-70 border-1 border-[#262626]'></div>
          <Link to="/contact-us">
          <button className='mt-4 bebas-font text-2xl  text-white mb-4 cursor-pointer '>contact us</button>
          </Link>
          <Link to="/ticket">
          <div className='w-30 h-10 bg-[#f19b17] flex justify-center items-center bebas-font text-xl text-white ml-20 rounded-lg mt-8 cursor-pointer'>buy tickects</div>
          </Link>
          </div>



        </ListItem>
      </List>
      <Divider />
    </Box>

  );



  return (
    <div className='w-full h-18 bg-black/10 backdrop-blur-md fixed top-0 left-0 z-90 absolute flex items-center justify-between px-10'>
      <div className='w-22 z-60  flex  '>
        <img src="image-5.png" alt="" />
      </div>
      <div className='lg:block hidden w-110  lg:flex gap-5  '>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300  font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/'>Home</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300  font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/lineup'>LineUp</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/sponsor-parter'>Sponsor&partner</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/photo'>photoes</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/playlist'>playlist</Link></p>
        <p className='bebas-font cursor-pointer pb-1 border-b-2 border-transparent hover:border-[#f19b17] transition-all duration-300 font-[500] text-[#ffffff] text-[1.4rem]'><Link to='/contact-us'>contactus</Link></p>
      </div>
      <div className=' w-60 ml-10 flex justify-center items-center gap-3'>


      </div>
      <div className=' hidden lg:block'>
        <Link to="/ticket">
          <div className='w-35 h-10  cursor-pointer border-1 border-[#f19b17] flex items-center justify-center text-[#f19b17] bebas-font text-[1.4rem] rounded-lg hover:text-white hover:bg-[#f19b17]'>buy tickets</div>
        </Link>
      </div>
      <div className='lg:hidden block  '>
        <Button onClick={toggleDrawer(true)}><TiThMenu size={25} color='white' /></Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>

    </div>
  )
}

export default Navbar
