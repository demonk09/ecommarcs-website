import React from 'react'
import Nav from './Components/Nav'
import Essentials from './Components/Essentials'
import Men from './Components/Men'
import Women from'./Components/Women'
import About from'./Components/About'
import Footer from './Components/Footer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Essentials />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/about" element={<About />} />
    
    </Routes>
    <Footer/>

  </BrowserRouter>
  
  )
}
export default App
