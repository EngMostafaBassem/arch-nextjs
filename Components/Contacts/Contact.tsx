import React from 'react'
import styles from './Contact.module.css'
const Contact:React.FC=()=>{
 return(
  <div className={styles.contact_wrapper}>
   <div className={styles.form_wrapper}>
       <form  className={styles.form}>
       <h2 className={styles.form_title}>Contact</h2>
         <div className={styles.form_control}>
           
             <input type="text" required/>
             <label>FULL NAME</label>
         </div>
         <div className={styles.form_control}>
           
             <input type="email" required/>
             <label>EMAIL</label>
         </div>
         <div className={styles.form_control}>
            
             <textarea></textarea> 
             <label>MESSAGE</label>
         </div>
         <button className={styles.form_btn}>SUBMIT</button>
       </form>
    </div>
  </div>
 )
}
export default Contact