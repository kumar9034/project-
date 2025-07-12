import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const APIused = () => {

    const [track, settrack] = useState([])
    const audioRef = useRef(null);
    const [playingId, setPlayingId] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            const url = 'https://spotify81.p.rapidapi.com/playlist?id=37i9dQZF1DX4Wsb4d7NKfP';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '4491fe8b02msh6de10e0b55a0a80p1dccfajsn2e46febdfb99',
                    'x-rapidapi-host': 'spotify81.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                const items = result.tracks.items
                const track = items.map((item) => (item.track))
                console.log(track);
                settrack(track)

            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the async function
    }, []);

    const togglePlay = (track) => {
    if (!track.preview_url) return;

    if (playingId === track.id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      audioRef.current.src = track.preview_url;
      audioRef.current.play();
      setPlayingId(track.id);
      audioRef.current.onended = () => setPlayingId(null);
    }
  };

    return (
        <>
        <div className=''>
            {track.map((items) => (
                <div className='w-full h-10 hover:bg-[#131313] cursor-pointer  flex justify-between px-8  '
                onClick={() => togglePlay(items)}>
                    <div className='flex gap-3'>
                        <div className='flex mt-2 mr-2 '>
                            <button  >{playingId === items.id ? <FaPause color='#424242' size={18}  /> : <FaPlay color='#424242' size={18} />}</button>
                        </div>
                        <div className='leading-none mt-2'>
                            <h1 className='text-white font-[600] text-[14px] '>{items.name}</h1>
                            <h1 className='text-[#424242] font-[600] text-[10px] mt-1 '>{items.artists[0].name}</h1>
                        </div>
                    </div>
                    <span className='text-[13px] font-[600] text-white mt-2 '>{
                        Math.floor(items.duration_ms / 60000)
                    }:
                    {
                            String(Math.floor((items.duration_ms % 60000) / 1000)).padStart(2, '0')
                        }</span>
                        <div className='hidden'> 
                            <audio ref={audioRef} ></audio>
                        </div>
                </div>

            ))}

        </div>


        </>
    )
}


export default APIused
