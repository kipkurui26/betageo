import Banner from "../../components/banner/Banner"

const Contact = () => {
  return (
    <section className="contact">
      <Banner 
        bannerOverview={"Your Water Solutions Partner"}
        bannerTitle={'Our experts are ready to help you every step of the way'}
        bannerDescription={`Need assistance or a quote? Contact us today, and our experts will help you discover the ideal water solution tailored to your needs.`}
        bannerContact={"Connect With Us"}
      />
    </section>
  )
}

export default Contact