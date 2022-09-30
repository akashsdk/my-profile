import React from 'react';
import './App.css';
import Home from './Screen/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactMe from './Screen/ContactMe';
import Resume from './Screen/Resume';
import Wrong from './Screen/Wrong';
import Slider from './Components/Slider';




import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
      <Route path="*" element={<Wrong />} />
        <Route path="/" element={<Home />} />
        <Route path='/ContactMe' element={<ContactMe />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Slider' element={<Slider />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
