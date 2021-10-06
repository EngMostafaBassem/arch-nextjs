import React from 'react'
import styles from './Footer.module.css'
const Footer=()=>{
    return(
        <div className={styles.footer_wrapper}>
          <div className={styles.copyrights}>
             <p>Copyright © 2021, - All Rights Reserved</p>
          </div>
          <div className={styles.social_links}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
    )

}
export default Footer