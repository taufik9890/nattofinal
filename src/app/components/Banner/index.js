'use client'
import React, { useState } from 'react'
import BannerLeft from './BannerLeft'
import Image from 'next/image'
// import BannerRight from './BannerRight'
import BannerImg from '../../../images/banner.webp'
import { motion } from 'framer-motion'


  // component er bhitore component jodi dei tahole eta kora lagbe 
  // Tarpor useState shob shomoy child component e dite hoy. Er pore etar bahire chaileo render korte pari.
  // Kintu ebhabe ek component er bhitore arek component kokhono render korte hoy na. onno component ke call korte pari jemon (BannerLeft). Kintu ekhane ebhabe component render kora wrong way  
// const Demo = ({count}) => {
//   return(
//     <>
//     <h1>demo {count}</h1>
//     </>
//   )
// }



const Banner = () => {
  // const [count, setCount] = useState(1)


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

  // browser er ekta error dey width height jodi na dei


  

  return (

    <>
    <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} transition={{staggerChildren: 0.2, duration: 0.3, ease:'easeInOut'}} variants={animation} className="Banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner_left_text">
            <BannerLeft/>
            {/* <Demo count={count}/> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner_img">
            <Image src={BannerImg} width={600} height={500} loading='lazy' alt='BannerImg' />

            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Banner
