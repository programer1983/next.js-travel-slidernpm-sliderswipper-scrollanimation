import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import WhyChoseCard from './WhyChoseCard'

const WhyChose = () => {
  return (
    <div className='md:pt-16 pb-24'>
        <SectionHeading heading='Why Choose Us'/>
        <div className='w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
           <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
              <WhyChoseCard image='/images/c1.svg'title='Best Price Quarantee'/>
           </div>
           <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
              <WhyChoseCard image='/images/c2.svg'title='Easy and & Quick Booking'/>
           </div>
           <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
              <WhyChoseCard image='/images/c3.svg'title='Customer Care 24/7'/>
           </div>
        </div>
    </div>
  )
}

export default WhyChose
