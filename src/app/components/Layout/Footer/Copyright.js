
import Copyrightdata from '@/data/Copyrightdata'
import Link from 'next/link'
import React from 'react'
import { Open_Sans } from 'next/font/google'

const OpenSans = Open_Sans(
  {
    subsets: ['latin'],
  }
)

const Copyright = () => {
  return (
    <div className='copyright_part'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6  mx-auto">
            <div className="copyright_list">
              <ul className='d-flex justify-content-center gap-lg-5'>
              {
                Copyrightdata?.map((data, i)=>(
                  <li>
                    <Link href={data.link} className={OpenSans.className}>{data.title}</Link>
                  </li>
                ))
              }
              </ul>
              
            </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Copyright
