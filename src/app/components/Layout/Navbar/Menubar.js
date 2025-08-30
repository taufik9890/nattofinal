"use client";
import Menudata from '@/data/Menudata';
import Logo from '@/svg/Logo';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {DM_Sans} from 'next/font/google'
import { motion } from 'framer-motion';


const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: '500'
})

export default function Menubar() {


  // scroll korar jonno kichu ekta change hobe mane browser load howar pore change hobe. Ar sheta hocche useEffect 
  // toh ekhane ekta state nibo jekhane useState er madhome true hoile eta dekhaba ar false hoile onno ta dekhaba 
  // windows hocche shob kichur parents bola jay. er bhitore shob ee pawa jabe ekta computer er 
  // ar scrollY hocche ekta website e koto tuk height scroll hocche sheta dekhabe
  // toh condition e thakbe window.scrollY > 100 mane 100 er theke jodi beshi hoy tahole setShownavbar ke true korbo. otherwise etake false dhorbo 
  // ebar window te addEventListener diye dibo else er pro. jekhane scroll thakbe shobar agey er pore function handleScroll diye dibo 
  // tarpor Navbar e className shownavbar jodi true hoye thake tahole navbar class er shathe stickynavar add korbo ar nahole alada kore dibe ar shudhe navbar tbake
  const[shownavbar, setShownavbar]=  useState(false)

useEffect(()=>{
  // console.log(window.scrollY);
  const handleScroll = ()=>{
    if(window.scrollY >70){
      setShownavbar(true)
    }

    else{
      setShownavbar(false)
    }

  }

window.addEventListener('scroll', handleScroll)

}, [])



  return (
    <>
      <Navbar expand="lg" className={shownavbar? 'navbar stickynav': 'navbar'} >
      <Container >
        <Link href="#"> <Logo/> </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {Menudata?.map((menu, i) => (
    <Link 
      key={menu.id || i}   
      className={DmSans.className + ' mx-3'} 
      href={menu.url}
    >
      {menu.title}
    </Link>
  ))}
          </Nav>
            <motion.button initial={{ opacity: 1 }}
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 ,
    type: 'spring', stiffness: 200
    },
  }} className={DmSans.className + ' ' + 'btn1'} >Contact Now</motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </>
  )
}
