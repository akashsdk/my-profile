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
  WhatsAppOutlined
} from '@ant-design/icons';
import { Link, } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const [page, setPage] = useState(1)
  const [hide, setHide] = useState(false)
  const setHide1 = () => {
    
  };


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
        <div style={{ flex: 1, flexDirection: 'row', }}>
          <h1 style={{ color: 'aqua' }}>me.!</h1>
          <p>A passionate Full Stack Software Developer,</p>
          <p> having an experience of building Web and Mobile applications </p>
          <p>with JavaScript / Reactjs / React Native / Nodejs and </p>
          <p>other cool libraries and frameworks</p>
          <div className='HomeLayoutLine'></div>
          <div>
            <Button type="link" className='HomeLayoutButton'
              href="https://github.com/akashsdk" >
              <GithubOutlined className='HomeLayoutIcon' />
            </Button>

            <Button type="link" className='HomeLayoutButton'
              href="https://www.linkedin.com/in/tasnimsakash/">
              <LinkedinOutlined className='HomeLayoutIcon' />
            </Button>

            <Button type="link" className='HomeLayoutButton'
              href=''>
              <GoogleOutlined className='HomeLayoutIcon' />
            </Button>

            <Button type="link" className='HomeLayoutButton'
              href='https://www.facebook.com/tasnimSakash/'>
              <FacebookOutlined className='HomeLayoutIcon' />
            </Button>

            <Button type="link" className='HomeLayoutButton'
              href='https://twitter.com/tasnimSakash'>
              <TwitterOutlined className='HomeLayoutIcon' />
            </Button>

            <Button type="link" className='HomeLayoutButton'
              href='https://api.whatsapp.com/send?phone=8801580233165&text=hello%F0%9F%98%87'>
              <WhatsAppOutlined className='HomeLayoutIcon' />
            </Button>
          </div>
          <div>
            <Link className='HomeLayoutButton2' to="/ContactMe">Contact Me</Link>
            <Link className='HomeLayoutButton2' to="/Resume">SEE MY RESUME</Link>
          </div>
        </div>
        <div style={{ flex: 1, }}>
          <img src={img} className='HomeLayoutImg'></img>
        </div>
      </Layout>
      <h1 style={{ color: 'aqua', marginTop: '15px' }}>ABOUT ME</h1>

      <Layout className='HomeLayout'>

        <div style={{ flex: 1, flexDirection: 'row', }}>

          <p style={{ color: 'rgb(237, 158, 38)', fontSize: '50px' }}>Biography</p>
          <div className='HomeLayoutLine2'></div>


          <p>Am a person who is positive about every aspect of life.</p>
          <p> There are many things I like to do, to see, and to experience. </p>
          <p>I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. </p>
          <p>I like to smell the wind coming from the ocean.</p>
          <p>I like to look at the clouds in the sky with a blank mind,</p>
          <p>I like to do thought experiment when I cannot sleep in the middle of the night.</p>
          <div className='HomeLayoutLine'></div>


        </div>

        <div style={{ flex: 1, marginTop: '50px' }}>


          <div className='HomeAboutDiv'>
            <h1 className='HomeAboutDivH1'>NAME:</h1>
            <h1 className='HomeAboutDivH2'>Tasnim Shahriar Akash</h1>
          </div>

          <div className='HomeAboutDiv'>
            <h1 className='HomeAboutDivH1'>BIRTHDAY:</h1>
            <h1 className='HomeAboutDivH2'>03 Mar 2000</h1>
          </div>

          <div className='HomeAboutDiv'>
            <h1 className='HomeAboutDivH1'>AGE:</h1>
            <h1 className='HomeAboutDivH2'>22 years</h1>
          </div>

          <div className='HomeAboutDiv'>
            <h1 className='HomeAboutDivH1'>ADDRESS:</h1>
            <h1 className='HomeAboutDivH2'>AshuliaModelTown, Saver, Dhaka</h1>
          </div>

          <div className='HomeAboutDiv'>
            <h1 className='HomeAboutDivH1'>PHONE:</h1>
            <h1 className='HomeAboutDivH2'>(+88) 01580-233165</h1>
          </div>

          <div className='HomeAboutDiv'>
            <h1 className='HomeAboutDivH1'>EMAIL:</h1>
            <h1 className='HomeAboutDivH2'>tasnimshahriarakash@gmail.com</h1>
          </div>
        </div>

      </Layout>

      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '20px' }}>
          <button onClick={setHide}
          style={{ color: hide ? 'rgb(237, 158, 38)' :'#fff', fontSize: '40px', background: 'transparent', border: 'hide', }}>
            Experience
          </button>
          <div className='HomeExpLine' />
          <button style={{ color: 'rgb(237, 158, 38)', fontSize: '40px', background: 'transparent', border: 'hide', marginLeft:'10px' }}>
            Education
          </button>
          <div className='HomeExpLine' />
          <button style={{ color: 'rgb(237, 158, 38)', fontSize: '40px', background: 'transparent', border: 'hide',marginLeft:'10px'  }}>
            Skills
          </button>
        </div>

        <div className='HomeExpBox'>
          {
            page == 2 ? (
              <p >Experience </p>
            ) : page == 1 ? (
              <div>
                <div style={{
                  backgroundColor:'black',
                  margin:'20px',
                  marginTop:'30px',
                  borderRadius:'10px',
                }}>
                  <p style={{display:'flex',
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                  fontSize:'30px',
                  }}>Computer Science Engineering <p style={{opacity:'.4', marginLeft:'20px',}}>2019-2022</p></p>
                  <p style={{fontSize:'25px', opacity:'.6', marginTop:'-50px'}}>Daffodil International University, Dhaka</p>
                  <p style={{fontSize:'20px', marginTop:'-20px'}}>Average CGPA-3.16</p>
                </div>

                <div style={{
                  backgroundColor:'black',
                  margin:'20px',
                  marginTop:'30px',
                  borderRadius:'10px',
                }}>
                  <p style={{display:'flex',
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                  fontSize:'20px',
                  }}>Computer Science Engineering <p style={{opacity:'.4', marginLeft:'20px',}}>2019-2022</p></p>
                  <p >Daffodil International University, Dhaka</p>
                  <p>Average CGPA-3.16</p>
                </div>
              </div>
            ) : page == 3 ? (
              <p >Skills</p>
            ) : (
              <></>
            )
          }
        </div>

      </Layout>
    </Layout>


  )
}
