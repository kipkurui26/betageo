import ButtonInput from "../../components/form/ButtonInput";
import InputText from "../../components/form/InputText";
import InputTextArea from "../../components/form/InputTextArea";

const HomeContact = () => {
  return (
    <section className="home-contact">
      <form className="contact__form">
        <h3 className="contact__form--title">
          Send us a message and one of our experts will get back to you as soon
          as possible
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
      <div className="contact__map">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819018362394!2d37.06191697388191!3d-1.2823852356195873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15c49f82fdc5%3A0x5db61e3309d888a9!2sBeta%20Geo-Consultants%20(Borehole%20Drilling%20Kenya)!5e0!3m2!1sen!2ske!4v1719569422549!5m2!1sen!2ske"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default HomeContact;
