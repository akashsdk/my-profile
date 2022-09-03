import React from 'react'
import '../Styles/Home.css'
import ProfileImage from '../Image/ProfileImage.jpeg'
// import TextAnimation from "react-text-animations";
import AnimatedText from 'react-animated-text-content';

export default function Home() {
  return (
    <div className='homeBody'>
      <h1 className='Text'></h1>
      <div >
        {/* Profile Image */}
        <div className='homeImage'>
          <div className='homeImage2'>
            <img src={ProfileImage} className='homeImg'></img>
            <div>
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Content to animate
              </AnimatedText>;
            </div>
            <h3>HI THERE! I AM TASNIM SHAHRIAR AKASH</h3>
            <div>
              {/* <TextAnimation.Slide target="Street"
                            text={['Street', 'Street', 'Street']}>
                            Street
                        </TextAnimation.Slide> */}
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
