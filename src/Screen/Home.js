import React, { useState } from 'react'
import '../Styles/Home.css'
import ProfileImage from '../Image/ProfileImage.jpeg'
import TextAnimation from "react-text-animations";
import AnimatedText from 'react-animated-text-content';
import { Col, Row, Layout, Button, Radio } from 'antd';
import img from "../Image/on-desk.png";
import Contact from "./ContactMe";
import Slider from '../Components/Slider';
import Resume from './Resume.js'
import {
  DownloadOutlined, GithubOutlined, FacebookOutlined,
  LinkedinOutlined, GoogleOutlined, TwitterOutlined,
  WhatsAppOutlined, ArrowUpOutlined,
} from '@ant-design/icons';
import { Link, } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const [page, setPage] = useState(3)
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
                        <TextAnimation.Slide target="App Developer"
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

      {/* Experience,Education,Skills */}
      <Layout>
        <div className='HomeEduButton'>
          <button onClick={setHide}
            style={{ color: hide ? 'rgb(237, 158, 38)' : '#fff', fontSize: '40px', background: 'transparent', border: 'hide', }}>
            Experience
          </button>
          <div className='HomeExpLine' />
          <button style={{ color: 'rgb(237, 158, 38)', fontSize: '40px', background: 'transparent', border: 'hide', marginLeft: '10px' }}>
            Education
          </button>
          <div className='HomeExpLine' />
          <button style={{ color: 'rgb(237, 158, 38)', fontSize: '40px', background: 'transparent', border: 'hide', marginLeft: '10px' }}>
            Skills
          </button>
        </div>

        <div className='HomeExpBox'>
          {
            page == 1 ? (
              // Experience
              <div>
                <p >Experience </p>
              </div>
            ) : page == 2 ? (
              // Education
              <div>
                <div style={{ display: 'flex' }} />

                <div style={{
                  backgroundColor: 'rgb(24, 23, 23)',
                  margin: '20px',
                }}>
                  <p style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30px',
                  }}>Computer Science Engineering <p style={{ opacity: '.4', marginLeft: '20px', }}>2019-2022</p></p>
                  <p style={{ fontSize: '25px', opacity: '.6', marginTop: '-50px' }}>Daffodil International University, Dhaka</p>
                  <p style={{ fontSize: '20px', marginTop: '-20px', opacity: '0.7' }}>Average CGPA-3.16</p>
                </div>

                <div style={{
                  backgroundColor: 'rgb(24, 23, 23)',
                  margin: '20px',
                  marginTop: '30px',
                }}>
                  <p style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30px',
                  }}>Higher Secondary School Certificate <p style={{ opacity: '.4', marginLeft: '20px', }}>2017-2018</p></p>
                  <p style={{ fontSize: '25px', opacity: '.6', marginTop: '-50px' }}>Dhaka College , Dhaka</p>
                  <p style={{ fontSize: '20px', marginTop: '-20px', opacity: '0.7' }}>Average GPA-3.46</p>
                </div>


                <div style={{
                  backgroundColor: 'rgb(24, 23, 23)',
                  margin: '20px',
                  marginTop: '30px',
                }}>
                  <p style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30px',
                  }}>Secondary School Certificate <p style={{ opacity: '.4', marginLeft: '20px', }}>2015-2016</p></p>
                  <p style={{ fontSize: '25px', opacity: '.6', marginTop: '-50px' }}>Lahini Secondary School, Kushtia</p>
                  <p style={{ fontSize: '20px', marginTop: '-20px', opacity: '0.7' }}>Average GPA-4.56</p>
                </div>
                <div style={{ display: 'flex', }} />
              </div>
            ) : page == 3 ? (
              // Skills
              <div>
                {/* Programming Language */}
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <p style={{
                    fontSize: '30px', fontFamily: 'initial', color: 'aqua', marginLeft: '-40%'
                  }}>Programming Language</p>
                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '122px'
                    }}> C</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '100px'
                    }}> C++</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '52px'
                    }}> JavaScript</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '79px'
                    }}> HTML</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '100px'
                    }}> CSS</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                  </div>
                </div>

                {/* React */}
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <p style={{
                    fontSize: '30px', fontFamily: 'initial', color: 'aqua', marginLeft: '-40%'
                  }}>React</p>
                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '20px'
                    }}> React Routing</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '42px'
                    }}> Material UI <br></br> Design</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '35px',
                    }}> JSX element</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '20px'
                    }}> Bootstrap CSS</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>
                </div>

                {/* React Native */}
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <p style={{
                    fontSize: '30px', fontFamily: 'initial', color: 'aqua', marginLeft: '-40%'
                  }}>React Native</p>
                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '30px'
                    }}> Front End <br></br> Development</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '32px'
                    }}> Back End <br></br> Development</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>
                </div>

                {/* Node JS */}
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <p style={{
                    fontSize: '30px', fontFamily: 'initial', color: 'aqua', marginLeft: '-40%'
                  }}>Node JS</p>
                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '20px'
                    }}> Firebase Admin <br></br> Development</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '55px'
                    }}> Web socket </p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '65px'
                    }}> Modern <br></br> JavaScript</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>
                </div>

                {/* Firebase */}
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <p style={{
                    fontSize: '30px', fontFamily: 'initial', color: 'aqua', marginLeft: '-40%'
                  }}>Firebase</p>
                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '30px'
                    }}> Firebase <br></br> Authentication</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '72px'
                    }}> Real time <br></br>database</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '54px'
                    }}> Notification</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>

                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '27px'
                    }}> Google Cloud <br />API integration </p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                    <div className='HomeExpRound2' />
                  </div>
                </div>

                {/* IoT */}
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <p style={{
                    fontSize: '30px', fontFamily: 'initial', color: 'aqua', marginLeft: '-40%'
                  }}>IoT</p>
                  <div style={{ display: 'flex', }}>
                    <p style={{
                      fontSize: '20px', fontFamily: 'initial', color: 'white', marginTop: '-10px', marginLeft: '20px', marginRight: '35px'
                    }}> Arduino board <br></br> Programming</p>
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound' />
                    <div className='HomeExpRound2' />
                  </div>


                </div>
              </div>
            ) : (
              <p>Page Error</p>
            )
          }
        </div>
      </Layout>

      {/* SERVICES */}
      <h1 style={{ color: 'aqua', marginTop: '65px' }}>SERVICES</h1>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: 'rgb(237, 158, 38)', fontSize: '50px', marginLeft: '20px', marginTop: '0px' }}>What I Do!</p>
          <div className='HomeLayoutLine2'></div>
          <div style={{ margin: '50px' }}>
            <p style={{ fontSize: '25px', opacity: '0.6', marginTop: '-20px' }}>
              I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.
            </p>
          </div>
        </div>
      </Layout>


      <Layout>
        <Slider />
      </Layout>



      {/* Project */}
      <h1 style={{ color: 'aqua', marginTop: '65px' }}>PROJECTS</h1>
      <Layout>
        {/* EDU PLANET */}
        <div style={{
          backgroundColor: 'rgb(33, 33, 34)',
          marginLeft: '30px',
          marginRight: '30px',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div className='HomeExpRroBox1'></div>
          <div className='HomeExpRroBox2'>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
              <p style={{ color: 'rgb(237, 158, 38)', fontSize: '20px', }}>EDU PLANET</p>
              <p style={{ fontSize: '35px', opacity: '.6', marginTop: '-15px', marginLeft: '5px' }}>Front End Developer</p>
              <p style={{ fontSize: '18px', marginTop: '-25px' }}>Application </p>
            </div>

          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: '1'
          }}>
            <p style={{ fontSize: '35px', opacity: '.6', }}>2021</p>
          </div>
        </div>

        {/* BUY NOW */}
        <div style={{
          backgroundColor: 'rgb(33, 33, 34)',
          marginLeft: '30px',
          marginRight: '30px',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '20px',
        }}>
          <div className='HomeExpRroBox1'></div>
          <div className='HomeExpRroBox2'>
            <div>
              <p style={{ color: 'rgb(237, 158, 38)', fontSize: '20px', }}>BUY NOW</p>
              <p style={{ fontSize: '35px', opacity: '.6', marginTop: '-15px', marginLeft: '5px' }}>Front End Developer</p>
              <p style={{ fontSize: '18px', marginTop: '-25px' }}>Application </p>
            </div>


          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '150px',
            flex: '1'
          }}>
            <p style={{ fontSize: '35px', opacity: '.6', }}>2021</p>
          </div>
        </div>


        {/* SMIRA CLUB */}
        <div style={{
          backgroundColor: 'rgb(33, 33, 34)',
          marginLeft: '30px',
          marginRight: '30px',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '20px',
        }}>
          <div className='HomeExpRroBox1'></div>
          <div className='HomeExpRroBox2'>
            <div>
              <p style={{ color: 'rgb(237, 158, 38)', fontSize: '20px', }}>SMIRA CLUB FOR BOOKING HOTELS AND DEALS</p>
              <p style={{ fontSize: '35px', opacity: '.6', marginTop: '-15px', marginLeft: '5px' }}>Front End Developer</p>
              <p style={{ fontSize: '18px', marginTop: '-25px' }}>App and Web Application </p>
            </div>
            

          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '150px',
              flex:'1',
            }}>
              <p style={{ fontSize: '35px', opacity: '.6', }}>2022</p>
            </div>
        </div>


        {/* STREET LIGHT */}
        <div style={{
          backgroundColor: 'rgb(33, 33, 34)',
          marginLeft: '30px',
          marginRight: '30px',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '20px',
        }}>
          <div className='HomeExpRroBox1'></div>
          <div className='HomeExpRroBox2'>
            <div>
              <p style={{ color: 'rgb(237, 158, 38)', fontSize: '20px', }}>IOT BASED SMART STREET LIGHT</p>
              <p style={{ fontSize: '35px', opacity: '.6', marginTop: '-15px', marginLeft: '5px' }}>Front and Back End Developer</p>
              <p style={{ fontSize: '18px', marginTop: '-25px' }}>IoT and Web Application </p>
            </div>
            
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '150px',
              flex:'1',
            }}>
              <p style={{ fontSize: '35px', opacity: '.6', }}>2022</p>
            </div>

        </div>


        {/* PET DOCTOR */}
        <div style={{
          backgroundColor: 'rgb(33, 33, 34)',
          marginLeft: '30px',
          marginRight: '30px',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '20px',
        }}>
          <div className='HomeExpRroBox1'></div>
          <div className='HomeExpRroBox2'>
            <div>
              <p style={{ color: 'rgb(237, 158, 38)', fontSize: '20px', }}>PET DOCTOR</p>
              <p style={{ fontSize: '35px', opacity: '.6', marginTop: '-15px', marginLeft: '5px' }}>Front End Developer</p>
              <p style={{ fontSize: '18px', marginTop: '-25px' }}>Application </p>
            </div>
            

          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '150px',
              flex:'1',
            }}>
              <p style={{ fontSize: '35px', opacity: '.6', }}>2022</p>
            </div>
        </div>
      </Layout>


      {/* CONTACT */}
      <h1 style={{ color: 'aqua', marginTop: '65px' }}>CONTACT</h1>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: 'rgb(237, 158, 38)', fontSize: '50px', marginLeft: '20px', marginTop: '0px' }}>Get In Touch</p>
          <div className='HomeLayoutLine2'></div>
          <div style={{ margin: '50px' }}>
            <p style={{ fontSize: '25px', opacity: '0.6', marginTop: '-20px' }}>If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply you shortly.</p>
          </div>
          <Contact />
        </div>
      </Layout>

      {/* RESUME */}
      <h1 style={{ color: 'aqua', marginTop: '65px' }}>RESUME</h1>
      <Layout>
        <Resume />
      </Layout>

      {/* Footer Line */}
      <Layout>
        <div style={{ display: 'flex', }}>
          <div className='HomeDowonLine'></div>
          <div className='HomeDowonLine1'>
            <a href="/">
              <ArrowUpOutlined className='HomeDowonLineIcon' />
            </a>
          </div>
          <div className='HomeDowonLine2'></div>
        </div>
      </Layout>

    </Layout>


  )
}
