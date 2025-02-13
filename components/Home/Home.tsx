import React from 'react'
import Hero from '../Hero/Hero'
import Destination from '../Destination/Destination'
import Hotel from '../Hotel/Hotel'
import WhyChose from '../WhyChose/WhyChose'
import Review from '../Review/Review'



const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChose />
      <Review />
    </div>
  )
}

export default Home
