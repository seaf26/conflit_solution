import React from 'react'
import NavBar from '../Components/Navbar/NavBar'
import { useState, useEffect } from 'react';
import logo from '../Components/Imgaes/Screenshot_2024-05-05_013301-removebg-preview.png'
import ContactUs from '../Components/ContactUs/ContactUs';

const CallComp = () => {
  const imagePaths = [logo];
  const [currentImageIndex, setCurrentImageIndex] = useState("0");

  
  const changeImage = () => {
    const nextIndex = (currentImageIndex + 1) % imagePaths.length;
    setCurrentImageIndex(nextIndex);

  };

  useEffect(() => {
    const intervalId = setInterval(changeImage, 2000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const currentImagePath = imagePaths[currentImageIndex];
  
  return (
    <div>
      <NavBar x={currentImagePath} />
      <ContactUs/>
      
      
    </div>
  )
}

export default CallComp
