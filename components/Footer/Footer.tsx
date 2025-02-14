import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
            <div className='footer-list'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='footer-link'>
                    About Us
                </p>
                <p className='footer-link'>
                    Careers
                </p>
                <p className='footer-link'>
                    Careers
                </p>
                <p className='footer-link'>
                    Blogs
                </p>
                <p className='footer-link'>
                    Gift Cards
                </p>
                <p className='footer-link'>
                    Magazine
                </p>
            </div>
            <div className='footer-list'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='footer-link'>
                    Contact
                </p>
                <p className='footer-link'>
                    Legal Notice
                </p>
                <p className='footer-link'>
                    Privacy Policy
                </p>
                <p className='footer-link'>
                    Terms & Conditions
                </p>
                <p className='footer-link'>
                    Sitemap
                </p>
            </div>
            <div className='footer-list'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='footer-link'>
                    Car hire
                </p>
                <p className='footer-link'>
                    Activity Finder
                </p>
                <p className='footer-link'>
                    Tour List
                </p>
                <p className='footer-link'>
                    Flight Finder
                </p>
                <p className='footer-link'>
                    Travel Agenst
                </p>
            </div>
            <div>
                <h1 className='text-lg font-bold'>Contact Us</h1>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>+000 111 222</h1>
                </div>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Email</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>example@gmail.com</h1>
                </div>
            </div>
        </div>
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright @ 2024 Webdew. All rights reserved</p>
             <div className='flex items-center space-x-4 mt-4 md:mt-0'>
               <span>Social :</span>
               <Link href='#' className='footer-social'><FaFacebook /></Link>
               <Link href='#' className='footer-social'><FaTwitter /></Link>
               <Link href='#' className='footer-social'><FaDribbble /></Link>
             </div>
        </div>
    </div>
  )
}

export default Footer
