'use client'

import './page.css'
import { useRef } from 'react';
import moon1 from './images/moon1.png'
import sky from './images/stars-sky.png'
import mountains from './images/mountains.png'
import rocks from './images/rocks.png'
import Image from 'next/image';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  const ref= useRef();



  return (
    <div>
      <Parallax pages={4} 
      ref={ref}
      >        
        <ParallaxLayer 
        offset={0} 
        speed={-0.5}  
        >
            <div className='animation-layer parallax' id='sky'> </div>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0.2} 
        speed={-1} 
        >
          <div className='h2-box'>
          <h2>Welcome to my portfolio website</h2>  
          </div>
        </ParallaxLayer>


        <ParallaxLayer 
        offset={0.1} 
        speed={-0.8} 
        >
          <div className='animation-layer parallax' id='moon1'> </div>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0} 
        speed={-0.5}
        >
          
          <div className='animation-layer parallax' id='mountains'> </div>
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0.2} 
        speed={-0.5}  
        >
          <div className='animation-layer parallax' id='rocks'> </div>
        </ParallaxLayer>


      </Parallax>
      
    </div>

  )
}
