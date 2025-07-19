import React, { useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
const Section2 = () => {

    const cards = [
        {
            id: 1,
            image: "image-12.jpg",
            text: "tiara andini",
            bg: 'image-11.svg'
        },
        {
            id: 2,
            image: "image-13.jpg",
            text: "vierratale",
            bg: 'image-11.svg'
        },
        {
            id: 3,
            image: "image-14.jpg",
            text: "juicy luicy",
            bg: 'image-11.svg'
        },
        {
            id: 4,
            image: "image-15.jpg",
            text: "efek rumah kaca",
            bg: 'image-11.svg'
        },
        {
            id: 5,
            image: "image-16.jpg",
            text: "banda neira",
            bg: 'image-11.svg'
        },
        {
            id: 6,
            image: "image-17.jpeg",
            text: "kahitna",
            bg: 'image-11.svg'
        },
        {
            id: 7,
            image: "image-18.jpg",
            text: "the adams",
            bg: 'image-11.svg'
        },
        {
            id: 8,
            image: "image-19.jpg",
            text: "jkt48",
            bg: 'image-11.svg'
        },
        {
            id: 9,
            image: "image-20.jpg",
            text: "hindia",
            bg: 'image-11.svg'
        },
        {
            id: 10,
            image: "image-21.jpg",
            text: "the changcuters",
            bg: 'image-11.svg'
        },
    ]

    return (
        <div className='w-full h-[90vh] bg-[#131313] text-white'>
            <div className='flex items-center justify-center sm:pt-15 gap-5 '>
                <Link to="/ticket">
                <div className='sm:w-50 w-30 sm:h-15 h-10 relative z-70 bg-[#f19b17] flex justify-center items-center bebas-font sm:text-3xl text-xl rounded-lg cursor-pointer '> buy tickets
                    <div className='sm:w-25 w-23 h-5  absolute z-72 sm:mt-14 mt-10'><img src="BG-TEXT1.svg" alt="" />
                    </div>
                    <p className='absolute z-73 text-sm sm:mt-16 mt-12'>almost sold out!</p>
                </div>
                </Link>
                <Link to='/lineup'>
                <div className='sm:w-50 w-30 sm:h-15 h-10 border-[#f19b17] border-1  bebas-font sm:text-3xl text-xl flex text-[#f19b17] justify-center items-center rounded-lg cursor-pointer hover:bg-[#f19b17] hover:text-white '>
                  line up
                </div>
                </Link>
            </div>
            <div className='w-full h-10 justify-center items-center  mt-10 flex gap-4'>
                <img className='sm:w-35 w-20 ' src=" image-9.webp" alt="" />
                <img className=' sm:w-15 w-20 h-8' src="image-10.webp" alt="" />
            </div>

            {/* next section  */}

            <div className='sm:mt-20 mt-10 p-8  '>
                <div className='flex justify-center items-center '>
                    <p className='bebas-font text-white sm:text-4xl text-2xl'>featuring</p>
                    <div className='sm:w-55 w-35 ml-1 flex'>
                        <img className='relative z-70 ' src="bg-text.svg" alt="" />
                        <p className='bebas-font tex-white z-72 sm:text-[2.5rem] text-[1.5rem] absolute ml-2 '>Extraordinary</p>
                    </div>
                    <p className='bebas-font sm:text-4xl  text-2xl ml-2'>line up</p>
                </div>
            </div>
            <div className="w-full  absolute overflow-x-auto whitespace-nowrap scrollbar-hide pl-5 mr-5 mt-10">
                <div  className="flex  gap-4">
                    {cards.map((items) => (
                        <div key={items.id}>
                            <Card
                                image={items.image}
                                text={items.text}
                                bg={items.bg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section2
