import React, { useState } from "react";
import './Navbar.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
      <div className="logo">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" style={{ filter: 'drop-shadow(0 0 2px #999)' }}/>
        </Link>
      </div>

      <button className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={isNavOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={toggleNav}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          <HashLink smooth className="nav-link" to="/#homeSection">Дома</HashLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#aboutUsSection">За нас</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#servicesSection">Услуги</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#teamSection">Нашиот тим</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contactSection">Контакт</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#subscribeSection">КОД Информатор</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
