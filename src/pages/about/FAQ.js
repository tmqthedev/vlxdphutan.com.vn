import React, { useState } from 'react';
import FAQList from '../../components/FAQList';
import faqData from '../../data/faqData.json';
import '../../styles/About.css';

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get category titles from metadata
  const categoryTitles = faqData._categories || {};

  // Get all category keys from faqData (excluding metadata)
  const categories = [
    { id: 'all', label: 'Tất Cả' },
    ...Object.keys(faqData)
      .filter(key => key !== '_categories')
      .map(key => ({
        id: key,
        label: categoryTitles[key] || key
      }))
  ];

  // Get FAQs for selected category
  const faqs = selectedCategory === 'all' 
    ? Object.entries(faqData)
        .filter(([key]) => key !== '_categories')
        .flatMap(([, items]) => items)
    : faqData[selectedCategory] || [];

  return (
    <>
      <div className="page-header">
        <h1>Câu Hỏi Thường Gặp</h1>
        <p>Tìm câu trả lời cho những thắc mắc của bạn</p>
      </div>
      <div className="faq">
        {/* Category Filter */}
        <div className="faq-filter">
          <div className="faq-categories">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`faq-category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <FAQList faqs={faqs} />
      </div>
    </>
  );
};

export default FAQ;
