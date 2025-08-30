'use client'
import React from 'react'
import { DM_Sans } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Behance from '@/svg/Behance'
import Dribble from '@/svg/Dribble'
import Instagram2 from '@/svg/Instagram2'
const DmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400','500','700']
})
const OpenSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400','500','700']
})

const BannerLeft = () => {
  return (
    <>
    <div className="banner_text">
        <h1 className={DmSans.className}><span>Creative</span> 
        <span>Design and Work</span> 
        <span>Solution</span></h1>
        <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <div className="banner_button">
            <motion.button c initial={{ opacity: 1 }}
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.2,
        type: "spring", stiffness : 200,
     },
  }}  
  className={OpenSans.className + ' ' + 'btn1'}>Say Hello</motion.button>
            <Link className={DmSans.className} href='/'>My Work <BsArrowUpRight/></Link>
        </div>
        <div className="banner_social_icons d-flex gap-5 align-items-center">
            <span className={DmSans.className}>Follow me on</span>
            <div className="banner_icons d-flex gap-3 ">
            <Link href='/'><Behance/></Link>
            <Link href='/'><Dribble/></Link>
            <Link href='/'><Instagram2/></Link>
            
            

            </div>
        </div>
    </div>
    </>
  )
}

export default BannerLeft
