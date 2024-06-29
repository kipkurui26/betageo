import "./TestPumping.css";
import TestImage from '../../../assets/image.jpg'
import TestImage1 from '../../../assets/slide33.jpg'
import Banner from "../../../components/banner/Banner";
import Heading from "../../../components/headers/Heading";
import Question from "../../../components/q&a/Question";

const TestPumping = () => {
  return (
    <section className="test-pumping">
      <Banner
        bannerOverview={"Optimize Your Borehole Performance"}
        bannerTitle={"Borehole Test Pumping Services in Kenya"}
        bannerDescription={`By conducting a series of tests, we determine the yield, drawdown, and recovery rates of your borehole. This critical information ensures the design of an efficient water system that meets your needs while maintaining the health of your borehole.`}
        bannerContact={"Get in Touch"}
      />
      <div className="test__pumping--overview">
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
      <Question />
    </section>
  );
};

export default TestPumping;
