import React from 'react'
import Navbar from '../component/Navbar'
import Bg from '../component/Bg'

const Sponsorandparter = () => {
  return (
    < >
      <div className='w-full h-100 absolute z-10 ' style={{
        background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
      }}>
        <Navbar/>
      </div>
      <div className='w-full h-100 absolute z-9'>
      <Bg images={['sponsorandparter/image-1.webp']} height={'h-100'}/>
      </div>
      <div className='w-full h-screen bg-[#131313]'>
      </div>
    </>
  )
}

export default Sponsorandparter
