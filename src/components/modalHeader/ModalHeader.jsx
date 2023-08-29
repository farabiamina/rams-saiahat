import React, { useEffect, useContext, useState } from "react";
import "./ModalHeader.css";
// import Logo from "../../svg/HeaderLogoDarkSvg";
// import { AppContext } from '../../context/Context';
// import Navigation from '../navigation/Navigation';
import Navigation from "../navigation/Navigation";
import Logo from "../../svg/LogoSvg";
import { AppContext } from "../context/Context";

const ModalHeader = () => {
  const { setIsFormOpen } = useContext(AppContext);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // const handleClick = () => {
  //     setIsDropDownOpen(prev => !prev);
  // };
  // useEffect(() => {
  //     const smoothScroll = (event) => {
  //         event.preventDefault();
  //         const targetId = event.target.getAttribute('href').slice(1);
  //         const targetElement = document.getElementById(targetId);

  //         const headerHeight = 0;

  //         // Calculate the adjusted scroll position
  //         const scrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

  //         window.scrollTo({
  //             top: scrollPosition,
  //             behavior: 'smooth',
  //         });
  //     };

  //     const anchorLinks = document.getElementsByClassName('link');
  //     Array.from(anchorLinks).forEach((link) => {
  //         link.addEventListener('click', smoothScroll);
  //     });

  //     return () => {
  //         Array.from(anchorLinks).forEach((link) => {
  //             link.removeEventListener('click', smoothScroll);
  //         });
  //     };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500; // Adjust this value as needed
      const scrollY = window.scrollY;
      const header = document.getElementById("header-modal");

      if (scrollY > scrollThreshold) {
        header.classList.add("show"); // Apply a CSS class to show the header
      } else {
        header.classList.remove("show"); // Remove the CSS class to hide the header
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="header-modal">
      <div className="inner">
        <div className="left">
          <Logo className="logo" />
          <Navigation />
        </div>
        <div className="right">
          <button className="btn" onClick={() => setIsFormOpen(true)}>
            Оставить заявку
          </button>
          <a href="tel: +77072124444" className="phone">
            +7 707 212 44 44
          </a>
          <div
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className={`burger-menu ${isDropDownOpen ? "active" : ""}`}
          >
            <span className="stick"></span>
            <span className="stick"></span>
          </div>
        </div>
      </div>
      <div className={`drop-nav ${isDropDownOpen ? "active" : ""}`}>
        <Navigation className="" />
        <div className="bottom">
          <button className="btn" onClick={() => setIsFormOpen(true)}>
            Оставить заявку
          </button>
          <a href="tel: +77072124444" className="phone">
            +7 707 212 44 44
          </a>
        </div>
      </div>
    </header>
  );
};

export default ModalHeader;
