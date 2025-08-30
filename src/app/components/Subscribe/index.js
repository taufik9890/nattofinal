import React from 'react'
import { DM_Sans } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { BsArrowRight } from 'react-icons/bs';


const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})
const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})


const Subscribe = () => {
  return (
    <>
    <div className="container">
      <div className="subscribe">
        <div className="row">
          <div className="col-lg-5">
            <div className="subscribe_left">
              <h2 className={DmSans.className}>Subscirbe to Our 
              Newsletter</h2>
              <p className={OpenSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe_right">
            <div className="subscribe_form">
              <input type="email" placeholder='Email'/>
              <button><BsArrowRight/></button>
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Subscribe
