import React from 'react'
import styles from './succses.module.css'
import { Fragment } from 'react'
import imageA from '../Imgaes/smart.png'
import imageB from '../Imgaes/suc.png'
import imageC from '../Imgaes/succ.png'
import imageD from '../Imgaes/succcc.png'
import imageE from '../Imgaes/succc.png'
import imageF from '../Imgaes/succccc.png'



const Succses = () => {
  return (
    <Fragment>
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>شركاء النجاح</h1>
                </div>
            <div className={styles.miniContainer}>
                <div className={styles.image}>
                    <img src={imageA} alt="imageA" />
                    <img src={imageB} alt="imageB" />
                    <img src={imageC} alt="imageC" />
                    <img src={imageD} alt="imageD" />
                    <img src={imageE} alt="imageE" />
                    <img src={imageF} alt="imageF" />
                    </div>
                </div>
            </div>  
    </Fragment>
  )
}

export default Succses
