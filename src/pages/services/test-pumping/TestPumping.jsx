import Banner from "../../../components/banner/Banner"
import Question from "../../../components/q&a/Question"

const TestPumping = () => {
  return (
    <section className="test-pumping">
      <Banner 
        bannerOverview={'Optimize Your Borehole Performance'}
        bannerTitle={'Borehole Test Pumping Services in Kenya'}
        bannerDescription={`By conducting a series of tests, we determine the yield, drawdown, and recovery rates of your borehole. This critical information ensures the design of an efficient water system that meets your needs while maintaining the health of your borehole.`}
        bannerContact={'Get in Touch'}
      />
      <Question />
    </section>
  )
}

export default TestPumping