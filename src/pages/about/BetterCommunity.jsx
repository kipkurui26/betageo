import communityImage from "../../assets/image1.jpeg";

const BetterCommunity = () => {
  return (
    <section className="betterCommunity">
      <figure className="betterCommunity__figure">
        <img
          src={communityImage}
          alt="Better Community Image"
          className="betterCommunity__image"
        />
      </figure>
      <div className="betterCommunity__description">
        <h2 className="betterCommunity__title">Building a Better Community</h2>
        <p className="betterCommunity__text">
          From finding the water sources to extracting it, Beta Geo-Consultants
          is committed to ensuring that communities have access to clean and
          reliable water.
        </p>
        <p className="betterCommunity__text">
          Our expertise in hydro-geological surveys, borehole drilling, and
          water system installations supports sustainable development and
          improves the quality of life for residents.
        </p>
        <p className="betterCommunity__text">
          We work closely with local communities to identify their unique water
          needs and deliver customized solutions that foster economic growth,
          enhance health, and contribute to overall well-being.
        </p>
        <p className="betterCommunity__text">
          Our dedication to using advanced technology and environmentally
          responsible practices ensures that our projects are not only effective
          but also sustainable for future generations.
        </p>
        <p className="betterCommunity__text">
          Join us in building a better community through reliable water
          solutions. Together, we can make a lasting impact.
        </p>
        <div className="betterCommunity__button">
            <button className="betterCommunity__button--btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default BetterCommunity;
