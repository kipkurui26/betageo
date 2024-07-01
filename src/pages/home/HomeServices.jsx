import { servicesList } from "./ServicesList";
import Heading from "../../components/headers/Heading";
// import TestImage from "../../assets/image.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomeServices = () => {
  return (
    <section className="homeServices">
      <div className="homeService__title">
        <Heading headingSpan={"Our Services"} />
        <h2 className="title__slogan">You Name It,</h2>
        <h2 className="title__slogan">We Drill It.</h2>
        <p className="title__slogan--description">
          At the heart of our mission is a commitment to excellence in borehole
          drilling and related services. We strive to exceed our clients'
          expectations, addressing their needs with precision and care. Your
          satisfaction is not just our priority; it's our legacy.
        </p>
      </div>
      <div className="homeService__container">
        {servicesList.map(({ id, title, path, image, description }) => (
            <div key={id} className="homeService__service">
                <figure className="homeService--image">
                <img src={image} alt="" className="homeService--img" />
                </figure>
                <div className="homeService__content">
                <h3 className="homeService__content--title">{title}</h3>
                <p className="homeService__content--description">{description}</p>
                <Link to={path} className="learn__service--btn">
                    Learn More <FaArrowRight />
                </Link>
                </div>
            </div>
        ))}

        {/* <div className="homeService__service">
          <figure className="homeService--image">
            <img src={TestImage} alt="" className="homeService--img" />
          </figure>
          <div className="homeService__content">
            <h3 className="homeService__content--title">
              Hydro-Geological Survey
            </h3>
            <p className="homeService__content--description">
              We provide comprehensive hydro-geological surveys to determine the
              best drilling locations for your water needs.
            </p>
            <Link
              to={"/hydro-geological-survey"}
              className="learn__service--btn"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HomeServices;
