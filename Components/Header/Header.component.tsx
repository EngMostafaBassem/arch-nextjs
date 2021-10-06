import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
const Header=()=>{
    return(
        <div className={styles.header_wrapper}>      
          <Image src="/images/bg.jpg" className={styles.header_img} layout="fill"/>        
           <div className={styles.header_content}>
               <h1>Architecture & Interior Design</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <button>Discover Now</button>
           </div>
         
        </div>
    )
}
export default Header