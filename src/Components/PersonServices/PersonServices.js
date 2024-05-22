import React, { Fragment, useEffect, useState } from 'react'
import styles from './personservices.module.css'
import { ImBriefcase } from "react-icons/im";
import { GiStabbedNote } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";



const PersonServices = () => {
    const [Servivce_content, setService_Content] = useState([]);
    useEffect(()=>{
        setService_Content([
            {
                title:"قضايا الفساد المالي والإداري",
                icon:<ImBriefcase className={styles.icon}/>,
                Paragraph:"من خلال توكيل محام مرخص يكفل نظام الإجراءات الجزائية الحق للشخص الدفاع عن نفسه أثناء الاتهام باستغلال النفوذ الوظيفي. أو اختلاس وتبديد المال العام في ظل أحكام نظام مكافحة الرشوة ونظام مكافحة جرائم التزوير والأنظمة الجزائية الأخرى"
            },
            {
                title:"قضايا المخدرات والمؤثرات العقلية",
                icon:<GiStabbedNote className={styles.icon}/>,
                Paragraph:"من خلال توكيل محام مرخص يكفل نظام الإجراءات الجزائية الحق القانوني للأفراد الذين يتهمون بحيازة أو ترويج المخدرات وتهريبها الدفاع عن أنفسهم في ظل أحكام نظام مكافحة المخدرات والمؤثرات العقلية والأنظمة الجزائية الأخرى ، والقواعد القضائية والقانونية ذات الصلة"
            },
            {
                title:"قضايا الجرائم المعلوماتية والتشهير",
                icon:<TfiWorld className={styles.icon}/>,
                Paragraph:"التعامل مع الجرائم المعلوماتية مثل الاحتيال الإلكتروني، التشهير. أو انتهاك الخصوصية "
            },
            {
                title:"القضايا الجنائية الأخرى وقضايا التعزير المرسل",
                icon:<ImBriefcase className={styles.icon}/>,
                Paragraph:"المساعدة في القضايا الجنائية المتنوعة ما بين الاعتداءات إلى القضايا الأخرى التي تستوجب عقوبات تعزيرية"
            },
            {
                title:"قضايا التركات",
                icon:<ImBriefcase className={styles.icon}/>,
                Paragraph:"التعامل مع الوصايا والإرث وتقسيمها بما يحفظ خصوصية الورثة وسرية التركة وإنهاء النزاع دون الوصول للقضاء، أو بالقسمة الإجبارية في حال الامتناع عن القسمة ويشمل ذلك تحديد أصول التركة وفحصها وتقييمها وإجراء القسمة عليها وتسليم كل وارث نصيبه"
            },
            {
                title:"القضايا العقارية",
                icon:<ImBriefcase className={styles.icon}/>,
                Paragraph:"تقديم الاستشارات فيما يتعلق بتأجير وشراء  وبيع العقارات، والتعامل مع النزاعات المتعلقة بها"
            },
            {
                title:"قضايا الأحوال الشخصية",
                icon:<ImBriefcase className={styles.icon}/>,
                Paragraph:"التعامل مع قضايا ودعاوى الأحوال الشخصية الزواج، الطلاق، الخلع، الحضانة، النفقة، وغيرها من القضايا التي تتعلق بالأحوال الشخصية."
            },
            {
                title:"القضايا الإدارية",
                icon:<ImBriefcase className={styles.icon}/>,
                Paragraph:"التعامل مع القضايا التي تتعلق بالقرارات الإدارية للعاملين لدى الجهات العامة والاعتراض عليها في | ظل نظام المرافعات أمام ديوان المظالم والأنظمة الإدارية الأخرى، سواء تتعلق بقرارات حكومية أو قضايا مع جهات إدارية أخرى"
            },
            {
                title:"نظام الشركات",
                icon:<ImBriefcase className={styles.icon}/>,
                Paragraph:"تقديم الاستشارات القانونية للأفراد فيما يخص تأسيس الشركات وإدارتها، أو حل النزاعات التي قد تنشأ بين الشركاء"

            }


        ])
    },[])
    

  return (
    <Fragment>
                    <div className={styles.Service_companySenior}>
            <h1 data-aos="fade-down">خدمات الافراد</h1>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="700" className={styles.Service_companyJunior}>
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

export default PersonServices
