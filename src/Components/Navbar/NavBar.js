import React, { Fragment, useEffect, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";



const NavBar = ({ x }) => {
  const [menu, setMenu] = useState(false);
  const [bigMenu, setBigMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
    let windowWidth = window.innerWidth;
    windowWidth <= 1720 ? setMenu(true) : setMenu(false);
    });
  });
  // const [names] = useState([{""}]);
  // const [reverseNames, setReverseNames] = useState([]);

  const menuChange = () => {
    setBigMenu(!bigMenu);
    // setReverseNames(names.reverse());
    
  }

  return (
    <Fragment>
      <header>
        {
          menu ? 
          bigMenu ? <AiOutlineClose onClick={menuChange} size={30}/>:
          <IoMenu onClick={menuChange}  className="menu" size={30} /> :
           undefined
        }
        <CiSearch className="search" size={30} />

        <nav>
          <select>
            <option>العربية</option>
            <option>English</option>
          </select>
          <ul 
          className={bigMenu?'bigMenu':undefined}
          style={menu?{display:'none'}:{display:'flex'}}>
            {/* {reverseNames.map((name, index) => (
                     <li key={index}>{name}</li>
            ))} */}
            <li>
              <NavLink to="/contact">اتصل بنا</NavLink>
            </li>
            <li>
              <NavLink to="/mediaCentre">المركز الاعلامي</NavLink>
            </li>
            <li>
              <NavLink to="/liabrary">المكتبة الرقمية</NavLink>
            </li>
            <li>
              <NavLink to="/sucsses">شركاء النجاح</NavLink>
            </li>
            <li>
              <NavLink to="/team">فريق العمل</NavLink>
            </li>
            <li>
              <NavLink to="/people">خدمات الافراد</NavLink>
            </li>
            <li>
              <NavLink to="/services">خدمات الشركات</NavLink>
            </li>
            <li>
              <NavLink to="/who">من نحن</NavLink>
            </li>
            <li>
              <NavLink to="/home">الصفحة الرئيسية</NavLink>
            </li>
          </ul>
          <img src={x} alt="logo" />
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
