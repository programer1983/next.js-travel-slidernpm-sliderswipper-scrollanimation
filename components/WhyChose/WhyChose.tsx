import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import WhyChoseCard from './WhyChoseCard'

const WhyChose = () => {
  return (
    <div className='md:pt-16 pb-24'>
        <SectionHeading heading='Why Choose Us'/>
        <div className='w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
           <div>
              <WhyChoseCard image='/images/c1.svg'title='Best Price Quarantee'/>
           </div>
           <div>
              <WhyChoseCard image='/images/c2.svg'title='Easy and & Quick Booking'/>
           </div>
           <div>
              <WhyChoseCard image='/images/c3.svg'title='Customer Care 24/7'/>
           </div>
        </div>
    </div>
  )
}

export default WhyChose
