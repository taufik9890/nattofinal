
import { AboutData } from '@/data/AboutData'
import React from 'react'
import { DM_Sans } from 'next/font/google'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ShowData from './ShowData'

const DmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400','500','700']
})



// jehitu click functionalityr kaaj korchi tahole state neya lagbe 
// useState e 0 deyar karon hocche ekekbar ekek id deya thakbe tai id 0 ta first e show kora thakbe 



const AboutBottom = () => {
    
    const [active, setActive] = useState(0)
    const handleActive =(i)=>{
        console.log(i);
    setActive(i)
    }


  return ( 
    <>
    <div className='about_item'>
        <div className="row">
            <div className="col-lg-6">
                <div className="row">
                    {
                        AboutData.map((item, i)=>(
                            <>
                            <motion.div initial={{ opacity: 1 }}
                             whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2,
                                 type: "spring", stiffness : 200,
                                 },
                             }} className="col-sm-6"
                               onClick={()=>handleActive(i)}
                               >
                                <div className="about_box">
                                <h4 className={DmSans.className}>{item.heading}</h4>
                                <p>{item.paragraph}</p>
                                </div>
                            </motion.div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="col-lg-5 offset-lg-1">


               {/* {
                active == 0  ?  <div className="about_right">
                <h3 className={DmSans.className}>Get So Many Awards In 5 years</h3>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                <motion.button initial={{ opacity: 1 }}
                         whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2,
                             type: "spring", stiffness : 200,
                             },
                         }}>Visit Now</motion.button>
            </div> : 'nai'
               } */}
               {
                active == 0 && <ShowData title='Get So Many Awards In 5 years' para='There are many variations of passages of Lorem Ipsum available, but the majority.' btn='Visit Now'/>
               }
               {
                active == 1 && <ShowData title='Get So Many Awards In 6 years' para='There are many variations of passages of Lorem Ipsum available, but the majority.' btn='Visit Now'/>
               }
               {
                active == 2 && <ShowData title='Get So Many Awards In 7 years' para='There are many variations of passages of Lorem Ipsum available, but the majority.' btn='Visit Now'/>
               }
               {
                active == 3 && <ShowData title='Get So Many Awards In 8 years' para='There are many variations of passages of Lorem Ipsum available, but the majority.' btn='Visit Now'/>
               }
            </div>
        </div>
    </div>
    
    </>
  )
}

export default AboutBottom
