import React, { Fragment, useEffect, useState } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import footerlogo from "../Imgaes/Full of gold.png";
import footerlog from "../Imgaes/Footerr.png";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  useEffect(() => {
    setSocialLinks([
      {
      specialLink: "https://www.facebook.com",
      pragraph: "@CSLF-SA",
      },
      {
      icon: <FaSnapchatGhost />,
      link: "https://www.snapchat.com",
      },
      {
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@cslf_sa?_t=8nxex39S1OZ&_r=1",
      },
      {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com",
      },
      {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/cslf_sa?igsh=OGQ5ZDc2ODk2ZA==",
      },
      {
      icon: <FaXTwitter />,
      link: "https://x.com/cslf_sa?s=21&t=Kwa2BgNyZS5HmfO9Wr11bQ",
      },
    ]);
    setEmail("mailto:seafmohamedgamel@gmail.com");
    setPhone("tel:+966555690882");
  }, []);
  return (
    <Fragment>
      <footer className={styles.Bigfooter}>
        <div className={styles.logo}>
          <img src={footerlogo} alt="footerlogo" />
          <p>© جميع حقوق محفوظة لشركة حلول النزاع</p>
        </div>
        <div className={styles.bigcontent}>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.mail}>
                <Link to={Email}>
                  <p>info@cslf.sa</p>
                </Link>
                <Link to={Email}>
                  <IoMailOpenOutline color="#e6b16b" className={styles.icon} />
                </Link>
              </div>
              <div className={styles.tel}>
                <Link to={Phone} className={styles.link}>
                  <p>+966555690882</p>
                </Link>
                <Link to={Phone} className={styles.link}>
                  <MdOutlinePhoneInTalk
                    className={styles.icon}
                    color="#e6b16b"
                  />
                </Link>
              </div>
              <Link
                id={styles.dis}
                to={"https://www.facebook.com"}
                target="_blank"
              >
                <p>@CSLF-SA</p>
              </Link>
            </div>
            <div className={styles.icons}>
              {socialLinks.map((link, index) => (
                <div key={index}>
                  <Link to={link.link} key={index} target="_blank">
                    <p>{link.icon}</p>
                  </Link>
                  <Link id={styles.Cslf} to={link.specialLink} target="_blank">
                    <p>{link.pragraph}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.logoo}>
            <img src={footerlog} alt="footerlogo" />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
