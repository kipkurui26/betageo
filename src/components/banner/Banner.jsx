import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <span className="banner__overview">For The Community</span>
        <h1 className="banner__title">
          Providing clean, reliable, and affordable water for the community
        </h1>
        <p className="banner__description">
          We handle everything from locating water sources to drilling and
          conducting quality testing. Count on us for comprehensive solutions
          tailored to your water needs, ensuring efficiency and reliability
          every step of the way.
        </p>
        <button className="banner__btn">Contact Us</button>
      </div>
    </section>
  );
};

export default Banner;
