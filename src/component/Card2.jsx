import React from 'react';

const Card2 = React.forwardRef(({ name, photoes }, ref) => {
  return (
       <div>
         <div ref={ref} className='w-50 h-[26rem] rounded-lg '>
           <img className='rounded-lg group-hover:translate-y-0 transition-all duration-500 ease-in-out' src={photoes} alt="" />
           <p className='bebas-font text-white text-md mt-2 w-9 h-10 flex-wrap flex '>{name}</p>
           <p className='flex text-white bebas-font gap-2 '> <span><img className='w-5 h-5  ' src="image-38.svg " alt="" /></span> youtube</p>
         </div>
       </div>
     )
  
});

export default Card2;

