import React, { Fragment } from 'react'
import styles from './team.module.css'
import man from '../Imgaes/human.png'
import woman from '../Imgaes/woamn.png'

const Team = () => {
  return (
    <Fragment>
        <div className={styles.main}>
        <div className={styles.mainHeader}>
            <p> فريق العمل </p>
            <p>  نعتز بفريق مهني يعد من اهم هناصر النجاح لدي حلول النزاع</p>
        </div>

        <div className={styles.ceo}>
            <div className={styles.ceoImage}>
                <img src={man} alt="ceo" />
            </div>
            <div className={styles.ceoText}>
                <p> فيصل بن فهد السواط </p>
                <p id={styles.special}>  الرئيس التنفيذي </p>
            </div>
        </div>
        <div className={styles.team}>
            <div className={styles.teamMember}>
                <div className={styles.teamMemberImage}>
                <img src={woman} alt="team" />
                </div>
                <p> هند السواط </p>
                <p id={styles.special}> محامي ومستشار قانوني  </p>
                </div>
                <div className={styles.teamMember}>
                <div className={styles.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> تركي السواط </p>
                <p id={styles.special}> محامي ومستشار قانوني </p>
                </div>
                <div className={styles.teamMember}>
                <div className={styles.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> ايهاب محمد </p>
                <p id={styles.special}> مستشار قانوني  </p>
                </div>
                <div className={styles.teamMember}>
                <div className={styles.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> محمد ابو مدين </p>
                <p id={styles.special}> مستشار قانوني  </p>
                </div>
                <div className={styles.teamMember}>
                <div className={styles.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> بندر القحطاني </p>
                <p id={styles.special}> مدير تطوير الاعمال </p>
                </div>
                <div className={styles.teamMember}>
                <div className={styles.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> يزيد السليس </p>
                <p id={styles.special}> مدير العلاقات العامة </p>
                </div>
             </div>
             


            </div>

      
    </Fragment>
  )
}

export default Team
