import "./Contact.css";
import Banner from "../../components/banner/Banner";
import SectionTitle from "../../components/headers/SectionTitle";
import SectionDescription from "../../components/headers/SectionDescription";
import { MdWifiCalling3 } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact">
      <Banner
        bannerOverview={"Your Water Solutions Partner"}
        bannerTitle={"Our experts are ready to help you every step of the way"}
        bannerDescription={`Need assistance or a quote? Contact us today, and our experts will help you discover the ideal water solution tailored to your needs.`}
        bannerContact={"Connect With Us"}
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
          <div className="footer__container footer__location">
            <h2 className="contact__title">Head Office</h2>
            <p className="footer__about--content contact__content">
            <ImLocation2 className="contact__icons"/> BW Square Building, 2nd Floor, Suite BW-202, Kamulu, Nairobi
            </p>
            <div className="location__sub--details">
              <div className="location__subdetails--email">
                <span className="sub__details subdetails--title">Email</span>
                <p className="subdetails--content contact__content">
                  <IoIosMail className="contact__icons"/> betageoconsultants@gmail.com
                </p>
                <p className="subdetails--content contact__content">
                  <IoIosMail className="contact__icons"/> info@betageoconsultants.co.ke
                </p>
              </div>
              <div className="location__subdetails--phone">
                <span className="sub__details subdetails--title">Call or WhatsApp</span>
                <p className="subdetails--content contact__content"><MdWifiCalling3 className="contact__icons"/> +254 715 758 935</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__form"></div>
      </div>
    </section>
  );
};

export default Contact;
