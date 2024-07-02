import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import Heading from "../headers/Heading";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsList = [
    {
      id: 1,
      name: "Jane Doe",
      service: "Test Pumping",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae possimus? Aut beatae aspernatur commodi explicabo. Magnam iure repellendus aspernatur?",
    },
    {
      id: 2,
      name: "Kimani Macharia",
      service: "Borehole Drilling",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae possimus? Aut beatae aspernatur commodi explicabo. Magnam iure repellendus aspernatur?",
    },
    {
      id: 3,
      name: "James Miller",
      service: "Hydro-Geological Survey",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae possimus? Aut beatae aspernatur commodi explicabo. Magnam iure repellendus aspernatur?",
    },
    {
      id: 4,
      name: "Ann Frank",
      service: "Camera Inspection",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae possimus? Aut beatae aspernatur commodi explicabo. Magnam iure repellendus aspernatur?",
    },
    {
      id: 5,
      name: "John Doe",
      service: "Solar Installation",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae possimus? Aut beatae aspernatur commodi explicabo. Magnam iure repellendus aspernatur?",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleNext = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsList.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("fade-in");
    }, 300);
  };

  const handlePrev = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonialsList.length - 1 : prevIndex - 1
      );
      setAnimationClass("fade-in");
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimationClass(""), 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="testimonials">
      <div className="testimonials__customer">
        <Heading
          headingTitle="What clients have to say about us"
          headingSpan="Customer Testimonials"
        />
        <div className="testimonials__container">
          <FaQuoteLeft className="testimonials__quote" />
          <div className={`testimonials__contents ${animationClass}`}>
            <div className="testimonials__testimonial" key={testimonialsList[currentIndex].id}>
              <p className="testimonials__testimonial--content">
                {testimonialsList[currentIndex].content}
              </p>
              <h4 className="testimonials__testimonial--name">
                {testimonialsList[currentIndex].name}
              </h4>
              <div className="testimonials__testimonial--service">
                {testimonialsList[currentIndex].service}
              </div>
            </div>
          </div>
          <div className="testimonials__controls">
            <button
              className="testimonials__buttons testimonials__control--left"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <div className="testimonials__count--section">
              {testimonialsList.map((_, index) => (
                <span
                  key={index}
                  className={`testimonials__count ${
                    index === currentIndex ? "testimonials__current" : ""
                  }`}
                ></span>
              ))}
            </div>
            <button
              className="testimonials__buttons testimonials__control--right"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="testimonials__projects"></div>
    </section>
  );
};

export default Testimonials;
