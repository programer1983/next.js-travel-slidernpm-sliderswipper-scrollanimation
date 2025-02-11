import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'


const Destination = () => {
  return (
    <div className='pt-20 pb-20 '>
        <SectionHeading heading='Exploring Popular Destination'/>
        <div className='w-[80%] mt-14 mx-auto'>
            <DestinationSlider />
        </div>
    </div>
  )
}

export default Destination

