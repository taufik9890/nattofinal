import React from 'react'
import { motion } from 'framer-motion'
import { DM_Sans } from 'next/font/google'


const DmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400','500','700']
})


const ShowData = ({title,para,btn}) => {
  return (
    <>
    <motion.div
    initial={{
        x: 200,
    }}
    animate={{
        x: 0,
    }}
    transition={{
        ease: 'easeIn',
        duration: 0.4,
    }}
    className="about_right">
    <h3 className={DmSans.className}>{title}</h3>
    <p className={DmSans.className}>{para}</p>
    <motion.button className='btn2' initial={{ opacity: 1 }}
                         whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2,
                             type: "spring", stiffness : 200,
                             },
                             
                         }}>{btn}</motion.button>

    </motion.div>
    </>
  )
}

export default ShowData
