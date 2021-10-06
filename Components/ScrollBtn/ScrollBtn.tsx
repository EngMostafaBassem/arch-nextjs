import React  from "react";
import styles from './ScrollBtn.module.css'
import ScrollToTop  from 'react-scroll-up'
const ScrollBtn=()=>{
    return(
        <ScrollToTop showUnder={160} duration={1000}>
          <div className={styles.scroll_wrapper}>
            <i className="fas fa-arrow-up"></i>
         </div>
        </ScrollToTop>
    )
}
export default ScrollBtn