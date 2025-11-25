import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FAQList = ({ faqs }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq-list">
      {faqs.map(faq => (
        <div key={faq.id} className="faq-item">
          <button 
            className="faq-question"
            onClick={() => toggleFAQ(faq.id)}
            type="button"
          >
            <span>{faq.question}</span>
            <span className={`icon ${expandedId === faq.id ? 'active' : ''}`}>+</span>
          </button>
          {expandedId === faq.id && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQList;

FAQList.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      category: PropTypes.string
    })
  ).isRequired
};
