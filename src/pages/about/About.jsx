import Banner from "../../components/banner/Banner";
import Faq from "../../components/faq/Faq";

const About = () => {
  const faqList = [
    {
      id: 1,
      question:
        "Are there specific permits or approvals needed for borehole drilling in Kenya?",
      answer:
        "Yes, permits from relevant authorities are required for borehole drilling. This includes permits from the Water Resources Authority (WRA), NEMA, and local county authorities.",
    },
    {
      id: 2,
      question:
        "How do you ensure the safety of borehole drilling operations on clients' premises?",
      answer:
        "Safety is our top priority. We adhere to industry-standard safety protocols, conduct thorough risk assessments, and provide comprehensive safety training for our personnel.",
    },
    {
      id: 3,
      question:
        "Is it possible to combine borehole drilling with renewable energy solutions for a sustainable water supply?",
      answer:
        "Absolutely. We specialize in integrating renewable energy sources, such as solar, to power borehole pumps, ensuring a sustainable and efficient water supply.",
    },
    {
      id: 4,
      question: "What types of submersible pumps do you install in boreholes?",
      answer:
        "We install high-quality submersible pumps known for their efficiency and durability. The choice of pump depends on borehole specifications and water demand.",
    },
    {
      id: 5,
      question:
        "Can you explain the process of borehole elevated tank tower construction?",
      answer:
        "We construct elevated tank towers to store water from boreholes at higher elevations, enabling gravity-fed distribution for a reliable water supply.",
    },
  ];
  return (
    <section className="about">
      <Banner
        bannerOverview={"Water Security For The Community"}
        bannerTitle={
          "Providing clean, reliable, and affordable water for the community"
        }
        bannerDescription={`We handle everything from locating water sources to drilling and
          conducting quality testing. Count on us for comprehensive solutions
          tailored to your water needs, ensuring efficiency and reliability
          every step of the way.`}
        bannerContact={"Get in Touch"}
      />
      <Faq faqList={faqList} />
    </section>
  );
};

export default About;
