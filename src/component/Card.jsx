import React from 'react'

const Card = ({ text, image, bg }) => {
    return (
        <div className='w-50 h-60  bg-white rounded-lg '>
            <div className='flex flex-col w-50 '>
                <img className='h-45 w-full rounded-lg object-cover relative z-70' src={image} alt="" />
                <img className='absolute z-72 w-50 h-5 mt-41 ' src={bg} alt="" />
                <h1 className=' absolute z-72 px-8 flex   bebas-font mt-48 text-black text-[1.7rem] '>
                    {text}
                </h1>
            </div>
        </div>
    )
}

export default Card
