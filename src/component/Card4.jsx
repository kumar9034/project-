import React from 'react'

const Card4 = ( {image ,description , sticker_L, sticker_R, sticker_C , name , hiddenl,hiddenr, hiddenc}) => {
    return (
        <div className='relative w-75 h-90 hover:rotate-1'>
            {/* Decorative top-left sticker */}
            <img className={`w-25 h-15 -ml-8 -mt-5 absolute ${hiddenl}  z-10`} src={sticker_L} alt="" />
            
            {/* Decorative top-center sticker */}
            <img className={`w-23 ml-23 -mt-7 h-12 absolute ${hiddenc}   z-10`} src={sticker_C} alt="" />

            {/* Main card content */}
            <div className='w-75 h-90 p-2 bg-white '>
                <div className='w-71 h-88 flex flex-col'>
                    <img className='w-71 h-56 object-cover' src={image} alt="" />
                    <p className='text-[12px] h-20 mt-3 font-[400] leading-4 break-words whitespace-normal '>
                        {description}
                    </p>
                    <div className='flex gap-2'>
                        <img className='w-5 h-5' src="image-52.webp" alt="" />
                        <p className='bebas-font text-md font-[800]'>@{name}</p>
                    </div>
                </div>

                {/* Bottom-right corner sticker */}
                <img className={`w-23 h-14 absolute -bottom-3 -right-9 z-10 ${hiddenr}  `} src={sticker_R} alt="" />
            </div>
        </div>
    )
}

export default Card4
