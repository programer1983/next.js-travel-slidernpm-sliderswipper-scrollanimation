import Image from 'next/image'
import React from 'react'

type Props = {
  image: string,
  title: string,
}

const WhyChoseCard = ({image, title}: Props) => {
  return (
    <div>
        <Image 
          src={image}
          alt="image"
          width={70}
          height={70}
          className='mx-auto'
        />
        <h1 className='mt-6 text-center text-gray-600y font-medium text-lg'>{title}</h1>
        <p className='text-center mt-2 text-sm font-medium text-gray-700'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, quo.
        </p>
    </div>
  )
}

export default WhyChoseCard