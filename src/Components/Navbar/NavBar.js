import React, { Fragment, useState } from "react";
import './navbar.css';
import { NavLink } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
import logo from '../Imgaes/Screenshot_2024-05-05_013301-removebg-preview.png'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [bigMenu, setBigMenu] = useState(false);
  const menuChange = () => {
    setBigMenu(!bigMenu);
  };

  return (
    <Fragment>
      <header>
        <nav > 
            <img src={logo} alt="logo" />
          <ul className={bigMenu?"bigMenu":undefined}>
  

            <li>
              <NavLink  to="/home" >الصفحة الرئيسية</NavLink>
            </li>
            
            <li>
              <NavLink to="/who" >من نحن</NavLink>
            </li>
            <li>
              <NavLink to="/services">خدمات الشركات</NavLink>
            </li>
            <li>
              <NavLink to="/people">خدمات الافراد</NavLink>
            </li>

            <li>
              <NavLink to="/team">فريق العمل</NavLink>
            </li>
            <li>
              <NavLink to="/sucsses">شركاء النجاح</NavLink>
            </li>
            <li>
              <NavLink to="/liabrary">المكتبة الرقمية</NavLink>
            </li>
            <li>
              <NavLink to="/mediaCentre">المركز الاعلامي</NavLink>
            </li>
            <li>
              <NavLink to="/contact">اتصل بنا</NavLink>
            </li>
          </ul>
        </nav>
        { (
          bigMenu ? (
            <AiOutlineClose onClick={menuChange} size={30} />
          ) : (
            <IoMenu onClick={menuChange} className="menu" size={30} />
          )
        ) }
        {/* <CiSearch className="search" size={30} /> */}
      </header>
    </Fragment>
  );
};

export default NavBar;
