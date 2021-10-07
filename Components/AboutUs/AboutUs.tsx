import React  from "react";
import styles from './AboutUs.module.css'
import Image from 'next/image'
const AboutUs:React.FC=()=>{
    return(
        <div className={styles.about_wrapper}>
          <div className= {styles.about_title_content}>
              <h2 className={styles.about_title}>About Us</h2>
              <div className={styles.about_title_line}></div>
          </div>
          <div className={styles.spec_wrapper}>
            <div className={styles.spec_sec}>
             <div className={styles.spec}>
               <p className={styles.spec_title}><i className="fas fa-pen-nib"></i> Interior</p>
               <p className={styles.spec_content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!</p>
             </div>
             <div className={styles.spec}>
               <p className={styles.spec_title}><i className="fa fa-paint-brush"></i> Decoration</p>
               <p className={styles.spec_content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!</p>
             </div>
           <div className={styles.spec}>
               <p className={styles.spec_title}><i className="fas fa-paint-roller"></i> Exterior</p>
               <p className={styles.spec_content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!</p>
           </div>
             </div> 
            <div className={styles.spec_sec}>
               <Image src='/images/house.png' width='800px' height='500px' className={styles.spec_pic} alt="house-image"/>
            </div>
            <div className={styles.spec_sec}>
             <div className={styles.spec}>
               <p className={styles.spec_title}><i className="fas fa-ruler-combined"></i> Planning</p>
               <p className={styles.spec_content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!</p>
             </div>
             <div className={styles.spec}>
                <p className={styles.spec_title}><i className="fas fa-pencil-alt"></i> Design</p>
                <p className={styles.spec_content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!</p>
           </div>
            <div className={styles.spec}>
               <p className={styles.spec_title}><i className="far fa-building"></i> Execution</p>
               <p className={styles.spec_content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!</p>
           </div>
           
            </div>
          </div>
          <div></div>
        </div>
    )
}
export default AboutUs