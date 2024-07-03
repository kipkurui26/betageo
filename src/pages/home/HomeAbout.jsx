import { Link } from "react-router-dom";
import Heading from "../../components/headers/Heading";
import { FaArrowRight } from "react-icons/fa";
import TestImage from '../../assets/image.jpg'

const HomeAbout = () => {
  return (
    <section className="homeAbout">
      <div className="homeAbout__container">
        <Heading
          headingSpan={"About Beta Services"}
          headingTitle={"Solution To Your Water Problems"}
        />
        <p className="homeAbout__description">
          With over 10 years of industry experience, Beta Geo-Consultants is
          committed to delivering top-tier solutions for all your water needs.
        </p>
        <p className="homeAbout__description">
          Our team of experts excels in a wide range of services, including
          hydro-geological surveys, borehole drilling, camera inspections, test
          pumping, pump installations, solar-powered solutions, and elevated
          tank tower construction. 
        </p>
        <p className="homeAbout__description">
          We ensure comprehensive and reliable water
          system installations tailored to the specific requirements of our
          residential, agricultural, and industrial clients.
        </p>
        <Link to="/about-us" className="homeAbout__link">
          Learn More <FaArrowRight />
        </Link>
      </div>
      <figure className="homeAbout__figure">
        <img src={TestImage} alt="About Beta Services" className="homeAbout__image" />
      </figure>
    </section>
  );
};

export default HomeAbout;
