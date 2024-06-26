import "./Contact.css";
import Banner from "../../components/banner/Banner";
import SectionTitle from "../../components/headers/SectionTitle";
import SectionDescription from "../../components/headers/SectionDescription";
import { MdWifiCalling3 } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import InputText from "../../components/form/InputText";
import InputTextArea from "../../components/form/InputTextArea";
import ButtonInput from "../../components/form/ButtonInput";

const Contact = () => {
  return (
    <section className="contact">
      <Banner
        bannerOverview={"Your Water Solutions Partner"}
        bannerTitle={"Our experts are ready to help you every step of the way"}
        bannerDescription={`Need assistance or a quote? Contact us today, and our experts will help you discover the ideal water solution tailored to your needs.`}
        bannerContact={"Connect with Us"}
      />
      <div className="contact__container">
        <div className="contact__address">
          <div className="contact__headers">
            <SectionTitle sectionTitle={"Contact Us"} />
            <SectionDescription
              sectionDescription={
                "You are one call from getting yourself a borehole"
              }
            />
          </div>
          <div>
            <h2 className="contact__title">Head Office</h2>
            <p className="footer__about--content contact__content">
              <ImLocation2 className="contact__icons" /> BW Square Building, 2nd
              Floor, Suite BW-202, Kamulu, Nairobi
            </p>
            <div className="location__sub--details">
              <div className="location__subdetails--email">
                <span className="sub__details subdetails--title">Email</span>
                <p className="subdetails--content contact__content">
                  <IoIosMail className="contact__icons" />{" "}
                  betageoconsultants@gmail.com
                </p>
                <p className="subdetails--content contact__content">
                  <IoIosMail className="contact__icons" />{" "}
                  info@betageoconsultants.co.ke
                </p>
              </div>
              <div className="location__subdetails--phone">
                <span className="sub__details subdetails--title">
                  Call or WhatsApp
                </span>
                <p className="subdetails--content contact__content">
                  <MdWifiCalling3 className="contact__icons" /> +254 715 758 935
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className="contact__form">
          <h3 className="contact__form--title">
            Send us a message and one of our experts will get back to you as
            soon as possible
          </h3>
          <InputText
            formLabel={"Full Name"}
            inputName={"name"}
            placeholder={"John Doe"}
            inputType={"text"}
          />
          <InputText
            formLabel={"Email Address"}
            inputName={"email"}
            placeholder={"johndoe26@gmail.com"}
            inputType={"email"}
          />
          <InputText
            formLabel={"Phone Number"}
            inputName={"phone"}
            placeholder={"+254 7XX XXX XXX"}
            inputType={"tel"}
          />
          <InputTextArea
            formLabel={"Message"}
            inputName={"message"}
            placeholder={"Your message here..."}
          />
          <ButtonInput buttonText={"Send Message"} />
        </form>
      </div>
      <div className="contact__map">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819018362394!2d37.06191697388191!3d-1.2823852356195873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15c49f82fdc5%3A0x5db61e3309d888a9!2sBeta%20Geo-Consultants%20(Borehole%20Drilling%20Kenya)!5e0!3m2!1sen!2ske!4v1719569422549!5m2!1sen!2ske" loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default Contact;
