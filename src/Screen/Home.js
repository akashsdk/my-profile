import React, { useState } from 'react'
import '../Styles/Home.css'
import ProfileImage from '../Image/ProfileImage.jpeg'
import TextAnimation from "react-text-animations";
import AnimatedText from 'react-animated-text-content';
import { Col, Row, Layout, Button, Radio } from 'antd';
import img from "../Image/on-desk.png"
import {
  DownloadOutlined, GithubOutlined, FacebookOutlined,
  LinkedinOutlined, GoogleOutlined, TwitterOutlined,
} from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;

export default function Home() {

  return (

    <Layout>
      <Row >
        <Col span={12}>
          <div>

          </div>
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>

      <Layout className='HomeLayout'>
        <div style={{ flex: 1, flexDirection: 'row' }}>
          <h1>me.!</h1>
          <p>A passionate Full Stack Software Developer,</p>
          <p> having an experience of building Web and Mobile applications </p>
          <p>with JavaScript / Reactjs / React Native / Nodejs and </p>
          <p>other cool libraries and frameworks</p>
          <div>
            <Button type="link" >
              <GithubOutlined />
            </Button>

            <Button type="link" >
              <LinkedinOutlined />
            </Button>

            <Button type="link" >
              <GoogleOutlined />
            </Button>

            <Button type="link" >
              <FacebookOutlined />
            </Button>

            <Button type="link" >
              <TwitterOutlined />
            </Button>
          </div>
        </div>
        <div style={{ flex: 1, }}>
          <img src={img} className='HomeLayoutImg'></img>
        </div>
      </Layout>


    </Layout>


  )
}
