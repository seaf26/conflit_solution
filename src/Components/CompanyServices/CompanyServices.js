import React, { Fragment, useEffect, useState } from "react";
import { ImHammer2 } from "react-icons/im";
import { GiHumanPyramid } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { FaBrain } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import styles from './companyser.module.css'
const CompanyServices = () => {
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
      },
      {
        title: "صياغة العقود والاتفاقيات ",
        icon: <BsNewspaper className={styles.icon} />,
        Paragraph:
          "صياغة واعداد الاتفاقيات بين الافراد والشركات ومراجعتها بشكل قانوني يجعلها وثيقة آمنة وقانونية لجميع الاطراف والجهات",
      },
      {
        title: "الاستثمار الاجنبي",
        icon: <AiOutlineStock className={styles.icon} />,
        Paragraph:"يتناول قوانين ولوائح إدارة الاستثمارات الأجنبية وكيفية حمايتها وضمان حقوق المستثمرين واستقطابهم"      
      },
      {
        title: "النزاعات المصرفية  ",
        icon: <BsBank className={styles.icon} />,
        Paragraph:"حل الخلافات بين المؤسسات المصرفية وعملائها أو بين المؤسسات المصرفية نفسها"
      },
      {
        title: "القضايا الضريبية",
        icon: <GiWallet className={styles.icon} />,
        Paragraph:"حل كافة المنازعات الضريبة والقواعد القضائية والقانونية ذات الصلة في ظل أحكام نظام ضريبة القيمة المضافة والأنظمة الضريبية المختلفة"
      },
      {
        title: "الملكية الفكرية",
        icon: <FaBrain className={styles.icon} />,
        Paragraph:"حقوق أعمال الملكية الفكرية مثل براءات الاختراع وحقوق النشر"
      },
      {
        title: "دعاوى الإفلاس",
        icon: <GiMoneyStack className={styles.icon} />,
        Paragraph:"قضايا الشركات أو الأفراد الذين لا يستطيعون دفع المستحقات التي عليهم، مراجعة الإجراءات القانونية التي يجب اتخاذها في هذه الحالات "
      },
      {
        title: "التحكيم التجاري",
        icon: <ImHammer2 className={styles.icon} />,
        Paragraph:"اتفاق الأطراف على الفصل في النزاعات التجارية التي تنشأ بينهما بدلا من المحاكم القضائية، مع حفظ السرية المطلقة للقضايا، ولا يتم الإعلان عن حيثياتها"
      }
    ]);

  }, []);

  return (
    <Fragment>
            <div className={styles.Service_companySenior}>
            <h1>خدمات الشركات</h1>
        <div className={styles.Service_companyJunior}>
        
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

              </div>
            );
          })}
        </div>
      </div>
                
      
    </Fragment>
  )
}

export default CompanyServices
