import "./statements.css";
import { FaHandsHelping } from "react-icons/fa";
import { GiTeamIdea, GiWaterDrop } from "react-icons/gi";

const Statements = () => {
  return (
    <section className="statements">
      <div className="statements__col statements__mission">
        <h2 className="statements__title">Our Mission</h2>
        <p className="statements__content">
          To provide innovative and sustainable water solutions that enhance the
          quality of life for communities and support economic growth in Kenya
          and its environs.
        </p>
        <div className="statements__icon">
          <GiWaterDrop className="statements__icon-ico" />
        </div>
      </div>
      <div className="statements__col statements__vision">
        <h2 className="statements__title">Our Vision</h2>
        <p className="statements__content">
          To be the leading provider of comprehensive water solutions in East
          Africa, renowned for our commitment to sustainability, technological
          excellence, and community empowerment.
        </p>
        <div className="statements__icon">
          <GiTeamIdea className="statements__icon-ico" />
        </div>
      </div>
      <div className="statements__col statements__objective">
        <h2 className="statements__title">Core Objective</h2>
        <p className="statements__content">
          To work closely with local communities to understand their needs and
          provide customized water solutions that improve health and support
          development.
        </p>
        <div className="statements__icon">
          <FaHandsHelping className="statements__icon-ico" />
        </div>
      </div>
    </section>
  );
};

export default Statements;
