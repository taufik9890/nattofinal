'use client'
import React from 'react'
import { DM_Sans } from 'next/font/google'
import { motion } from 'framer-motion'
import AboutBottom from './AboutBottom'

const DmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400','500','700']
})

const About = () => {


    const animation ={
        hidden:{
          y:10,
          opacity: 0
        },
        visible:{
          y:0,
          opacity:1
        }
      }

  return (
    <>
    <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{staggerChildren: 0.2, duration: 0.3, ease:'easeInOut'}} variants={animation} className="about">
    <div className="container">
        <div className="row align-item-center">
            <div className="col-lg-6">
                <div className="about_header">
                     <h2 className={DmSans.className}>
                    Failure is The Power
                    that Gives <span>Success</span>
                        </h2></div>
            </div>
            <div className="col-lg-6">
                <div className="about_content">
                    <p className={DmSans.className} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                </div>
            </div>
        </div>
        <AboutBottom/>
    </div>

    </motion.div>
    </>
  )
}

export default About
