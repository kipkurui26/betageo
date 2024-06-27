import {
  FaCaretRight,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container footer__about">
        <h2 className="footer__about--title">About Us</h2>
        <p className="footer__about--content">
          Beta Geo-Consultants is a drilling and consultancy firm based in
          Nairobi, Kenya, offering a comprehensive range of borehole drilling
          and related services for both domestic and industrial use.
        </p>
        <p className="footer__about--content">
          We pride ourselves on being flexible, accessible, and client-oriented,
          delivering tailored borehole services to meet your specific needs.
        </p>
      </div>
      <div className="footer__container footer__location">
        <h2 className="footer__about--title">Head Office</h2>
        <p className="footer__about--content">
          BW Square Building, 2nd Floor, Suite BW-202, Kamulu, Nairobi
        </p>
        <div className="location__sub--details">
          <div className="location__subdetails--email">
            <span className="sub__details subdetails--title">Email</span>
            <p className="subdetails--content">betageoconsultants@gmail.com</p>
            <p className="subdetails--content">info@betageoconsultants.co.ke</p>
          </div>
          <div className="location__subdetails--phone">
            <span className="sub__details subdetails--title">Phone</span>
            <p className="subdetails--content">+254 715 758 935</p>
          </div>
        </div>
      </div>
      <div className="footer__container footer__services">
        <h2 className="footer__about--title">Our Services</h2>
        <ul className="footer__services--list">
          <li className="services--item">
            <Link
              to="/services/hydro-geological-survey"
              className="footer__service--link"
            >
              <FaCaretRight />
              Hydro-Geological Survey
            </Link>
          </li>
          <li className="services--item">
            <Link
              to="/services/borehole-drilling"
              className="footer__service--link"
            >
              <FaCaretRight /> Borehole Drilling
            </Link>
          </li>
          <li className="services--item">
            <Link
              to="/services/camera-inspection"
              className="footer__service--link"
            >
              <FaCaretRight /> Camera Inspection
            </Link>
          </li>
          <li className="services--item">
            <Link to="/services/test-pumping" className="footer__service--link">
              <FaCaretRight /> Test Pumping
            </Link>
          </li>
          <li className="services--item">
            <Link
              to="/services/pump-installation"
              className="footer__service--link"
            >
              <FaCaretRight /> Pump Installation
            </Link>
          </li>
          <li className="services--item">
            <Link
              to="/services/tower-construction"
              className="footer__service--link"
            >
              <FaCaretRight /> Tower Construction
            </Link>
          </li>
          <li className="services--item">
            <Link
              to="/services/solar-installation"
              className="footer__service--link"
            >
              <FaCaretRight /> Solar Installation
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__container footer__quick--links">
        <h2 className="footer__about--title">Usefull Links</h2>
        <ul className="footer__services--list">
          <li className="services--item">
            <Link to="/" className="footer__service--link">
              <FaCaretRight /> Home
            </Link>
          </li>
          <li className="services--item">
            <Link to="/about-us" className="footer__service--link">
              <FaCaretRight /> About Us
            </Link>
          </li>
          <li className="services--item">
            <Link to="/contact-us" className="footer__service--link">
              <FaCaretRight /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <div className="copyright">
          <p>
            &copy; 2021 - {new Date().getFullYear()} Beta Geo-Consultants LTD.
            All Rights Reserved
          </p>
        </div>
        <div className="footer__handles">
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
      </div>
    </section>
  );
};

export default Footer;
