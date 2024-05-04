import React, { Fragment } from 'react'
import'./navbar.css'
import { NavLink } from 'react-router-dom'
// import { IoMenu } from "react-icons/io5";

const NavBar = ({x}) => {
  return (
    <Fragment>
      <header>
        <nav>
          {/* <IoMenu className="menu" /> */}
          <select>
            <option>العربية</option>
            <option>English</option>
          </select>
          <ul>
            <li><NavLink to="/contact">اتصل بنا</NavLink></li>
            <li><NavLink to="/mediaCentre">المركز الاعلامي</NavLink></li>
            <li><NavLink to="/liabrary">المكتبة الرقمية</NavLink></li>
            <li><NavLink to="/sucsses">شركاء النجاح</NavLink></li>
            <li><NavLink to="/team">فريق العمل</NavLink></li>
            <li><NavLink to="/people">خدمات الافراد</NavLink></li>
            <li><NavLink to="/services">خدمات الشركات</NavLink></li>
            <li><NavLink to="/who">من نحن</NavLink></li>
            <li><NavLink to="/home">الصفحة الرئيسية</NavLink></li>
          </ul>
          <img src={x} alt="logo" />
        </nav>
      </header>
      
    </Fragment>
  )
}

export default NavBar
