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


  const images = [
  '/image-1.webp',
  '/image-2.webp',
  '/image-6.webp',
  '/image-3.jpg',
];

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
    <div className='w-full  h-screen absolute z-50' style={{
      background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
    }}>
    </div>

    <Bg image={images} />
    <div >
      <Section2 />
      <div className='w-full h-screen bg-[#131313] flex-col mb-25'>
        <div className='flex justify-center items-center '>
          <div className='w-40 text-[#f19b17] mt-30 bebas-font h-10 border-[#f19b17] text-[1.4rem] cursor-pointer hover:bg-[#f19b17] hover:text-white rounded-lg flex justify-center items-center border-1 '>see all line up</div>
        </div>
        <div
          ref={sectionRef}
          className="w-full h-full overflow-hidden flex mt-20 px-20 justify-between relative"
          style={{
            background:
              "linear-gradient(180deg, rgb(19, 19, 19) 0%, #1a1a1a 50%, rgb(19, 19, 19) 100%)",
          }}
        >
          {[["image-23.jpg", "image-24.jpg"], ["image-25.jpg", "image-26.jpg"], ["image-27.jpg", "image-28.jpg"]].map(
            (pair, colIdx) => (
              <div key={colIdx}>
                {pair.map((src, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (imageRefs.current[colIdx * 2 + idx] = el)}
                    className={`h-50 w-33 ${idx !== 0 ? "ml-10 " : ""} bg-red-300 relative opacity-40`}
                  >
                    <img className="h-50 object-cover" src={src} alt="" />
                  </div>
                ))}
              </div>
            )
          )}

          <div className="w-[60vw] h-50 flex-col ml-[20vw] absolute mt-10 z-49">
            {[
              <>
                Good Vibes{" "}
                <span className="w-30 h-5 ml-3 flex mr-3">
                  <img className="w-27 h-13 rounded-4xl object-cover" src="image-29.jpg" alt="" />
                </span>{" "}
                Great Music,
              </>,
              <>
                and Unforgettable{" "}
                <span className="w-30 h-5 ml-3 flex mr-3">
                  <img className="w-27 h-13 rounded-4xl object-cover" src="image-30.jpg" alt="" />
                </span>{" "}
                Memories —
              </>,
              <>
                <span className="w-30 -ml-10 h-5 flex mr-3">
                  <img className="w-32 h-13 object-cover" src="image-4.png" alt="" />
                </span>
                3 DAYS, 6 STAGES, 100+ PERFORMANCES.
              </>,
            ].map((textLine, i) => (
              <h1
                key={i}
                className="bebas-font text-white text-5xl mt-5 flex"
                ref={(el) => (textRefs.current[i] = el)}
              >
                {textLine}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* section-4 */}
    <div className='min-h-screen w-full flex flex-col pb-10 items-center bg-[#131313] text-white bebas-font'>

      <div className='flex justify-center items-center mt-20 relative '>
        <h1 className='text-4xl '>get</h1>
        <img className='w-42 h-10 relative ' src="bg-text.svg" alt="" />
        <span className='w-40 h-10 text-4xl absolute z-1'>your ticket</span>
        <h1 className='text-4xl '>now</h1>
      </div>
      <div className='absolute w-full overflow-hidden h-90 flex mt-30 gap-5 justify-center items-center '>
        {
          cards.map((items) => (<Newcard
            key={items.id}
            name={items.name}
            price={items.price}
            start={items.start}
          />))
        }
      </div>
      <div className="w-40 h-10 border border-[#f19b17] mt-[20rem] rounded-lg flex justify-center items-center text-xl cursor-pointer hover:bg-[#f19b17] hover:text-white">
        See all tickets
      </div>
    </div>
      <Section5 />
      <Section6/>
      <Section7/>
      <Footer/>
      
  </>
  )
}

export default Home
