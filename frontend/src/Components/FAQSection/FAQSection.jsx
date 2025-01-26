// src/components/FAQSection.jsx
import React, { useState } from "react";
import "./FAQSection.css";
export default function FAQSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-section-body">
        <h2 className="faq-section-title">Frequently Asked Questions</h2>
        <div className="faq-section-questions">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-section-question-button-group">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-section-question-button"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="faq-section-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
