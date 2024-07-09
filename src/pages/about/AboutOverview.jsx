import { useState, useEffect } from "react";
import TestImage from "../../assets/image.jpg";
import TestImage1 from "../../assets/image1.jpeg";
import TestImage2 from "../../assets/slide-imag.jpg";

import { FaWater } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiWaterDrop } from "react-icons/gi";
import { MdBuild, MdCamera, MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdSolarPower, } from "react-icons/md";

const AboutOverview = () => {
  const imagesList = [
    {
      id: 1,
      image: TestImage,
      service: "Hydro-Geological Survey",
      location: "Kamulu, Nairobi County",
    },
    {
      id: 2,
      image: TestImage1,
      service: "Borehole Drilling",
      location: "Kamulu, Nairobi County",
    },
    {
      id: 3,
      image: TestImage2,
      service: "Elevated Tank Construction",
      location: "Kamulu, Nairobi County",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesList.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

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
            <FiSettings className="aboutOverview__services--icon" /> Test
            Pumping Services
          </span>
          <span className="aboutOverview__services--service">
            <MdSolarPower className="aboutOverview__services--icon" /> Pump &
            Solar Installation Services
          </span>
          <span className="aboutOverview__services--service">
            <FaWater className="aboutOverview__services--icon" /> Elevated Tank
            & Tower Construction Services
          </span>
        </div>
      </div>
      <div className="aboutOverview__figure">
        <figure className="aboutOverview__image">
          <img
            className="aboutOverview__image--img"
            src={imagesList[currentImageIndex].image}
            alt={`${imagesList[currentImageIndex].service} at ${imagesList[currentImageIndex].location}`}
          />
          <div className="aboutOverview__details">
            <span className="aboutOverview__details--content">
              {imagesList[currentImageIndex].service}
            </span>
            <span className="aboutOverview__details--content">
              {imagesList[currentImageIndex].location}
            </span>
          </div>
        </figure>
        <div className="aboutOverview__preview">
          <button
            className="preview--btns image__prev--btn"
            onClick={handlePrev}
          >
            <MdOutlineArrowBackIos />
          </button>
          <div className="preview__images">
            {imagesList.map(({ id, image, service, location }, index) => (
              <span
                className={`preview__images--image ${
                  index === currentImageIndex ? "current--preview" : ""
                }`}
                key={id}
              >
                <img
                  className="preview__images--img"
                  src={image}
                  alt={`${service} at ${location}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              </span>
            ))}
          </div>
          <button
            className="preview--btns image__next--btn"
            onClick={handleNext}
          >
            <MdOutlineArrowForwardIos />
          </button> 
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
