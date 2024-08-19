import React, {useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeComp from "./Routes/HomeComp";
import CallComp from "./Routes/CallComp";
import CompanyseComp from "./Routes/CompanyseComp";
import TeamComp from "./Routes/TeamComp";
import SuccsesComp from "./Routes/SuccsesComp";
import WhoComp from "./Routes/WhoComp";
import LibarayComp from "./Routes/LibarayComp";
import PeopleComp from "./Routes/PeopleComp";
import MediaComp from "./Routes/MediaComp";
import Loading from "./Components/Loading/Loading";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import NotFound from './Components/NotFound/NotFound'; 
import AOS from "aos";
import "aos/dist/aos.css";
// import './Components/i18n/i18n';

// import './App.css'
// import { useContext } from 'react'
// import { DarkModeContext } from './Components/Dark/DarkModeContext'
// import { DarkModeProvider } from './Components/Dark/DarkModeProvider'

const App = () => {
  const [loading, setLoading] = useState(true);
  // const [language, setLanguage] = useState("ar");

  // useEffect(() => {
  //   localStorage.getItem("language", language);
  // }
  // , [language]);
  // console.log(language);


  useEffect(() => {
    setLoading(false);
  }, []);

  AOS.init({
    duration: 700,
    once: true,
  });

  return (
    // style={{direction: setLanguage ? "ltr" : "rtl"}}
    <div  >
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/home" element={<HomeComp />} />
          <Route path="/contact" element={<CallComp />} />
          <Route path="/sucsses" element={<SuccsesComp />} />
          <Route path="/team" element={<TeamComp />} />
          <Route path="/services" element={<CompanyseComp />} />
          <Route path="/who" element={<WhoComp />} />
          <Route path="/liabrary" element={<LibarayComp />} />
          <Route path="/people" element={<PeopleComp />} />
          <Route path="/mediaCentre" element={<MediaComp />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      )}

      {/* </DarkModeProvider> */}
      {/* </div> */}
    </div>
  );
};

export default App;
