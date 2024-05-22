import React, { Fragment } from "react";
import { FaBalanceScale } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { AiFillGolden } from "react-icons/ai";
import { FaPodcast } from "react-icons/fa";
import { PiCubeTransparentThin } from "react-icons/pi";
import { HiMiniArrowPath } from "react-icons/hi2";
import styles from "./who.module.css";

const Who = () => {
  return (
    <Fragment>
      <div className={styles.Bigwho}>
        <div  className={styles.who_are_we}>
          <h1 data-aos="fade-right" className={styles.h1}>من نحن</h1>
          <p data-aos="fade-left" className={styles.p}>
            شركة حلول النزاع للمحاماة والاستشارات القانونية - كيان مهني مرخص -
            443574 - تتعامل بشكل فهاي وفعال مع عدد من الجهات العدلية والقضائية
            والقانونية المحلية والدولية. وتضم حلول النزاع فريق قانوني من
            المحامين المرخصين ذوي الخبرة والكفاءة، كما تقدم خدمات المحاماة
            والاستشارات القانونية عن الشركات والأفراد وتمثيلهم قانونيا
          </p>
        </div>
        <div className={styles.vision}>
          <h1 data-aos="fade-right" className={styles.h1}>الرؤية</h1>
          <p data-aos="fade-left" className={styles.p}>
            نطمح ان نكون شركة قانونية رائدة عالميا في تقديم خدمات المحاماة
            والاستشارات القانونية بأعلي مستوي من الجودة والمهنية.
          </p>
        </div>
        <div className={styles.princable}>
          <div className={styles.title}>
            <h1 data-aos="fade-right" className={styles.h1}>قيمنا </h1>
          </div>
          <div data-aos="fade-up-left" className={styles.values}>
            <p className={styles.p}>
              <AiFillGolden className={styles.icon} />
              التفاني
            </p>
            <p className={styles.p}>
              <FaPodcast className={styles.icon} />
              المصدقية
            </p>
            <p className={styles.p}>
              <FaHandshake className={styles.icon} />
              الثقة
            </p>
            <p className={styles.p}>
              <HiMiniArrowPath className={styles.icon} />
              المدونة
            </p>
            <p className={styles.p}>
              <PiCubeTransparentThin className={styles.icon} />
              الامانة
            </p>
            <p className={styles.p}>
              <FaHandshake className={styles.icon} />
              الاحترام
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className={styles.goals}>
          <h1 className={styles.h1}>الأهداف</h1>
          <div className={styles.goal}>
            <div className={styles.div}>
              <h2 className={styles.h2}>
                <ImHammer2 className={styles.icon} />
              </h2>
              <p className={styles.p}>
                سهولة الحصول علي الخدمات القانونية بمهنيةعالية
              </p>
            </div>
            <div className={styles.div}>
              <h2 className={styles.h2}>
                <FaBalanceScale className={styles.icon} />
              </h2>

              <p className={styles.p}>
                المساهمة في نهضة قطاع المحاماةوالاستشارات القانونية
              </p>
            </div>
            <div className={styles.div}>
              <h2 className={styles.h2}>
                <FaUserFriends className={styles.icon} />
              </h2>
              <p className={styles.p}> تحقيق تأثير ايجابي علي مجتمعنا</p>
            </div>
            <div className={styles.div}>
              <h2 className={styles.h2}>
                <FaUser className={styles.icon} />
              </h2>
              <p className={styles.p}>
                الحفاظ علي مصالح العملاء وضمان االحق الشرعي والنظاني لهم
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Who;
