'use client';

import React, {useEffect} from 'react'
import Hero from '../Hero/Hero'
import Destination from '../Destination/Destination'
import Hotel from '../Hotel/Hotel'
import WhyChose from '../WhyChose/WhyChose'
import Review from '../Review/Review'
import News from '../News/News'
import FormNews from '../FormNews/FormNews'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
 
  useEffect(() => {
      const initAos = async () => {
          await import('aos')
          AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease',
            offset: 100,
            anchorPlacement: 'top-bottom',
          });
      }
      initAos()
  }, [])
  

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChose />
      <Review />
      <News />
      <FormNews />
    </div>
  )
}

export default Home
