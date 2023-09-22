'use client'

import './page.css'
import { useRef } from 'react';
import moon from './images/moon.png';
import land from './images/land.png';
import cat from './images/cat.gif';
import Image from 'next/image';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  const ref= useRef();



  return (
    <div>
      
      <Parallax pages={4} ref={ref}>


        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          className='bg-moon'
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          className='bg-land'

        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center',
           }}
        >
          <Image src={cat} alt='cat with a parachute'  />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>

  )
}
