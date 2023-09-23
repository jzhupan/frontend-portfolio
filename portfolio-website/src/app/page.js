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
      <Parallax pages={4} ref={ref} className='animation'
      >
        <ParallaxLayer offset={0} speed={1} factor={2} style={{
          backgroundImage: `url(${moon1})`,
          backgroundSize: 'cover'
        }}>
          <div className='animation-layer parallax' id='moon1'> </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={4} >
          <div className='animation-layer parallax' id='rocks'> </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} factor={2} >
          <div className='animation-layer parallax' id='mountains'> </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1} factor={4} >
          <div className='animation-layer parallax' id='sky'> </div>
        </ParallaxLayer>
      </Parallax>
      
    </div>

  )
}
