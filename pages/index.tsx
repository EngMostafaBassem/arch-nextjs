import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import Contact from '../Components/Contacts/Contact'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header.component'
import ScrollBtn from '../Components/ScrollBtn/ScrollBtn'
import Sidebar from '../Components/SideBar/Sidebar.component'
import Team from '../Components/Team/Team'
import Loader from "react-loader-spinner";
import styles from './index.module.css'
const Home: NextPage = () => {
  const [loading,setLodaing]=useState<boolean>(true)
  useEffect(()=>{
   setTimeout(() => {
     setLodaing(false)
   }, 1500);
  },[])
  return ( 
   <div>
      {
         loading?
          <div className={styles.loading_wrapper}>  
            <Loader
             type="Circles"
             color="#e2b646"
             height={100}
             width={100}
             timeout={5000} //3 secs
           />
          </div>
          :
        <>
          <ScrollBtn/>
          <Sidebar/> 
          <Header/>
          <AboutUs/>
          <Team/>
          <Contact/>
          <Footer/>
        </>
      }
   </div>
  )



}

export default Home
