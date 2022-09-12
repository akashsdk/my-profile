import React from 'react';
import "./Slide.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slide() {
    const images = [
        "https://img.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg?w=1480&t=st=1662908824~exp=1662909424~hmac=1ad17b6a901a16f6bf6ef09042c26cb0810c2f5ab2a929baa08b38444467ea94",
        "https://img.freepik.com/free-vector/black-carbon-fiber-texture-pattern-background_1017-33436.jpg?w=1800&t=st=1662909687~exp=1662910287~hmac=9078945ff6e5f64365fdac9ffb23aa3bb0df40bda937d9b9983b96a735da6593",
        "https://img.freepik.com/free-vector/abstract-black-texture-background-hexagon_206725-413.jpg?w=1800&t=st=1662909739~exp=1662910339~hmac=29aa8c39447f10bba5b1e609c41213066e1dc97cf1729cf47977c40676741e24",
        "https://img.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111356.jpg?w=1480&t=st=1662908731~exp=1662909331~hmac=d7387aad7e5ec6ca9c6f648afeb050bd28803793f9d3d54d8cdc0d1b600af841",
      ];
  return (
    <div>
        <div>
        <Slide>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
              <p className='HomeStyleP2'>Tasnim Shahriar Akash</p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
              <p className='HomeStyleP'>Tasnim Shahriar Akash </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
              <p className='HomeStyleP2'>Tasnim Shahriar Akash </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[3]})` }}>
              <p className='HomeStyleP'>Tasnim Shahriar Akash</p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
