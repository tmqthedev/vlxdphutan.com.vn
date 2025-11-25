import React, { useState } from 'react';
import FAQList from '../../components/FAQList';
import faqData from '../../data/faqData.json';
import '../../styles/About.css';

const getCategoryLabel = (key) => {
  const labels = {
    'general': 'Chung',
    'demolition': 'Tháo Dỡ',
    'furniture': 'Nội Thất',
    'installation': 'Lắp Đặt',
    'moving': 'Chuyên Nhà',
    'purchase': 'Thu Mua'
  };
  return labels[key] || key;
};

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get all category keys from faqData
  const categories = [
    { id: 'all', label: 'Tất Cả' },
    ...Object.keys(faqData).map(key => ({
      id: key,
      label: getCategoryLabel(key)
    }))
  ];

  // Get FAQs for selected category
  const faqs = selectedCategory === 'all' 
    ? Object.values(faqData).flat()
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
