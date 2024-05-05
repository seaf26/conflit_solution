import React, { Fragment } from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

import "../ContactUs/contactus.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Fragment>
      <div className="contactus">
        <div className="title">
        <h1>اتصل بنا</h1>

        </div>
        <div className="info">
          <div className="mail">
            <Link to="mailto:seafmohamedgamel@gmail.com">
              <IoMailOpenOutline size={90} color="#e6b16b" className="icon" />
            </Link>
            <Link to="mailto:seafmohamedgamel@gmail.com">
              <p>seaf@gmail.com</p>
            </Link>
          </div>
          <div className="tel">
            <Link to="tel:+00966540943256" className="link">
              <MdOutlinePhoneInTalk className="icon" size={90} color="#e6b16b" />
            </Link>
            <Link to="tel:+00966540943256" className="link">
              <p>01000000000</p>
            </Link>
          </div>
        </div>
        <div className="icons">
          <Link to="https://www.twitter.com">
            <FaXTwitter />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com">
            <FaLinkedinIn  />
          </Link>
          <Link to="https://www.tiktok.com">
            <FaTiktok />
          </Link>
          <Link to="https://www.snapchat.com">
            <FaSnapchatGhost />
          </Link>
          <Link to="https://www.facebook.com">
            <p>@CSLF-SA</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
