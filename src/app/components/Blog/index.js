'use client'
import React from 'react'
import Slider from 'react-slick'
import BlogData from '@/data/BlogData'
import Link from 'next/link'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
import { DM_Sans } from 'next/font/google'

const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const Blog = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
      };

 

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 m-auto text-center">
                <div className="blog_header">
                    <h3 className={DmSans.className}>Latest Blog</h3>
                    <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                </div>
            </div>
        </div>
        <div className="blogs_main">
            <Slider {...settings}>
                
                    {
                        BlogData.map((blogs)=>(
                            <>
                            <div className="blogs_item ">
                            {blogs.img}
                            <p className={DmSans.className}>{blogs.calendar}</p>
                            <h4 className={DmSans.className}>{blogs.header}</h4>
                            <Link className={DmSans.className} href='/'>{blogs.link}</Link>

                            </div>
                            </>
                        ))
                    }
            </Slider>
            {/* <div className="nextArrow">
                {nextArrow}
            </div> */}
        </div>
    </div>
      
    </>
  )
}

export default Blog
