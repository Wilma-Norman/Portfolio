import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from './components/About/About'
import SideRays from './components/SideRays/SideRays';
import Landing from './components/Landing/Landing';


function App() {
  return (
    <>
      <BrowserRouter>
       <SideRays
        origin="top-right"
        rayColor1="#f97316"
        rayColor2="#ef4444"
        blend={0.5}
        speed={1}
        intensity={2.5}
        spread={3.5}
        density={5}
        sharpness={0.3}
        falloff={0.8}
        glow={1.5}
        saturation={1.3}
        opacity={1}
        />
        <div className="page-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
