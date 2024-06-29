import "./TestPumping.css";
import TestImage from "../../../assets/image.jpg";
import TestImage1 from "../../../assets/slide33.jpg";
import Banner from "../../../components/banner/Banner";
import Heading from "../../../components/headers/Heading";
import Question from "../../../components/q&a/Question";
import {
  FaBullseye,
  FaCogs,
  FaExclamationTriangle,
  FaHandshake,
  FaLeaf,
  FaTachometerAlt,
  FaUserTie,
} from "react-icons/fa";

const TestPumping = () => {
  return (
    <section className="test-pumping">
      <Banner
        bannerOverview={"Optimize Your Borehole Performance"}
        bannerTitle={"Borehole Test Pumping Services in Kenya"}
        bannerDescription={`By conducting a series of tests, we determine the yield, drawdown, and recovery rates of your borehole. This critical information ensures the design of an efficient water system that meets your needs while maintaining the health of your borehole.`}
        bannerContact={"Get in Touch"}
      />
      <div className="test__container test__pumping--overview">
        <div className="test__overview">
          <Heading
            headingSpan={"Overview"}
            headingTitle={"Borehole test Pumping"}
          />
          <p className="test__overview--description">
            Test pumping is essential for borehole installation, revealing yield
            and aquifer capacity. It ensures the right pump is chosen for
            sustainable use.
          </p>
          <p className="test__overview--description">
            At Beta Geo-Consultants, we provide comprehensive test pumping
            services. This involves pumping water at a steady rate for several
            hours or days, monitoring water levels in the borehole and nearby
            wells.
          </p>
          <p className="test__overview--description">
            The data helps determine aquifer properties like transmissivity and
            storage capacity, crucial for understanding water extraction
            effects. Our expertise ensures optimal borehole operation,
            protecting your investment and the environment.
          </p>
        </div>
        <figure className="test__image">
          <img className="test__image--img" src={TestImage} alt="" />
          <img className="test__image--float" src={TestImage1} alt="" />
        </figure>
      </div>
      <div className="test__container test__importance--section">
        <div className="left__cols">
          <Heading
            headingSpan={"Reasons"}
            headingTitle={"Importance of test pumping"}
          />
          <div className="test__importance">
            <p className="test__importance--content">
              <FaTachometerAlt className="test__importance--icon" />
              <span className="test__importance--title">Determine Yield </span>
              It accurately measures the borehole's water production capacity,
              ensuring that the supply meets your needs.
            </p>
            <p className="test__importance--content">
              <FaCogs className="test__importance--icon" />
              <span className="test__importance--title">
                Optimize Pump Selection{" "}
              </span>
              It guides the choice of the correct pump size and type, maximizing
              efficiency and reducing operational costs.
            </p>
            <p className="test__importance--content">
              <FaLeaf className="test__importance--icon" />
              <span className="test__importance--title">
                Sustainable Operation{" "}
              </span>
              Regular monitoring during test pumping helps in managing water
              extraction sustainably, preventing over-exploitation of the
              aquifer.
            </p>
            <p className="test__importance--content">
              <FaExclamationTriangle className="test__importance--icon" />
              <span className="test__importance--title">
                Identify Potential Issues{" "}
              </span>
              Test pumping can reveal problems like declining water levels or
              poor water quality early, allowing for timely intervention.
            </p>
          </div>
        </div>
        <div className="right__cols">
          <Heading
            headingSpan={"Why"}
            headingTitle={"Why choose Beta Services?"}
          />
          <div className="test__importance">
            <p className="test__importance--content">
              <FaBullseye className="test__importance--icon" />
              <span className="test__importance--title">Accuracy </span>
              We use state-of-the-art equipment and testing methods to ensure that your test pumping results are accurate and reliable.
            </p>
            <p className="test__importance--content">
              <FaUserTie className="test__importance--icon" />
              <span className="test__importance--title">
              Experience{" "}
              </span>
              Our experts bring years of experience and knowledge in hydrogeology and borehole management. We guarantee the best results for your borehole.
            </p>
            <p className="test__importance--content">
              <FaHandshake className="test__importance--icon" />
              <span className="test__importance--title">
              Client-Centric Approach{" "}
              </span>
              We prioritize your needs and concerns, ensuring that our services meet your expectations and requirements. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <Question />
    </section>
  );
};

export default TestPumping;
