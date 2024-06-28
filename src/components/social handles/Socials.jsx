import './socials.css'
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Socials = () => {
  return (
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
  )
}

export default Socials