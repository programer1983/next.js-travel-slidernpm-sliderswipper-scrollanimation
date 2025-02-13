import React from 'react'
import Hero from '../Hero/Hero'
import Destination from '../Destination/Destination'
import Hotel from '../Hotel/Hotel'
import WhyChose from '../WhyChose/WhyChose'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChose />
    </div>
  )
}

export default Home
