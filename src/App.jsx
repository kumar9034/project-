import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lineup from './pages/Lineup'
import Sponsorandparter from './pages/Sponsorandparter'
import Contact from './pages/Contact'
import Ticket from './pages/Ticket'
import Playlist from './pages/Playlist'

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lineup' element={<Lineup/>} />
        <Route path='/sponsor-parter' element={<Sponsorandparter/>} />
        <Route path='/Contact-us' element={<Contact/>} />
        <Route path='/ticket' element={<Ticket/>} />
        <Route path='/playlist' element={<Playlist/>} />
      </Routes>
    
  )
}

export default App
