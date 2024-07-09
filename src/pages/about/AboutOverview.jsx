import { FaWater } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiWaterDrop } from "react-icons/gi";
import { MdBuild, MdCamera, MdSolarPower } from "react-icons/md";

const AboutOverview = () => {
  return (
    <div className="aboutOverview">
      <div className="aboutOverview__description">
        <p className="aboutOverview__description--content">
          Beta Borehole Services is a premier drilling and consultancy firm
          headquartered in Kamulu-Nairobi, Kenya.
        </p>
        <p className="aboutOverview__description--content">
          With over 15 years of industry experience, we pride ourselves on
          delivering a comprehensive range of borehole drilling and related
          services tailored to meet both domestic and industrial needs.
        </p>
        <p className="aboutOverview__description--content">
          Our commitment to flexibility, accessibility, and client orientation
          sets us apart, ensuring that we deliver bespoke solutions that
          precisely match your requirements.
        </p>
      </div>
      <div className="aboutOverview__services">
        <h2 className="aboutOverview__services--title">Our Services</h2>
        <p className="aboutOverview__description--content">
          We offer an extensive array of services designed to address the
          diverse water needs of communities, industries, and businesses. Our
          expertise includes:
        </p>
        <span className="aboutOverview__services--service">
          <GiWaterDrop className="aboutOverview__services--icon" />{" "}
          Hydro-geological Survey Services
        </span>
        <span className="aboutOverview__services--service">
          <MdBuild className="aboutOverview__services--icon" /> Borehole
          Drilling Services
        </span>
        <span className="aboutOverview__services--service">
          <MdCamera className="aboutOverview__services--icon" /> Camera
          Inspection Services
        </span>
        <span className="aboutOverview__services--service">
          <FiSettings className="aboutOverview__services--icon" /> Test Pumping
          Services
        </span>
        <span className="aboutOverview__services--service">
          <MdSolarPower className="aboutOverview__services--icon" /> Pump &
          Solar Installation Services
        </span>
        <span className="aboutOverview__services--service">
          <FaWater className="aboutOverview__services--icon" /> Elevated Tank &
          Tower Construction Services
        </span>
      </div>
    </div>
  );
};

export default AboutOverview;
