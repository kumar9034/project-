import React, { useState } from 'react'
import Navbar from "../component/Navbar"
import Bg from "../component/Bg"
import Card4 from '../component/Card4'
import Footer from "../component/Footer"
import { IoMdCloseCircle } from "react-icons/io";

const Photo = () => {
    const [selecte, setSelecte] = useState()

    const cards = [
        {
            name: "giisella.s",
            image: 'image-51.jpeg',
            description: "tahun kemarin tahun pertama aku nonton tsp, seru banget pls! apalagi bareng temen kampus. Tahun ini pastinya nonton lgi!",
            sticker_C: "image-53.svg",
            sticker_L: "null",
            sticker_R: "null",
            hiddenl: "hidden",
            hiddenr: "hidden",
            hiddenc: ""

        },
        {
            name: "thesoundsproject",
            image: 'image-59.jpg',
            description: "Embracing the chaos: Mosh pits and crowd surfing – whre music & energy collide! Siapa yg kgn energinya? 📸: @live.avenue",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "thesoundsproject",
            image: 'image-56.webp',
            description: "Lost in the music, found in each other. A perfect moment at The Sounds Project.",
            sticker_C: "image-53.svg",
            sticker_L: "",
            sticker_R: "",
            hiddenl: "hidden",
            hiddenr: "hidden",
            hiddenc: ""
        },
        {
            name: "drmwnpictures__",
            image: 'image-57.jpeg',
            description: "the sound project salah satu festival paling gong di indo gokil abis #FromMusicToInfinity #TSP8",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "Witrianiiii",
            image: 'image-60.webp',
            description: "Selau senang dateng ke tsp 😭 selalu beli tiket 3 day pass dn effort pesen hotel biar ga capek PP",
            sticker_C: "image-53.svg",
            sticker_L: "",
            sticker_R: "",
            hiddenl: "hidden",
            hiddenr: "hidden",
            hiddenc: ""
        },
        {
            name: "thesoundproject",
            image: 'image-58.jpg',
            description: "2PM and the crowd is already going wild for Juicy Luicy and Adrian Khalif, Who needs a late",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "Nikmah.thalib",
            image: 'image-61.jpeg',
            description: "Seru bgttt pokoknya pas nonton tsp tuh lari&quot; sana sini buat nonton gs yg kita suka smpe dimn tulus naik rame full🥹🫶🏻",
            sticker_C: "image-53.svg",
            sticker_L: "",
            sticker_R: "",
            hiddenl: "hidden",
            hiddenr: "hidden",
            hiddenc: ""
        },
        {
            name: "Agung.mni",
            image: 'image-62.jpeg',
            description: "Gokilllll🔥🔥",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "DJenvrn",
            image: 'image-63.jpg',
            description: "The Best Experience for my first TSP :))",
            sticker_C: "image-53.svg",
            sticker_L: "",
            sticker_R: "",
            hiddenl: "hidden",
            hiddenr: "hidden",
            hiddenc: ""
        },
        {
            name: "harripampir",
            image: 'image-64.jpg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "thesoundsproject",
            image: 'photo/image-2.webp',
            description: "Good vibes, great music, and unforgettable friendship. The Sounds Project is where connections come alive",
            sticker_C: " image-53.svg",
            sticker_L: "",
            sticker_R: "",
            hiddenl: "hidden",
            hiddenr: "hidden",
            hiddenc: ""
        },
        {
            name: "berbafaya",
            image: 'photo/image-3.jpg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: " paaanjul",
            image: 'photo/image-4.jpeg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "muh.izyan",
            image: 'photo/image-5.jpeg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "_.silaturrahmah",
            image: 'photo/image-6.jpeg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "rifansannn",
            image: 'photo/image-7.jpg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "Aprie_prasetya",
            image: 'photo/image-8.jpg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: "thesoundsproject",
            image: 'photo/image-9.jpg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },
        {
            name: " karin_melindaaa",
            image: 'photo/image-10.jpg',
            description: "TSP 2023, isinya bukan cuma musik, tapi momen yg gak bisa diulang, Duduk di rumput, jajan, sambil nunggu artis fav main",
            sticker_C: "",
            sticker_L: "image-54.svg",
            sticker_R: "image-55.svg",
            hiddenl: "",
            hiddenr: "",
            hiddenc: "hidden"
        },

    ]
    return (
        <>
            <div className='h-auto w-full pb-20 bg-[#131313]'>
                <Navbar />
                <div className='w-full h-100 absolute' style={{
                    background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
                }}>
                    <div className='flex flex-col items-center mt-45'>
                        <div className='flex flex-wrap  ml-10'>
                            <span className='flex absolute text-5xl text-white bebas-font ml-7 mt-1 '> memorable</span>
                            <img className='w-60 h-13 ' src="bg-text.svg" alt="" />
                            <h1 className='text-white text-5xl bebas-font '>moment at </h1>
                            <img className='w-30 h-12 ml-3 ' src="image-4.png" alt="" />
                        </div>
                        <div className='w-70 h-13 border-[#f19b17] border-1 rounded-lg flex justify-center items-center text-2xl mt-5 hover:text-white cursor-pointer text-[#f19b17] hover:bg-[#f19b17] bebas-font '>Submit your memories 👀</div>
                    </div>
                </div>
                <Bg images={["photo/image-1.webp"]} height={"h-100"} />

                <div className='w-full flex flex-wrap  justify-center itmes-center sm:gap-10 gap-3 sm:p-10 p-5 h-auto'>
                    {cards.map((items) => (
                        <div key={items.id} onClick={() => setSelecte(items)} className="cursor-pointer">
                            <Card4
                                name={items.name}
                                description={items.description}
                                image={items.image}
                                sticker_C={items.sticker_C}
                                sticker_L={items.sticker_L}
                                sticker_R={items.sticker_R}
                                hiddenc={items.hiddenc}
                                hiddenl={items.hiddenl}
                                hiddenr={items.hiddenr} />
                        </div>))}
                </div>

            </div>
            <Footer />
                {selecte && (
                    <div className="fixed inset-0  bg-black bg-opacity-50  overflow-y-auto  scrollbar-hide  flex justify-center h-auto w-full   pt-10  z-99">
                        <div className='w-[30rem] h-auto flex flex-col items-center gap-5  '>
                            <div className='flex justify-center  '>
                                <div className='flex '>
                                    <img className='w-50 h-12'  src="bg-text.svg" alt="" />
                                    <p className='text-2xl bebas-font text-white absolute  ml-5 mt-3 '>memorable moment</p>
                                </div>
                                    <p className='text-white bebas-font text-3xl mt-2 mr-2'>at</p>
                                    <img className='w-20 h-10 ' src="image-4.png" alt="" />
                            </div>
                            <button className=' absolute mt-22 cursor-pointer ml-[20rem]' onClick={() => setSelecte(null)}>
                                <IoMdCloseCircle  color='#b6b6b6' size={30}/>
                            </button>
                            <div className='w-[25rem] h-[40rem] p-3 bg-white mt- '>

                                <img className='w-full h-[30rem] object-cover' src={selecte.image} alt="" />
                                <p className='text-md font-[400] h-25 mt-3'>{selecte.description}</p>
                                <div className='flex '>
                                <span><img className='w-7 h-7 ' src="image-52.webp" alt="" /></span>
                                <p className='bebas-font text-lg ml-3 '>@{selecte.name}</p>

                                </div>
                            </div>

                        </div>

                    </div>
                    )}
        </>
    )
}

export default Photo
