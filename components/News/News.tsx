import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import NewsCard from './NewsCard'


const News = () => {
  return (
    <div className='pt-16 pb-16'>
        <SectionHeading heading='Exiting Travel News for You'/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-32 items-center mt-20'>
           <div>
              <NewsCard
                image='/images/n1.jpg' 
                title='Top 10 place to visit in Australia'
                date='15 November 2024'
              />
           </div>
           <div>
              <NewsCard 
                image='/images/n2.jpg' 
                title='Top 10 place to visit in Bangladesh'
                date='25 November 2024'
              />
           </div>
           <div>
              <NewsCard 
                image='/images/n3.jpg' 
                title='Top 10 place to visit in Pakistan'
                date='12 November 2024'
              />
           </div>
           <div>
              <NewsCard 
                image='/images/n4.jpg' 
                title='Top 10 place to visit in New Zealand'
                date='5 November 2024'
              />
           </div>
        </div>
    </div>
  )
}

export default News
