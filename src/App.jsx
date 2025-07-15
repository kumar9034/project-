import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lineup from './pages/Lineup'
import Sponsorandparter from './pages/Sponsorandparter'

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lineup' element={<Lineup/>} />
        <Route path='/sponsor-parter' element={<Sponsorandparter/>} />
      </Routes>
    
  )
}

export default App
