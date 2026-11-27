import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from './components/About/About'

import Landing from './components/Landing/Landing';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App
