import Banner from "../../components/banner/Banner";

const About = () => {
  return (
    <section className="about">
      <Banner
        bannerOverview={"For The Community"}
        bannerTitle={
          "Providing clean, reliable, and affordable water for the community"
        }
        bannerDescription={`We handle everything from locating water sources to drilling and
          conducting quality testing. Count on us for comprehensive solutions
          tailored to your water needs, ensuring efficiency and reliability
          every step of the way.`}
        bannerContact={"Get in Touch"}
      />
    </section>
  );
};

export default About;
