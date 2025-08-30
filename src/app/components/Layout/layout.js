import React from 'react'
import Footer from './Footer/Footer'
import Menubar from './Navbar/Menubar'

export default function Layout({children}) {

  // children er kaaj hocche arek component ba file er bhitore jei tag ba  jekono kichu thake oita jodi ami component er bhitore rakhi tahole oitar children ke ai jekono jaygay use korte parbo 
  //Sass dui bhabe use kora jay. 
 
  return (

    <>

    <Menubar/>
    {children}
    <Footer/>
    </>
  )
}
