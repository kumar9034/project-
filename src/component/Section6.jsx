import React, { useEffect, useRef, useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { FaPlayCircle } from "react-icons/fa";
import Card2 from './Card2';
import gsap from 'gsap';

const Section6 = () => {
  const [value, setValue] = useState('1');
  const videoRef = useRef(null)
  const cardref = useRef([])
  const containref = useRef([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const togglePlay = (url) => {

    videoRef.current.src = url
    videoRef.current.play();
  }

  const pause = () => {
    videoRef.current.pause();
  }

  const cards = [
    {
      name: "RADJA at The Sounds Project 7",
      photo: "image-37.webp",
    },
    {
      name: "juicy luck at the sound project7",
      photo: "image-39.webp",
    },
    {
      name: "t.r.i.a.d at the sound project7",
      photo: "image-40.webp",
    },
    {
      name: "ungu at the sound project7",
      photo: "image-41.webp",
    },
    {
      name: "wali at sound the sound project7",
      photo: "image-42.webp",
    },
    {
      name: "sal priadi at the sound project7",
      photo: "image-43.webp",
    },
    {
      name: "the rain x rocket rockers at the  sound project7",
      photo: "image-44.webp",
    },
    {
      name: "pee wee gaskins at the sound project7",
      photo: "image-45.webp",
    },
    {
      name: "dhyo haw the sound project7",
      photo: "image-46.webp",
    },
    {
      name: "souljah at the sound project7",
      photo: "image-47.webp",
    },
    {
      name: "j-rocks at the sound project7",
      photo: "image-48.webp",
    },
    {
      name: "fstvlst at the sound project7",
      photo: "image-49.webp",
    },
    {
      name: "stand here alone at sound project7",
      photo: "image-50.webp",
    },
  ]
  useEffect(() => {
    if (value !== "2") return;

    const validRefs = cardref.current.filter(Boolean); // remove nulls

    if (validRefs.length) {
      gsap.from(validRefs, {
        x: -30,
        opacity: 0,
        scale: 0.95,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [value]); // run only when `value` changes

  // array of refs

  useEffect(() => {
    if (!containref.current[0]) return;

    gsap.from(containref.current[0], {
      scrollTrigger: {
        trigger: containref.current[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 90,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
    });
  }, []);



  return (
    <div className='min-w-full h-auto bg-[#131313]'>
      <div className='flex flex-col items-center  gap-3 pt-20'>
        <h1 className='flex flex-wrap justify-center items-center bebas-font text-white text-center text-[2.5rem]  leading-tight'>
          Peek into the excitement of
          <span className='mx-3'>
            <img className='w-32 h-auto' src="image-4.png" alt="The Sounds Project 7 Logo" />
          </span>
          2024
        </h1>
        <p className='text-[#bcbcbc] text-[18px] text-center'>
          Watch the official AFTERMOVIE “Discover Miracle”
        </p>
      </div>


      <Box sx={{ width: '100%', typography: 'body1', mt: 5 }}>
        <TabContext value={value}>
          {/* --- Tabs --- */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <TabList
              onChange={handleChange}
              aria-label="AFTERMOVIE tabs"
              TabIndicatorProps={{ style: { backgroundColor: '#ffb100', height: '4px' } }}
              className='w-full sm:w-[50%] flex justify-center'
            >
              <Tab
                label={<span className='bebas-font uppercase text-white text-xl sm:text-3xl'>After Movie</span>}
                value="1"
                sx={{ flex: 1 }}
              />
              <Tab
                label={<span className='bebas-font uppercase text-gray-400 text-xl sm:text-3xl'>Live from the Fest</span>}
                value="2"
                sx={{ flex: 1 }}
              />
            </TabList>
          </Box>

          {/* --- Tab Panel 1: Aftermovie --- */}
          <TabPanel value="1">
            <div className="flex justify-center items-center w-full h-auto py-10 px-4 sm:px-10">
              <div className="relative w-full sm:w-[55rem] h-[15rem] sm:h-[24rem]">
                <img
                  src="image-34.svg"
                  alt="Aftermovie Frame"
                  className="absolute w-full h-full object-cover z-0"
                />
                <video
                  ref={videoRef}
                  onClick={() => togglePlay('video-1.mp4')}
                  onDoubleClick={pause}
                  className="absolute top-[10%] left-[5%] w-[90%] h-[80%] object-cover rounded-md z-10 hover:scale-105 transition duration-300"
                  poster="image-36.webp"
                />
                <FaPlayCircle
                  className="absolute z-20 text-white cursor-pointer"
                  size={50}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
            </div>
          </TabPanel>

          {/* --- Tab Panel 2: Live from the Fest --- */}
          <TabPanel value="2">
            <div className="flex px-4 sm:px-10 gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {
                cards.map((items, index) => (
                  <Card2
                    key={index}
                    ref={(el) => (cardref.current[index] = el)}
                    name={items.name}
                    photoes={items.photo}
                  />
                ))
              }
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Section6;
