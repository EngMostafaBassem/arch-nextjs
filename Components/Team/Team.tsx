import React from 'react'
import TeamCard from '../TeamCard/TeamCard'
import styles from './Team.module.css'


const Team:React.FC=()=>{
    return(
        <div className={styles.teams_wrapper}>
            <div className={styles.teams_header}>
                <h2 className={styles.team_title}>Our Team</h2>
                <div className={styles.team_title_line}></div>
            </div>
            <div className={styles.teams_cards}>
               <TeamCard 
                 title='John Smith'
                 position='CEO'
                 content='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
                 imgSrc='/images/person-1.jpg'
                /> 
              <TeamCard 
                 title='Ann Brown'
                 position='Designer'
                 content='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
                 imgSrc='/images/person-2.jpg'
                /> 

                <TeamCard 
                 title='Mary Doe'
                 position='Architect'
                 content='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
                 imgSrc='/images/person-3.jpg'
                /> 

              
            </div>
        </div>
    )

}
export default Team