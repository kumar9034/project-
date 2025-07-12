import React from 'react'
import Card4 from './Card4'

const Section7 = () => {

  const cards =[
    {
      name : "giisella.s",
      image: 'image-51.jpeg',
      description: "tahun kemarin tahun pertama aku nonton tsp, seru banget pls! apalagi bareng temen kampus. Tahun ini pastinya nonton lgi!",
      sticker_C:"image-53.svg",
      sticker_L:"",
      sticker_R:"",
      hiddenl: "hidden",
      hiddenr: "hidden",
      hiddenc : ""
      
    },
    {
      name : "thesoundsproject",
      image: 'image-59.jpg',
      description: "Embracing the chaos: Mosh pits and crowd surfing – whre music & energy collide! Siapa yg kgn energinya? 📸: @live.avenue",
      sticker_C:"",
      sticker_L:"image-54.svg",
      sticker_R:"image-55.svg",
      hiddenl : "",
      hiddenr : "",
      hiddenc : "hidden"
    },
    {
      name : "thesoundsproject",
      image: 'image-56.webp',
      description: "Lost in the music, found in each other. A perfect moment at The Sounds Project.",
      sticker_C:"image-53.svg",
      sticker_L:"",
      sticker_R:"",
      hiddenl : "hidden",
      hiddenr : "hidden",
      hiddenc : ""
    },
    {
      name : "drmwnpictures__",
      image: 'image-57.jpeg',
      description: "the sound project salah satu festival paling gong di indo gokil abis #FromMusicToInfinity #TSP8",
      sticker_C:"",
      sticker_L:"image-54.svg",
      sticker_R:"image-55.svg",
      hiddenl : "",
      hiddenr : "",
      hiddenc : "hidden"
    },
    {
      name : "Witrianiiii",
      image: 'image-60.webp',
      description: "Selau senang dateng ke tsp 😭 selalu beli tiket 3 day pass dn effort pesen hotel biar ga capek PP",
      sticker_C:"image-53.svg",
      sticker_L:"",
      sticker_R:"",
      hiddenl : "hidden",
      hiddenr : "hidden",
      hiddenc : ""
    },
    {
      name : "thesoundproject",
      image: 'image-58.jpg',
      description: "2PM and the crowd is already going wild for Juicy Luicy and Adrian Khalif, Who needs a late",
      sticker_C:"",
      sticker_L:"image-54.svg",
      sticker_R:"image-55.svg",
      hiddenl : "",
      hiddenr : "",
      hiddenc : "hidden"
    },
    {
      name : "Nikmah.thalib",
      image: 'image-61.jpeg',
      description: "Seru bgttt pokoknya pas nonton tsp tuh lari&quot; sana sini buat nonton gs yg kita suka smpe dimn tulus naik rame full🥹🫶🏻",
      sticker_C:"image-53.svg",
      sticker_L:"",
      sticker_R:"",
      hiddenl : "hidden",
      hiddenr : "hidden",
      hiddenc : ""
    },
    {
      name : "Agung.mni",
      image: 'image-62.jpeg',
      description: "Gokilllll🔥🔥",
      sticker_C:"",
      sticker_L:"image-54.svg",
      sticker_R:"image-55.svg",
      hiddenl : "",
      hiddenr : "",
      hiddenc : "hidden"
    },
    {
      name : "DJenvrn",
      image: 'image-63.jpg',
      description: "The Best Experience for my first TSP :))",
      sticker_C:"image-53.svg",
      sticker_L:"",
      sticker_R:"",
      hiddenl : "hidden",
      hiddenr : "hidden",
      hiddenc : ""
    },
    {
      name : "harripampir",
      image: 'image-64.jpg',
      description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
      sticker_C:"",
      sticker_L:"image-54.svg",
      sticker_R:"image-55.svg",
      hiddenl : "",
      hiddenr : "",
      hiddenc : "hidden"
    },

  ]
  return (
    <div className='w-full h-auto overflow-hidden pb-20  bg-[#131313]'>
      <div className='w-full flex pl-[26rem] items-center pt-20 '>
        <img className='w-60 h-15 ' src="bg-text.svg" alt="" />
        <p className='bebas-font text-white text-[2.1rem] ml-2 absolute '>Memorable moment</p>
        <p className='bebas-font text-white text-3xl ml-3 mr-3 '>at</p>
        <img className='w-30 h-13' src="image-4.png" alt="" />
      </div>
      <div className='w-full flex scroll-animation w-max   gap-10 pl-20 overflow-x-auto whitespace-nowrap scrollbar-hide p-10 h-110'>
          {cards.map((items)=>(<Card4 
          name={items.name}
          description={items.description}
          image={items.image}
          sticker_C={items.sticker_C}
          sticker_L={items.sticker_L}
          sticker_R={items.sticker_R}
          hiddenc={items.hiddenc}
          hiddenl={items.hiddenl}
          hiddenr={items.hiddenr}/>))}
      </div>

      <div className='flex justify-center items-center gap-5 mt-20 pb-10'>
        <div className='w-50 h-13 bg-[#ffa000]  rounded-lg text-white bebas-font text-2xl flex justify-center items-center  '>share your Memories</div>
        <div className='w-30 h-13 border-[#ffa000] border-1 rounded-lg hover:bg-[#ffa000]  text-2xl  text-white bebas-font flex justify-center items-center '>see all</div>
      </div>
    </div>
  )
}

export default Section7
