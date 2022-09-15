import React from 'react';
import "./Header.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";



export default function Header() {

  return (
    <div className='HeaderBody'>
      <div className='HeaderBodyDiv'></div>
      
      <div className='HeaderDiv'>
        <nav>
          <Link className="link-1" to="/">Home</Link>
          <Link className="link-1" to="/ContactMe">Contact Me</Link>
        </nav>
      </div>
    </div>
  )
}
