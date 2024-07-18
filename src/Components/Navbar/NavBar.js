import React, { Fragment, useEffect, useState } from "react";
import './navbar.css';
import { NavLink } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
import logo from '../Imgaes/full color.png'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const NavBar = () => {
  const [bigMenu, setBigMenu] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > window.innerHeight) {
        setHideNav(currentScrollY > lastScrollTop);
      } else {
        setHideNav(false);
      }      setLastScrollTop(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);


  const menuChange = () => {
    setBigMenu(!bigMenu);
  }
  useEffect(()=>{
    if (!bigMenu) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  },[bigMenu]);

  return (
    <Fragment>
      <header className={`header ${hideNav ? 'hide' : ''}`}>
      <nav >
            <img src={logo} alt="logo" />
          <ul className={bigMenu?"bigMenu":undefined}>
  

            <li>
            <NavLink className={window.location.pathname === "/" ? "active" : undefined}  to="/" >الصفحة الرئيسية</NavLink>
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
            {/* <li>
              <NavLink to="/liabrary">المكتبة الرقمية</NavLink>
            </li> */}
            <li>
              <NavLink to="/mediaCentre">المركز الاعلامي</NavLink>
            </li>
            <li>
              <NavLink to="/contact">اتصل بنا</NavLink>
            </li>
          </ul>
        <LanguageSwitcher/>
        </nav>

        { (
          bigMenu ? (
            <AiOutlineClose onClick={menuChange} size={30} />
          ) : (
            <IoMenu onClick={menuChange} className="menu" size={48} />
          )
        ) }
        {/* <CiSearch className="search" size={30} /> */}
      </header>
    </Fragment>
  );
};

export default NavBar;
