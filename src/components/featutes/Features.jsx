import { FiTool } from "react-icons/fi";
import "./features.css";
import { MdVerifiedUser } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <AiOutlineSafetyCertificate className="features__icon" />
        <h2 className="features__title">Trustworthiness</h2>
        <p className="features__content">
          A reputation built on honesty, integrity, and delivering on our
          promises, making us a trusted partner in water solutions.
        </p>
      </div>
      <div className="features__container">
        <MdVerifiedUser className="features__icon" />
        <h2 className="features__title">Quality Assurance</h2>
        <p className="features__content">
          High standards of quality and precision in all our services, ensuring
          reliable and long-lasting results.
        </p>
      </div>
      <div className="features__container">
        <FiTool className="features__icon" />
        <h2 className="features__title">Reliability</h2>
        <p className="features__content">
          Utilizing advanced technologies and best practices, we ensure
          consistent and dependable services, providing ongoing support and
          maintenance for efficient project execution.
        </p>
      </div>
    </section>
  );
};

export default Features;
