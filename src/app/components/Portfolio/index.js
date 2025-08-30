'use client'
import React from 'react'
import leftImage from '../../../images/portfolio.webp'
import Image from 'next/image'
import { DM_Sans } from 'next/font/google'
import CountUp from 'react-countup';
import portfolioData from '@/data/PortfolioData'
import { Open_Sans } from 'next/font/google'
import { motion } from 'framer-motion'
import { AiOutlineCheck } from 'react-icons/ai';
import PortfolioCountData from '@/data/PortfolioCountData';
import { Grechen_Fuemen } from 'next/font/google'




const Dm_Sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})
const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})
const GrechenFuemen = Grechen_Fuemen({
  subsets: ['latin'],
  weight: ['400']
})

const Portfolio = () => {
  return (
    <>
    <div className="portfolio">
      
     <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="portfolio_left">
                  <div className="portfolio_img">
                    <Image src={leftImage}/>
                  </div>
                  <div className="experience">
                    <div className="experience_text">
                    <CountUp start={0} end={5} delay={0} duration={1.00}>
                  {({ countUpRef }) => (
                    <div >
                      <span className={Dm_Sans.className}  ref={countUpRef} /> <span>+</span>
                   </div>
                 )}
                </CountUp>
                    <h5 className={Dm_Sans.className}>Years</h5>
                    <p className={Dm_Sans.className}>Experience</p>

                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio_right">
                <h3 className={Dm_Sans.className}>We <span>Run</span>  Agency <span>Smartly</span> With
                  Our <span>Team</span> Member.</h3>
                  <p className={Dm_Sans.className} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                  <ul>
                    {
                      portfolioData.map((item,i)=>(
                        <li key={i}>
                          <AiOutlineCheck/>
                          <h6>{item.text}</h6>
                        </li>
                      ))
                    }
                  </ul>
                  <motion.button
                  initial={{opacity:1}}
                  whileHover={{
                    scale:1.05,
                    transition: {
                      duration:0.2,
                      type: 'spring', stiffness: 200,
                    }
                  }}
                   className='btn2'>
                    Explore More
                   </motion.button>
                   <div className="counter">
                    { 
                      PortfolioCountData.map((item,i)=>(
                        <div className="counter_item">
                          <h4 className={GrechenFuemen.className}>{item.numbers}</h4>
                          <p className={Dm_Sans.className}>{item.details}</p>

                        </div>

                      ))
                    }
                   </div>


              </div>
            </div>
        </div>
    </div>
      
    </div>
    </>
  )
}

export default Portfolio
