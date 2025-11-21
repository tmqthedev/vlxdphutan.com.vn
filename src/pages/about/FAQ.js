import React from 'react';
import '../../styles/About.css';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'Phú Tân có phục vụ ngoài TP HCM không?',
      answer: 'Có, chúng tôi có thể phục vụ các khu vực lân cận TP HCM. Vui lòng liên hệ để tư vấn chi tiết.'
    },
    {
      id: 2,
      question: 'Chi phí dịch vụ được tính như thế nào?',
      answer: 'Chi phí được tính dựa trên khối lượng công việc, khoảng cách vận chuyển và loại dịch vụ. Chúng tôi sẽ cung cấp báo giá chi tiết sau khi kiểm tra.'
    },
    {
      id: 3,
      question: 'Bảo hành sản phẩm như thế nào?',
      answer: 'Tất cả sản phẩm nội thất và kính cường lực được bảo hành tối thiểu 1 năm. Thi công kính được bảo hành 3 năm.'
    },
    {
      id: 4,
      question: 'Có thể chuyên nhà ngoài giờ hành chính không?',
      answer: 'Có, chúng tôi có thể sắp xếp chuyên nhà vào buổi tối hoặc cuối tuần. Sẽ có chi phí phụ thêm.'
    },
    {
      id: 5,
      question: 'Làm thế nào để thanh toán?',
      answer: 'Chúng tôi chấp nhận thanh toán tiền mặt, chuyển khoản ngân hàng. Thanh toán được tiến hành sau khi hoàn tất công việc.'
    },
    {
      id: 6,
      question: 'Phú Tân có cung cấp dịch vụ lên kế hoạch thiết kế không?',
      answer: 'Có, chúng tôi cung cấp dịch vụ tư vấn và lên kế hoạch thiết kế cho dự án của bạn miễn phí.'
    }
  ];

  const [expandedId, setExpandedId] = React.useState(null);

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq">
      <h1>Câu Hỏi Thường Gặp</h1>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
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
    </div>
  );
};

export default FAQ;
