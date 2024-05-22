import React, { Fragment, useEffect, useState } from "react";
import styles from "./home.module.css";
import Media from "../Media/media";
import { ImHammer2 } from "react-icons/im";
import { GiHumanPyramid } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  const [Title, setTitle] = useState("");
  const [Paragraph, setParagraph] = useState("");
  const [Servivce_content, setService_Content] = useState([]);

  useEffect(() => {
    setService_Content([
      {
        title: "القضايا التجارية والمالية",
        icon: <GiHumanPyramid className={styles.icon} />,
        Paragraph:
          " الترافع في القضاياالمتعلقة بالشركات وما يحدث عنها من منازعات تجارية, في الدعاوي ,وتقديم الاستشارات القانونية التجارية",
      },
      {
        title: "قانون العمل",
        icon: <FaBriefcase className={styles.icon} />,
        Paragraph:
          " مراجعة وصياغة العقود الوظيفية للمنشأة بما يضمن للمنشأة استقرار عملها المالي ونشاطها التجاري، ومراجعة اللوائح الداخلية للشركات، وما يتعلق بالمنصات الحكومية ",
      },
      {
        title: " تسجيل العلامة التجارية",
        icon: <BiNotepad className={styles.icon} />,
        Paragraph: " اجراءات تسجيل وحماية العلامة التجارية",
        button:<Link className="link" to="/services">اقرا المزيد</Link>

      },
    ]);

    setTitle("حلول النزاع");
    setParagraph("نتميز بفريق قانوني من المحامين المرخصين ذوي الخبرة والكفاءة");
  }, []);
  return (
    <Fragment>
      <div className={styles.welcomeHome}>
        <div className={styles.content}>
          <h1>{Title}</h1>
          <p>{Paragraph}</p>
        </div>
      </div>

      <div  className={styles.media}></div>
      <Media />
      <div  className={styles.num}>
        <div className={styles.numbers}>
          <ImHammer2 data-aos="fade-left"/>
          <p data-aos="fade-right"> +600</p>
        </div>
        <p data-aos="fade-left" id={styles.case}>قضية</p>
      </div>

      <div className={styles.Service_companySenior}>
            <h1 data-aos="fade-up">خدمات الشركات</h1>
        <div data-aos="fade-left"   data-aos-duration="700" className={styles.Service_companyJunior}>
        
          {Servivce_content.map((item, index) => {
            return (
              <div key={index} className={styles.content}>
                <div className={styles.title}>
                  {item.icon}
                  <p>{item.title}</p>
                </div>
                <div className={styles.Paragraph}>
                  <p>{item.Paragraph}</p>
                </div>
                {
                  item.button &&(
                    <div className={styles.bttn}>
                      <Link to={"services"}>{item.button} </Link>  
                    </div>
                  
                  )
                }

              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
