import React from 'react'
import Navbar from "../component/Navbar"
import Bg from '../component/Bg'
import Footer from '../component/Footer'
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <>
    <div className='w-full h-auto bg-[#131313] '>
      <Navbar/>
      <div className='h-100 w-full absolute z-1  'style={{
        background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
      }}>
        <div className='flex flex-col items-center text-center  '>
          <h1 className='text-white text-5xl bebas-font  mt-45 '>Lets Contact our Friendly Team</h1>
          <p className=' text-lg text-[#b6b6b6]'>Let us know how we can help</p>
        </div>

      </div>
      <Bg images={['contact/image-1.webp']} height={'h-100'}/>
      <div className='flex  flex-wrap justify-center items-center gap-7 '>

        <div className='w-[20rem] h-auto border-1 border-[#424242] pl-5 pt-5 pr-5 pb-10 rounded-lg sm:mb-30'>
          <IoMailOutline size={40} color='white' />
          <h1 className='text-white bebas-font text-3xl mt-7 '>Sponsor & Partnership</h1>
          <p className='text-md text-[#e7e7e7] mt-3'>Speak to our friendly team</p>
          <h3 className='text-[1.1rem] font-[700] text-white break-words whitespace-normal mt-5'>sponsorship.soundsproject@gmail.com</h3>
        </div>
        <div className='w-[20rem] h-auto border-1 border-[#424242] pl-5 pt-5 pr-5 pb-10 rounded-lg sm:mb-30'>
            <IoMailOutline size={40} color='white' />
            <h1 className='text-white bebas-font text-3xl mt-7 '>prees</h1>
            <p className='text-lg text-[#e7e7e7]'>Speak to our friendly team</p>
            <h3 className='text-[1.1rem] font-[700] text-white break-words whitespace-normal mt-5'>sponsorship.soundsproject@gmail.com</h3>
        </div>
        <div className='w-[20rem] h-auto border-1 border-[#424242] pl-5 pt-5 pb-10  rounded-lg mb-30'>
            <IoCallOutline size={40} color='white'/>
            <h1 className='text-white bebas-font text-3xl mt-7 '>Call Us</h1>
            <p className='text-lg text-[#e7e7e7]'>Speak to our friendly team</p>
            <h3 className='text-[1.1rem] font-[700] text-white break-words whitespace-normal mt-5'>+ 6281292509339</h3>
        </div>
      </div>

    <Footer/>
    </div>
    </>
  )
}

export default Contact
