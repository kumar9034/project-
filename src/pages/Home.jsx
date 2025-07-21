import React, { useEffect, useRef } from 'react'
import Bg from '../component/Bg'
import Section2 from '../component/Section2'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Newcard from '../component/Newcard'
import Section5 from '../component/Section5';
import Section6 from '../component/Section6'
import Section7 from '../component/Section7'
import Footer from '../component/Footer'
import Section from '../component/Section1';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';



gsap.registerPlugin(ScrollTrigger);


const cards = [
  {
    name: "daily pass",
    price: "250.000",
    start: "starts from"
  },
  {
    name: "3 day pass",
    price: "550.000",
    start: "start from"
  },
  {
    name: "couple pakage [2tix]",
    price: "400.000",
    start: ""
  },
  {
    name: "group pakage [5tix]",
    price: "800.000",
    start: ""
  },
]

const Home = () => {
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const sectionRef = useRef(null);




  useEffect(() => {
    // Scroll-triggered parallax image motion
    imageRefs.current.forEach((el, i) => {
      const direction = i % 2 === 0 ? -50 : 50;

      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: direction,
        ease: "none"
      });
    });
    // Animate text fade-in
    textRefs.current.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.6,
      });
    });

  }, []);
  return (<>
    <div className='w-full  h-[100vh] absolute z-50' style={{
      background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
    }}>
      <Navbar />
      <Section />
    </div>

    <Bg images={['/image-1.webp',
      '/image-2.webp',
      '/image-6.webp',
      '/image-3.jpg',]}
      height={'h-[100vh]'} />
    <div >
      <Section2 />
      <div className='max-w-full sm:h-[90vh] h-[80vh]   bg-[#131313] flex-col '>
        <div
          ref={sectionRef}
          className="w-full h-[80vh] overflow-hidden flex  sm:px-20 px-0 justify-between relative"
          style={{
            background:
              "linear-gradient(180deg, rgb(19, 19, 19) 0%, #1a1a1a 50%, rgb(19, 19, 19) 100%)",
          }}
        >
          {[["image-23.jpg", "image-24.jpg"], ["image-25.jpg", "image-26.jpg"], ["image-27.jpg", "image-28.jpg"]].map(
            (pair, colIdx) => (
              <div key={colIdx} className=''>
                {pair.map((src, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (imageRefs.current[colIdx * 2 + idx] = el)}
                    className={`sm:h-50 h-40  sm:w-33 w-25 ${idx !== 0 ? "sm:ml-10 ml-3 " : "0"} bg-red-300 relative opacity-40`}
                  >
                    <img className="h-50 object-cover" src={src} alt="" />
                  </div>
                ))}
              </div>
            )
          )}

          <div className="sm:w-[60vw] w-[85vw] flex flex-col items-center  sm:ml-[15vw] ml-[5vw] absolute mt-10 z-49">
            {[
              <>
                <span className="inline">GOOD VIBES,</span>
                <span className="inline-block mx-2">
                  <img
                    src="image-29.jpg"
                    alt=""
                    className="w-16 sm:w-24 h-10 sm:h-14 object-cover rounded-2xl align-middle"
                  />
                </span>
                <span className="inline">GREAT MUSIC,</span>
              </>,
              <>
                <span className="inline">AND UNFORGETTABLE</span>
                <span className="inline-block mx-2">
                  <img
                    src="image-30.jpg"
                    alt=""
                    className="w-16 sm:w-24 h-10 sm:h-14 object-cover rounded-2xl align-middle"
                  />
                </span>
                <span className="inline">MEMORIES —</span>
              </>,
              <>
                <span className="inline-block -ml-2 sm:-ml-5 mr-3">
                  <img
                    src="image-4.png"
                    alt=""
                    className="w-24 sm:w-32 h-12 object-contain"
                  />
                </span>
                <span className="inline text-center">3 DAYS, 6 STAGES, 100+ PERFORMANCES.</span>
              </>,
            ].map((line, i) => (
              <h1
                key={i}
                ref={(el) => (textRefs.current[i] = el)}
                className="bebas-font text-white text-[27px] sm:text-4xl text-center  leading-tight"
              >
                {line}
              </h1>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* section-4 */}
    <div className='min-h-screen w-full flex flex-col pb-10  items-center bg-[#131313] text-white bebas-font'>

      <div className='flex justify-center items-center   relative '>
        <h1 className='text-4xl '>get</h1>
        <img className='w-42 h-10 relative ' src="bg-text.svg" alt="" />
        <span className='w-40 h-10 text-4xl absolute z-1'>your ticket</span>
        <h1 className='text-4xl '>now</h1>
      </div>
      <div className='absolute w-full overflow-hidden pb-20 sm:pt-10 pt-5 px-5 sm:px-20 overflow-x-auto whitespace-nowrap scrollbar-hide  h-90 flex mt-30 gap-5  '>
        {
          cards.map((items) => (<Newcard
            key={items.id}
            name={items.name}
            price={items.price}
            start={items.start}
          />))
        }
      </div>
      <Link to="/ticket">
        <div className="w-40 h-10 border-1 z-90 relative mt-[30rem]  border-[#f19b17] rounded-lg flex justify-center items-center text-xl cursor-pointer hover:bg-[#f19b17] hover:text-white">
          See all tickets
        </div>
      </Link>
    </div>
    <Section5 />
    <Section6 />
    <Section7 />
    <Footer />

  </>
  )
}

export default Home
