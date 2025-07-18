import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-[#131313] px-4 sm:px-12 py-10'>
      {/* Top Section */}
      <div className='flex flex-col sm:flex-row sm:items-start gap-4'>
        <img className='w-32 h-14' src="image-4.png" alt="Logo" />
        <div className='text-white'>
          <p className='bebas-font text-2xl'>
            8<span className='text-4xl text-red-900 mx-4'>.</span>
            9<span className='text-4xl text-red-900 mx-2'>.</span>
            10 Agustus 2025
          </p>
          <p className='bebas-font text-2xl'>
            Ecovention & Ecopark Ancol
            <span className='text-4xl text-red-900 mx-2'>.</span>
            Jakarta, Indonesia
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div className='mt-6'>
        <h1 className='text-4xl bebas-font text-white leading-snug text-center sm:text-left'>
          Where the dreamers go. <br className='block sm:hidden' />
          Live concert matters.
        </h1>
      </div>

      <hr className='border-t border-[#cccccc] my-6' />

      {/* Links & Socials */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6'>
        {/* Navigation Links */}
        <div className='flex flex-wrap gap-x-6 gap-y-2 sm:w-[60%]'>
          {[
            'Home',
            'Become press',
            'Become a sponsor & partners',
            'Contact us'
          ].map((text, index) => (
            <p key={index} className='bebas-font text-white text-[18px] hover:text-[#f19b17] flex items-center gap-1'>
              {text}
              <img className='w-4 h-4' src="image-65.svg" alt="arrow" />
            </p>
          ))}
        </div>

        {/* Social Icons */}
        <div className='flex flex-wrap gap-3 items-center'>
          <p className='bebas-font text-[#cccccc] text-[18px] w-full sm:w-auto'>Follow us</p>
          {['66', '67', '68', '69', '70', '71'].map((num, index) => (
            <img key={index} className='w-6 h-6' src={`image-${num}.svg`} alt={`social-${num}`} />
          ))}
        </div>
      </div>

      <hr className='border-t border-[#cccccc] my-6' />

      {/* Bottom Section */}
      <div className='flex flex-col sm:flex-row justify-between  text-white text-sm'>
        <p className='bebas-font  text-left'>© 2014 - 2025 THESOUNDSPROJECT&CO</p>
        <p className='bebas-font flex items-center gap-2 mt-2 sm:mt-0'>
          Member of
          <img className='w-10 h-6' src="image-72.svg" alt="APMI" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
