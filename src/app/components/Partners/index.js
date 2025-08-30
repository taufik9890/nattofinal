import React from 'react'
import { DM_Sans } from 'next/font/google'
import Brand1 from '@/svg/Brand1'
import Brand2 from '@/svg/Brand2'
import Brand3 from '@/svg/Brand3'
import Brand4 from '@/svg/Brand4'

const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const Partners = () => {
  return (
    <div className="partner">

    <div className='container'>
      <div className="row">
        <div className="col-lg-5 m-auto text-center">
          <div className="partners_header">
            <h2 className={DmSans.className}>Reputed Partners</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="partner_items">
            <Brand1/>
            <h5 className={DmSans.className}>Happy Mart</h5>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="partner_items">
            <Brand2/>
            <h5 className={DmSans.className}>Lori Cracker</h5>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="partner_items">
            <Brand3/>
            <h5 className={DmSans.className}>Emad Fashion</h5>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="partner_items">
            <Brand4/>
            <h5 className={DmSans.className}>Docco Semims</h5>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Partners
