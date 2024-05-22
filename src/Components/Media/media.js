import React, { Fragment } from 'react'
import styles from './media.module.css'
import Mediaa from '../Imgaes/smart.png'
import Mediab from '../Imgaes/Screenshot 2024-05-19 160104.png'
import Mediac from '../Imgaes/Screenshot 2024-05-19 160152.png'


const media = () => {
  return (
    <Fragment>
        <div className={styles.main}>
            
        <div data-aos="fade-right" className={styles.mediaHeader}>
            <h1> المركز الاعلامي</h1>
        </div>
        <div data-aos="fade-left" className={styles.media}>
            <div className={styles.mediaImage}>
                <img src={Mediaa} alt="media" />
            </div>
            <div className={styles.mediaImage}>
                <img src={Mediac} alt="media" />
            </div>
            <div   className={styles.mediaImage}>
                <img  src={Mediab} alt="media" id={styles.special}  />
            </div>
        </div>
      
        </div>
    </Fragment>
  )
}

export default media
