import React from 'react'
import Navbar from "../component/Navbar"
import Bg from "../component/Bg"
const Photo = () => {
    return (
        <>
        <div className='h-screen w-full bg-[#131313]'>
            <Navbar />
            <div className='w-full h-100 absolute' style={{
                background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
            }}>
                
            </div>
            <Bg images={["photo/image-1.webp"]} height={"h-100"} />
        </div>
        </>
    )
}

export default Photo
