import React from 'react'
import Bg from '../component/Bg'
import Navbar from '../component/Navbar'

const Home = () => {
  return (<>
    <div className='w-full  h-screen absolute z-50'style={{
    background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
  }}>
      
    </div>
      <Bg/>
      <Navbar/>
  </>
  )
}

export default Home
