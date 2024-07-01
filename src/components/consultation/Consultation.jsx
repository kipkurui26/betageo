import "./Consultation.css";
import Heading from "../headers/Heading";

const Consultation = () => {
  return (
    <section className="consultation">
      <Heading headingSpan={"Request a Free Consultation"} />
      <h2 className="consultation__title">
        We're Here to Answer All Your Questions: Anytime, Any Day, Anywhere
      </h2>
      <p className="consultation__content">
        Whether you have questions about our services, need advice on borehole
        drilling, or require support with any of our offerings, we're just a
        call or message away.
      </p>
      <div className="consultation__cta">
        <p className="consultation__description">
          <span>Call/WhatsApp </span>+254 715 758 935
        </p>
        <div className="consultation__description--divider">
          <span className="consultation--divide"></span>
          <span className="consultation--text">OR</span>
          <span className="consultation--divide"></span>
        </div>
        <p className="consultation__description">
          <span>Email </span> <code>betageoconsultants@gmail.com</code>{" "}
          <code>info@betageoconsultants.co.ke </code>
        </p>
      </div>
    </section>
  );
};

export default Consultation;
