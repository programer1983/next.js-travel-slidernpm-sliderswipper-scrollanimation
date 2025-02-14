import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'


const FormNews = () => {
  return (
    <div className='pt-[10px] pb-[20px] md:pt-16 md:pb-16 flex flex-col items-center justify-center w-full bg-black mt-20'>
        <BsEnvelopePaper className='w-16 h-16 text-white mt-20'/>
        <h1 className='text-lg text-center  sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>
            Your Travel Journey Starts Here
        </h1>
        <p className='mt-3 text-white text-xs sm:text-sm'>Sign up and weEspos;ll send the best deals to you</p>
        <div className='w-full'>
         <input
            className='px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none'
            type="text" 
            placeholder='Email'
         />
         <button className='px-6 py-3.5 bg-blue-900 text-white hover:bg-blue-950 transition-all duration-200 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none'>
            Subscribe
         </button>
        </div>
    </div>
  )
}

export default FormNews
