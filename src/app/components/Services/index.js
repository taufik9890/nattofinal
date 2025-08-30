'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { DM_Sans } from 'next/font/google'
import Device1 from '@/svg/device1'

const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const Services = () => {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col-lg-6">
          <div className="service_left">
            <h4 className={DmSans.className}>I <span>Run</span>  Agency <span>Smartly</span> With
              My <span>Team</span> Member.</h4>
              <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
              <motion.button initial={{
                opacity: 1,
              }} 
              whileHover={{
                scale: 1.05
              }} 
              transition={{
                duration: 0.3,
                ease: 'easeIn',
                type: 'spring'
              }}
              className={DmSans.className + ' ' + 'btn1'}>
                Say Hello!
              </motion.button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service_right">
            <div className="service_item">
              <div className="service_logo">
                <Device1/>
              </div>
              <div className="service_txt">
                <h4 className={DmSans.className}>Web Development</h4>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
              </div>
            </div>
            <div className="service_item">
              <div className="service_logo">
                <Device1/>
              </div>
              <div className="service_txt">
                <h4 className={DmSans.className}>Product Design & Development</h4>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
              </div>
            </div>
            <div className="service_item">
              <div className="service_logo">
                <Device1/>
              </div>
              <div className="service_txt">
                <h4 className={DmSans.className}>Graphic Design</h4>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
