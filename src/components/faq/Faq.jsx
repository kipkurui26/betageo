import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import "./faq.css";

const Faq = ({faqList}) => {


  const [activeFaq, setActiveFaq] = useState(1);

  const handleToggleFaq = (id) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? null : id));
  };

  return (
    <section className="faqs">
      <div className="faqs__container">
        <div className="faqs__title--container">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__call">
            If you have further questions or need clarification, feel free to contact us.
          </p>
        </div>
        {faqList.map(({ id, question, answer }) => (
          <div
            key={id}
            className={`faqs__faq ${activeFaq === id ? "is-faq" : ""}`}
            onClick={() => handleToggleFaq(id)}
          >
            <div className="faqs__question--container">
              <p className="faqs__question">{question}</p>
              <div className="faqs__icon">
                {activeFaq === id ? (
                  <TiArrowSortedUp className="faqs__ico" />
                ) : (
                  <TiArrowSortedDown className="faqs__ico" />
                )}
              </div>
            </div>
            {activeFaq === id && (
              <div className="faqs__answer--container">
                <p className="faqs__answer">{answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
