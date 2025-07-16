import React from 'react'
import Navbar from '../component/Navbar'
import Bg from "../component/Bg"
import Newcard from '../component/Newcard'
import Footer from '../component/Footer'

const Ticket = () => {
    const cards = [
        {
            name: "daily pass",
            price: "250.000",
            start: "starts from",
            width: "'w-80"
        },
        {
            name: "3 day pass",
            price: "550.000",
            start: "start from"
        },
        {
            name: "couple pakage [2tix]",
            price: "400.000",
            start: "start from"
        },
        {
            name: "daily pass [friday]",
            price: "250.000",
            start: "start from"
        },
        {
            name: "daily pass [saturday]",
            price: "300.000",
            start: "start from"
        },
        {
            name: "daily pass [sunday]",
            price: "250.000",
            start: "start from"
        },
        {
            name: "GROUP PACKAGE (6 TIX, FRIDAY)",
            price: "150.000",
            start: "start from"
        },
        {
            name: "Couple package (2 TIX, SUNDAY)",
            price: "200.000",
            start: "start from"
        },
        {
            name: "GROUP PACKAGE (6 TIX, SATURDAY)",
            price: "200.000",
            start: "start from"
        },
        {
            name: "GROUP PACKAGE (6 TIX, SUNDAY)",
            price: "150.000",
            start: "start from"
        },
    ]
    return (
        <>
        
        <div className='w-full h-auto pb-20 bg-[#131313]'>
            <Navbar />
            <div className='w-full h-100 absolute' style={{
                background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
            }}>
                <div className='flex flex-col items-center '>
                    <div className='flex mt-45'>
                        <h1 className='bebas-font text-5xl text-white '>get</h1>
                        <img className='w-45 h-10 ' src="bg-text.svg" alt="" />
                        <h1 className='absolute text-4xl text-white bebas-font ml-18 mt-1 '>you tickets</h1>
                        <h1 className='bebas-font text-5xl text-white '>now</h1>
                    </div>
                </div>
            </div>
            <Bg images={['ticket/image-1.webp']} height={'h-100'} />
            <div className='w-full h-auto flex px-20 flex-wrap justify-center items-center gap-5 '>
                {
                    cards.map((items , id) => <Newcard
                        key={id}
                        name={items.name}
                        price={items.price}
                        start={items.start}
                        width={items.width }
                        
                        />)
                    }
            </div>
        </div>
        <Footer/>
                    </>
    )
}

export default Ticket
