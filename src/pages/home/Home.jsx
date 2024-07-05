import './Home.css'
import Banner from "../../components/banner/Banner";
import HomeServices from './HomeServices';
import Consultation from '../../components/consultation/Consultation';
import Testimonials from '../../components/testimonials/Testimonials';
import HomeAbout from './HomeAbout';
import Faq from '../../components/faq/Faq';

const Home = () => {
  const faqList = [
    {
      id: 1,
      question:
        "What is a hydrogeological survey, and why is it important for borehole drilling?",
      answer:
        "A hydrogeological survey assesses groundwater availability and quality. It is crucial for planning borehole drilling to ensure a sustainable and productive water source.",
    },
    {
      id: 2,
      question: "How deep are boreholes typically drilled in Kenya?",
      answer:
        "Borehole depths can vary but are generally drilled to access aquifers with sufficient water supply, ranging from tens to hundreds of meters.",
    },
    {
      id: 3,
      question:
        "What factors influence the choice of borehole pump for installation?",
      answer:
        "Pump selection depends on factors such as borehole depth, water yield, and intended use. We assess these factors to recommend the most suitable pump for your needs.",
    },
    {
      id: 4,
      question: "What is borehole test pumping, and why is it conducted?",
      answer:
        "Borehole test pumping involves measuring water drawdown and recovery rates to assess the borehole's performance. It helps determine sustainable pumping rates and overall well efficiency.",
    },
  ];
  return (
    <section className="home">
      <Banner
        bannerOverview={"Solutions To Your Water Problems"}
        bannerTitle={"Worry Not, We Have Done This Before!"}
        bannerDescription={`With over 15 years of industry experience, our dedicated team guarantees top-tier solutions for all your water requirements. From hydro-geological surveys to drilling and comprehensive water system installations, we offer a full spectrum of services. Reach out to us today and let us help you find the perfect water solution!`}
        bannerContact={"Get in Touch"}
      />
      <Faq 
        faqList={faqList}
      />
      <HomeAbout />
      <Testimonials />
      <Consultation />
      <HomeServices />
    </section>
  );
};

export default Home;
