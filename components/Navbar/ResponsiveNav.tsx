'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav]  = useState(false)

  const handNowShow = () => setShowNav(true)
  const handNowClose = () => setShowNav(false)
  
  


  return (
    <div>
        <Nav openNav={handNowShow}/>
        <MobileNav showNav={showNav} closeNav={handNowClose}/>
    </div>
  )
}

export default ResponsiveNav