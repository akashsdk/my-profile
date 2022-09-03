import React from 'react'
import '../Styles/Home.css'
import ProfileImage from '../Image/ProfileImage.jpeg'
import TextAnimation from "react-text-animations";
import AnimatedText from 'react-animated-text-content';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (

    <Layout>
      <Layout>
        <div className='homeBody'>
          <h1 className='Text'></h1>
          <div >
            {/* Profile Image */}
            <div className='homeImage'>
              <div className='homeImage2'>
                <img src={ProfileImage} className='homeImg'></img>
                <div>
                  <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                      x: '200px',
                      y: '-20px',
                      scale: 1.1,
                      ease: 'ease-in-out',
                    }}
                    animationType="bounce"
                    interval={0.6}
                    duration={0.8}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                  >
                    HI THERE! I AM 'AKASH'.
                  </AnimatedText>
                </div>
                <div className='homeBody'>
                  <h1>
                    <TextAnimation.Slide target="App Developer" className
                      text={['[ App Developer ]', '[ Web Developer ]', '[ Freelancer ]', '[ Photographer ]']}>
                      App Developer
                    </TextAnimation.Slide>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Layout>
        
      </Layout>


    </Layout>


  )
}
