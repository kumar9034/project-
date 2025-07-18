import React from 'react'

const Card = ({ text, image, bg }) => {
    return (
        <div className='sm:w-50 w-30  sm:h-60 h-40  bg-white rounded-lg  hover:rotate-1'>
            <div className='flex flex-col sm:w-50 w-30 '>
                <img className='sm:h-45 h-25 w-full rounded-lg bg-cover relative ' src={image} alt="" />
                <img className='absolute  sm:w-50 w-30 h-5 sm:mt-41 mt-22 ' src={bg} alt="" />
                <h1 className=' absolute  sm:px-8 flex   bebas-font sm:mt-48 mt-29 ml-3 text-black sm:text-[1.7rem] text-[1.2rem] '>
                    {text}
                </h1>
            </div>
        </div>
    )
}

export default Card
