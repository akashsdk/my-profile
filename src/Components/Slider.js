import React from 'react';
import "./Slider.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export default function Slider() {

    const images = [
        "https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1380&t=st=1664989250~exp=1664989850~hmac=41fe6973912a697fa6ffbc5e92c0a728351624e7ad0aeae9ca0ff849775f2506",
        "https://img.freepik.com/free-vector/gradient-luxury-background_23-2148999255.jpg?w=1480&t=st=1664989369~exp=1664989969~hmac=bf6b20ae4e07fe8ef68874c1d134bea5de45ab7a2f4bc0fb16999efb78cfbad6",
        "https://images.pexels.com/photos/1013516/pexels-photo-1013516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://media.istockphoto.com/photos/straight-road-background-with-cloudy-sky-picture-id1206523388?k=20&m=1206523388&s=612x612&w=0&h=60Sh0mq_ilIEHz3HUQgOVHhZB6dISVgYkas6ruCEWI4="
    ];


    return (
        <div className='SliderBody'>
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <p className='SliderStyleP'>1</p>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <p className='SliderStyleP'>2</p>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <p className='SliderStyleP'>3 </p>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                        <p className='SliderStyleP'>4</p>
                    </div>
                </div>
            </Slide>
        </div>
    )
}
