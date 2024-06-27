import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <section className="home">
      <Banner
        bannerOverview={"Solutions To Your Water Problems"}
        bannerTitle={"Worry Not, We Have Done This Before!"}
        bannerDescription={`With over 15 years of industry experience, our dedicated team guarantees top-tier solutions for all your water requirements. From hydro-geological surveys to drilling and comprehensive water system installations, we offer a full spectrum of services. Reach out to us today and let us help you find the perfect water solution!`}
        bannerContact={"Get in Touch"}
      />
    </section>
  );
};

export default Home;
