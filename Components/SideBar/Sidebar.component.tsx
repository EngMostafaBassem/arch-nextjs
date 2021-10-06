import React, { useState } from 'react'
import styles from './Sidebar.module.css'
const Sidebar:React.FC=()=>{
const [toggle,setToggle]=useState<boolean>(false)
 return(
     <>
       <div className={toggle?` ${styles.sidebar_wrapper} ${styles.toggle}`:styles.sidebar_wrapper}>    
         <ul className={styles.sidebar_list}>
           <li className={styles.sidebar_list_item}><a className={styles.sidebar_link} href="#" data-content="Home">Home</a></li>
           <li className={styles.sidebar_list_item}><a className={styles.sidebar_link} href="#" data-content="About Us">About Us</a></li>
           <li className={styles.sidebar_list_item}><a className={styles.sidebar_link} href="#" data-content="Team">Team</a></li>
           <li className={styles.sidebar_list_item}><a className={styles.sidebar_link} href="#" data-content="Pricing">Pricing</a></li>
           <li className={styles.sidebar_list_item}><a className={styles.sidebar_link} href="#" data-content="Contact">Contact</a></li>
         </ul>
         <div className={styles.sidebar_social_links}>
             <div className={styles.icon_wrapper}><i className="fab fa-facebook-f"></i></div>
             <div className={styles.icon_wrapper}><i className="fab fa-instagram"></i></div>
             <div className={styles.icon_wrapper}><i className="fab fa-twitter"></i></div>      
         </div>
     </div>
       
       <div className={styles.burger_menu} onClick={()=>setToggle(toggle=>!toggle)}>
         <div className={`${styles.line} ${styles.line1}`}></div>
         <div className={`${styles.line} ${styles.line2}`}></div>
         <div className={`${styles.line} ${styles.line3}`}></div>
      </div>
      <span className={styles.close_tip}>
          Close
       </span>
      
     </>
 )
}
export default Sidebar
