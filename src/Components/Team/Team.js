import React, { Fragment } from 'react'
import stylesTeam from './team.module.css'
import man from '../Imgaes/human.png'
import woman from '../Imgaes/woamn.png'

const Team = () => {
  return (
    <Fragment>
        <div className={stylesTeam.main}>
        <div data-aos="fade-down" className={stylesTeam.mainHeader}>
            <p> فريق العمل </p>
            <p>  نعتز بفريق مهني يعد من اهم هناصر النجاح لدي حلول النزاع</p>
        </div>

        <div data-aos="fade-right" className={stylesTeam.ceo}>
            <div className={stylesTeam.ceoImage}>
                <img src={man} alt="ceo" />
            </div>
            <div className={stylesTeam.ceoText}>
                <p> فيصل بن فهد السواط </p>
                <p id={stylesTeam.special}>  الرئيس التنفيذي </p>
            </div>
        </div>
        <div data-aos="fade-left" className={stylesTeam.team}>
            <div className={stylesTeam.teamMember}>
                <div className={stylesTeam.teamMemberImage}>
                <img src={woman} alt="team" />
                </div>
                <p> هند السواط </p>
                <p id={stylesTeam.special}> محامي ومستشار قانوني  </p>
                </div>
                <div className={stylesTeam.teamMember}>
                <div className={stylesTeam.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> تركي السواط </p>
                <p id={stylesTeam.special}> محامي ومستشار قانوني </p>
                </div>
                <div className={stylesTeam.teamMember}>
                <div className={stylesTeam.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> ايهاب محمد </p>
                <p id={stylesTeam.special}> مستشار قانوني  </p>
                </div>
                <div className={stylesTeam.teamMember}>
                <div className={stylesTeam.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> محمد ابو مدين </p>
                <p id={stylesTeam.special}> مستشار قانوني  </p>
                </div>
                <div className={stylesTeam.teamMember}>
                <div className={stylesTeam.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> بندر القحطاني </p>
                <p id={stylesTeam.special}> مدير تطوير الاعمال </p>
                </div>
                <div className={stylesTeam.teamMember}>
                <div className={stylesTeam.teamMemberImage}>
                <img src={man} alt="team" />
                </div>
                <p> يزيد السليس </p>
                <p id={stylesTeam.special}> مدير العلاقات العامة </p>
                </div>
             </div>
             


            </div>

      
    </Fragment>
  )
}

export default Team
