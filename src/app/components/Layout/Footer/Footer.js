'use client'
import Logo from '@/svg/Logo'
import React from 'react'
import { Open_Sans } from 'next/font/google'
import { ResourceData, ServiceData } from './FooterData'
import Link from 'next/link'
import { DM_Sans } from 'next/font/google'
import { FiSend } from 'react-icons/fi';
import Facebook from '@/svg/Facebook'
import Instagram from '@/svg/Instagram'
import Twitter from '@/svg/Twitter'
import Pinterest from '@/svg/Pinterest'
import { motion } from 'framer-motion'
import Copyright from './Copyright'

// ServiceData er ekhane 2nd bracket ashar karon hocche ei data ke default export kora hoy nai  
// svg te kokhono problem face korle svg file er bhitore unique id diye dibo. Jeta file er naam hobe oitai use korbo
// 'use client' ta tokhon ee use korbo jokhon 3rd party api/package use korbo 

const OpenSans = Open_Sans({
  subsets: ['latin'],

})
const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: '500'
})

export default function Footer() {
  return (
    <>
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_one">
          <Logo/>
          <p className={OpenSans}>There are many variations of passages of available, but the majority have suffered.</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
          <div className="footer_two">
            <h3 className={DmSans}>Services</h3>
            {
              ServiceData.map((data, i)=>(
                // console.log('data', data)
                <Link className={DmSans} href={data.link}>{data.title}</Link>

              ))
            }  
          </div>
          
          </div>
          <div className="col-lg-3 col-6">

          <div className="footer_two">
            <h3 className={DmSans}>Resourses</h3>
            {
              ResourceData.map((data, i)=>(
                // console.log('data', data)
                <Link className={DmSans} href={data.link}>{data.title}</Link>

              ))
            }  
          </div>
          </div>
          <div className="col-lg-3"> 

          <div className="footer_four">
            <h3 className={DmSans}>Newsletter</h3>
             <p className={DmSans}>Subscribe for our upcoming latest address and resources</p>
             <div className="newsletter_form">
              <input type="email" placeholder='email'/>
              <button ><FiSend/></button>
             </div>
             <div className="social_icons d-flex gap-3 ">
              <motion.div initial={{ opacity: 1 }}
                      whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.2 },
                      }} className="icon_shape">
                  <Facebook/>
              </motion.div>
              <motion.div initial={{ opacity: 1 }}
                     whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.2 },
                      }}
              className="icon_shape">
                  <Instagram/>
              </motion.div>
              <motion.div initial={{ opacity: 1 }}
                     whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.2 },
                      }}
              className="icon_shape">
                  <Twitter/>
              </motion.div>
              <motion.div initial={{ opacity: 1 }}
                     whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.2 },
                      }}
              className="icon_shape">
                  <Pinterest/>
              </motion.div>
             </div>
          </div>
          </div>
        </div>
      </div>
      
    </div>
    <Copyright/>
    </>

  )
}
