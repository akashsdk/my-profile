import React from 'react'
import '../Styles/Home.css'
import ProfileImage from '../Image/ProfileImage.jpeg'

export default function Home() {
  return (
    <div className='homeBody'>
      <h1 className='Text'></h1>
      <div >
        {/* Profile Image */}
        <div className='homeImage'>
          <div className='homeImage2'>
            <img src={ProfileImage} className='homeImg'></img>
            <h3>HI AKASH! I AM</h3>
            <div>
              <h1>Profile</h1>
            </div>
          </div>
        </div>
        {/* INTRODUCTION */}
        <div></div>
      </div>
    </div>
  )
}
