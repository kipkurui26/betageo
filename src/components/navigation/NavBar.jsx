import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { navigationItems, subLinks } from "./NavItems";
import BetaLogo from "../../assets/logo.jpeg";
import "./NavBar.css";
import { CgClose } from "react-icons/cg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isService, setIsService] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleServiceClick = () => {
    setIsService(!isService);
    console.log(isService);
  };
  const handleToggleMenu = () => {
    setIsToggled((prevState) => !prevState);
    console.log(isToggled);
  };

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    if (screenWidth >= 800) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, [screenWidth]);

  return (
    <header>
      {isDesktop ? (
        <>
          <div className="navigation">
            <div className="company-details">
              <figure className="beta-logo">
                <Link to="/">
                  <img
                    src={BetaLogo}
                    alt="Beta Geo-Consultants Logo"
                    className="logo"
                  />
                </Link>
              </figure>
            </div>
            <ul className="nav-links">
              {navigationItems.map(({ id, title, path, cName }) => (
                <li key={id} className={cName}>
                  {title === "Services" ? (
                    <>
                      <span className={`link`} onClick={handleServiceClick}>
                        {title} {isService ? <FaAngleUp /> : <FaAngleDown />}
                      </span>

                      {isService && (
                        <ul className="sub-links desktop-sub-links">
                          {subLinks.map(({ id, title, path, cName }) => (
                            <li key={id} className={cName}>
                              <Link to={path} className="link">
                                {title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={path} className="link">
                      {title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="appointment-div">
              <button className="appointment-btn">Book Appointment</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <nav className={`navigation ${isToggled && "is-toggled"}`}>
            <div className="company-details">
              <figure className="beta-logo">
                <img
                  src={BetaLogo}
                  alt="Beta Geo-Consultants Logo"
                  className="logo"
                />
              </figure>
              <div className="beta-name">
                <span className="company-name">Beta Geo-Consultants</span>
              </div>

              <ul className="nav__socials">
                <li className="nav__social">
                  <Link to="#" target="_blank" className="social--link">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="nav__social">
                  <Link to="#" target="_blank" className="social--link">
                    <FaTiktok />
                  </Link>
                </li>
                <li className="nav__social">
                  <Link to="#" target="_blank" className="social--link">
                    <FaWhatsapp />
                  </Link>
                </li>
                <li className="nav__social">
                  <Link to="#" target="_blank" className="social--link">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="nav-links">
              {navigationItems.map(({ id, title, path, cName }) => (
                <li key={id} className={cName}>
                  {title === "Services" ? (
                    <>
                      <span className={`link`} onClick={handleServiceClick}>
                        {title} {isService ? <FaAngleUp /> : <FaAngleDown />}
                      </span>
                      {isService && (
                        <ul className="sub-links">
                          {subLinks.map(({ id, title, path, cName }) => (
                            <li key={id} className={cName}>
                              <Link to={path} className="link">
                                {title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={path} className="link">
                      {title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="toggle-btn" onClick={handleToggleMenu}>
            {isToggled ? (
              <CgClose className="toggleMenu" />
            ) : (
              <GiHamburgerMenu className="toggleMenu" />
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;
