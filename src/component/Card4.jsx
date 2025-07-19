import React from 'react'

const Card4 = ( {image ,description , sticker_L, sticker_R, sticker_C , name , hiddenl,hiddenr, hiddenc}) => {
    return (
        <div className='relative sm:w-75 w-[40vw]  sm:h-90 h-63'>
            {/* Decorative top-left sticker */}
            <img className={`sm:w-25 w-17  sm:h-15 h-12 sm:-ml-8 -ml-7 hidden lg:hidden sm:-mt-5 -mt-3 absolute ${hiddenl}  z-10`} src={sticker_L} alt="" />
            
            {/* Decorative top-center sticker */}
            <img className={`sm:w-23 w-15 sm:ml-23 ml-10 sm:-mt-7 -mt-3 hidden lg:hidden  sm:h-12 h-8 absolute ${hiddenc}   z-10`} src={sticker_C} alt="" />

            {/* Main card content */}
            <div className='sm:w-75 w-[40vw] sm:h-90 h-63 p-2 bg-white '>
                <div className='sm:w-71 w-[40vw] sm:h-88 h-58 flex flex-col'>
                    <img className='sm:w-71 w-[35vw] sm:h-56 h-30 object-cover' src={image} alt="" />
                    <p className='sm:text-[12px] text-[9px] h-[15vh] mt-3 font-[400] leading-4 break-words whitespace-normal '>
                        {description}
                    </p>
                    <div className='flex gap-2'>
                        <img className='w-5 h-5' src="image-52.webp" alt="" />
                        <p className='bebas-font sm:text-md text-sm  font-[800]'>@{name}</p>
                    </div>
                </div>

                {/* Bottom-right corner sticker */}
                <img className={`sm:w-23 w-17 sm:h-14 h-10 absolute sm:-bottom-3 hidden lg:hidden -bottom-2 sm:-right-9 -right-5 z-10 ${hiddenr}  `} src={sticker_R} alt="" />
            </div>
        </div>
    )
}

export default Card4
