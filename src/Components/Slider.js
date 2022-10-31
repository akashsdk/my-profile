import React from 'react';
import "./Slider.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export default function Slider() {

    const images = [
        "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        "https://images.unsplash.com/photo-1455467231927-8b60ed4d364d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1599799394212-71860043b6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
        "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=824&q=80",
        "https://images.unsplash.com/photo-1498962342534-ee08a0bb1d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    ];


    return (
        <div className='SliderBody'>
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <p className='SliderStyleP3'>"I to die, And you to live. Which is better? God only knows."
                            <p className='SliderStyleP2'> Socrates</p></p>

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <p className='SliderStyleP'>"You only live once, but if you do it right, once is enough."
                            <p className='SliderStyleP2'> Mae West</p></p>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <p className='SliderStyleP3'>"Everything negative - pressure, challenges - is all an opportunity for me to rise."
                            <p className='SliderStyleP2'> Kobe Bryant</p></p>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                        <p className='SliderStyleP'>"Life is like a coin. You can spend it any way you wish, but you only spend it once."
                            <p className='SliderStyleP2'> Lillian Dickson</p></p>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                        <p className='SliderStyleP3'>"In three words I can sum up everything I've learned about life: It goes on."
                            <p className='SliderStyleP2'> Robert Frost</p></p>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                        <p className='SliderStyleP'>“Keep smiling, because life is a beautiful thing and there’s so much to smile about.”
                            <p className='SliderStyleP2'> Marilyn Monroe</p></p>
                    </div>
                </div>
            </Slide>
        </div>
    )
}
