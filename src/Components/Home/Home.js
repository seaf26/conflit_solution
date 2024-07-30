import React, { Fragment, useEffect, useState } from "react";
import styles from "./home.module.css";
import Media from "../Media/media";
import { ImHammer2 } from "react-icons/im";
import { GiHumanPyramid } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineBalance } from "react-icons/md";
import { RiFilePaperFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { Link } from "react-router-dom";
import man from "../Imgaes/human.png";
import woman from "../Imgaes/woamn.png";
import { useTranslation } from "react-i18next"; 

const Home = () => {
  const [Title, setTitle] = useState("");
  const [Paragraph, setParagraph] = useState("");
  const [Servivce_content, setService_Content] = useState([]);
  const [PersonServices, setPersonServices] = useState([]);
  const { t } = useTranslation(); 

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
        button: true,
      },
    ]);

    setTitle("حلول النزاع");
    setParagraph("نتميز بفريق قانوني من المحامين المرخصين ذوي الخبرة والكفاءة");

    setPersonServices([
      {
        title: "قضايا الجرائم المعلوماتية والتشهير",
        icon: <TfiWorld className={styles.icon} />,
        Paragraph:
          "التعامل مع الجرائم المعلوماتية مثل الاحتيال الإلكتروني، التشهير. أو انتهاك الخصوصية ",
      },
      {
        title: "قضايا التركات",
        icon: <RiFilePaperFill className={styles.icon} />,
        Paragraph:
          "التعامل مع الوصايا والإرث وتقسيمها بما يحفظ خصوصية الورثة وسرية التركة وإنهاء النزاع دون الوصول للقضاء، أو بالقسمة الإجبارية في حال الامتناع عن القسمة ويشمل ذلك تحديد أصول التركة وفحصها وتقييمها وإجراء القسمة عليها وتسليم كل وارث نصيبه",
      },
      {
        title: "القضايا الجنائية الأخرى وقضايا التعزير المرسل",
        icon: <MdOutlineBalance className={styles.icon} />,
        Paragraph:
          "المساعدة في القضايا الجنائية المتنوعة ما بين الاعتداءات إلى القضايا الأخرى التي تستوجب عقوبات تعزيرية",
        button: true,
      },
    ]);
  }, []);
  return (
    <Fragment>
      <div className={styles.welcomeHome}>
        <div className={styles.content}>
          <h1>{Title}</h1>
          <p>{Paragraph}</p>
        </div>
      </div>

      <div
        className={styles.rotatebig}
        data-aos="fade-left"
        data-aos-duration="700"
      >
        <div className={styles.rotate_big_inside}>
          <div className={styles.rotate_big_outside}>
            <h1>{t("who_we_are")}</h1>
            <p>
              شركة حلول النزاع للمحاماة والاستشارات القانونية - كيان مهني مرخص -
              443574 - تتعامل بشكل فهاي وفعال مع عدد من الجهات العدلية والقضائية
              والقانونية المحلية والدولية. وتضم حلول النزاع فريق قانوني من
              المحامين المرخصين ذوي الخبرة والكفاءة، كما تقدم خدمات المحاماة
              والاستشارات القانونية عن الشركات والأفراد وتمثيلهم قانونيا
            </p>{" "}
          </div>
          <div className={styles.rotate_big_back}>
            <h1>الرؤية</h1>
            <p>
              نطمح ان نكون شركة قانونية رائدة عالميا في تقديم خدمات المحاماة
              والاستشارات القانونية بأعلي مستوي من الجودة والمهنية
            </p>
            <Link className="link" to="/who">
              اقرا المزيد
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.Service_companySenior}>
        <h1 data-aos="fade-up">خدمات الشركات</h1>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className={styles.Service_companyJunior}
        >
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
                {item.button && (
                  <div className={styles.bttn}>
                    <Link className="link" to="/services">
                      اقرا المزيد
                    </Link>{" "}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.num}>
        <div className={styles.numbers}>
          <ImHammer2 data-aos="fade-left" />
          <p data-aos="fade-right"> +600</p>
        </div>
        <p data-aos="fade-left" id={styles.case}>
          قضية
        </p>
      </div>
      <div className={styles.PersonService_companySenior}>
        <h1 data-aos="fade-down">خدمات الافراد</h1>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={styles.PersonService_companyJunior}
        >
          {PersonServices.map((item, index) => {
            return (
              <div key={index} className={styles.content}>
                <div className={styles.title}>
                  {item.icon}
                  <p>{item.title}</p>
                </div>
                <div className={styles.Paragraph}>
                  <p>{item.Paragraph}</p>
                </div>
                {item.button && (
                  <div className={styles.bttn}>
                    <Link className="link" to="/people">
                      اقرا المزيد
                    </Link>{" "}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.main}>
        <div data-aos="fade-down" className={styles.mainHeader}>
          <p> فريق العمل </p>
        </div>

        <div data-aos="fade-left" className={styles.team}>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src={man} alt="team" />
            </div>

            <p>فيصل بن فهد السواط </p>
            <p id={styles.special}> الرئيس التنفيذي </p>
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
            <p> بندر القحطاني </p>
            <p id={styles.special}> مدير تطوير الاعمال </p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src={woman} alt="team" />
            </div>
            <p> هند السواط </p>
            <p id={styles.special}> محامي ومستشار قانوني </p>
          </div>
        </div>
        <Link className="link" to="/team" >اقرا المزيد</Link>
      </div>

      <Media />
    </Fragment>
  );
};

export default Home;
