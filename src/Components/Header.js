import React from 'react';
import "./Header.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export default function Header() {
  const images = [
    "https://img.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg?w=1480&t=st=1662908824~exp=1662909424~hmac=1ad17b6a901a16f6bf6ef09042c26cb0810c2f5ab2a929baa08b38444467ea94",
    "https://images.pexels.com/photos/1013516/pexels-photo-1013516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://media.istockphoto.com/photos/straight-road-background-with-cloudy-sky-picture-id1206523388?k=20&m=1206523388&s=612x612&w=0&h=60Sh0mq_ilIEHz3HUQgOVHhZB6dISVgYkas6ruCEWI4=",
    "https://img.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111356.jpg?w=1480&t=st=1662908731~exp=1662909331~hmac=d7387aad7e5ec6ca9c6f648afeb050bd28803793f9d3d54d8cdc0d1b600af841",
  ];
  return (
    <div>
      <div>
      <Slide>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
              <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[3]})` }}>
            <p className='HomeStyleP'>Smart Street Lighting System </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
