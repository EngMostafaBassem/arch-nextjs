import React from 'react'
import styles from './TeamCard.module.css'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
interface TeamProps{
    title:string;
    imgSrc:string;
    position:string;
    content:string;
    
}
const TeamCard:React.FC<TeamProps>=({title,imgSrc,position,content})=>{
    return(
        <Tilt>
         <div className={styles.tcard_wrapper}>
          <Image src={imgSrc}  className={styles.tcard_img} layout='fill'/>
          <div className={styles.tcard_info}>
            <h3 className={styles.tcard_title}>{title}</h3>
            <p  className={styles.tcard_position}>{position}</p>
            <p  className={styles.tcard_desc}>{content}</p>
            <a href="#" className={styles.tcard_link}>Read more</a>
         </div>     
        </div>
        </Tilt>
    )

}
export default TeamCard