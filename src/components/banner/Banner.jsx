import "./Banner.css";
const Banner = ({bannerOverview, bannerTitle, bannerDescription, bannerContact}) => {
  return (
    <section className="banner">
      <div className="banner__content">
        <span className="banner__overview">{bannerOverview}</span>
        <h1 className="banner__title">
          {bannerTitle}
        </h1>
        <p className="banner__description"> {bannerDescription}
        </p>
        <button className="banner__btn">{bannerContact}</button>
      </div>
    </section>
  );
};

export default Banner;
