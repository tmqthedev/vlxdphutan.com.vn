import React from 'react';
import PropTypes from 'prop-types';
import ImageSlider from '../components/ImageSlider';
import FAQList from '../components/FAQList';
import LazyLoad from '../components/LazyLoad';
import servicesData from '../data/servicesData.json';
import faqData from '../data/faqData.json';
import '../styles/Services.css';

const ServiceDetail = ({ serviceId = 'ground-solutions' }) => {
  const serviceContent = servicesData[serviceId];

  if (!serviceContent) {
    return <div className="service-page">Dịch vụ không tìm thấy</div>;
  }

  // Get service-specific FAQs only
  const serviceFaqs = faqData[serviceId] || [];

  const categories = [
    { id: 'ground-solutions', label: 'Giải Pháp Gia Cố Nền Móng Chuyên Sâu' },
    { id: 'bespoke-interior', label: 'Thiết bị Nội thất & Thiết kế riêng' },
    { id: 'glazing-solutions', label: 'Giải pháp Nhôm kính Thẩm mỹ & Hiện đại' },
    { id: 'material-supply-contract', label: 'Hợp đồng cung ứng Vật tư Công trình Trọn gói' }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section 
        className="service-hero"
        style={{
          backgroundImage: `url(${serviceContent.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{serviceContent.title}</h1>
          <p>{serviceContent.intro}</p>
        </div>
      </section>

      {/* Category & Content Section */}
      <section className="service-main">
        <LazyLoad animation="slideUp">
          <div className="service-container">
            {/* Left Sidebar - Category */}
            <aside className="service-sidebar">
              <div className="category-nav">
                <h3>Dịch Vụ Của Chúng Tôi</h3>
                {categories.map(cat => (
                  <a
                    key={cat.id}
                    href={`/services/${cat.id}`}
                    className={`category-btn ${serviceId === cat.id ? 'active' : ''}`}
                  >
                    ➜ {cat.label}
                  </a>
                ))}
              </div>
            </aside>

            {/* Right Content */}
            <main className="service-content">
              <h2>{serviceContent.title}</h2>
              <p className="intro-text">{serviceContent.intro}</p>

              {serviceContent.services && (
                <div className="content-section">
                  <h3>Các Công Việc Cung Cấp</h3>
                  <ul className="service-list">
                    {serviceContent.services.map((service, idx) => (
                      <li key={service}>
                        <span className="icon">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ưu Điểm Nổi Bật
              {serviceContent.advantages && (
                <div className="content-section">
                  <h3>Ưu Điểm Nổi Bật</h3>
                  <ul className="advantage-list">
                    {serviceContent.advantages.map((adv, idx) => (
                      <li key={adv}>
                        <span className="icon">★</span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              */}
            </main>
          </div>
        </LazyLoad>
      </section>

      {/* FAQ Section */}
      <LazyLoad animation="slideUp" delay={100}>
        <section className="faq-section">
          <div className="faq-container">
            <h2>Các Câu Hỏi Thường Gặp</h2>
            <FAQList faqs={serviceFaqs} />
          </div>
        </section>
      </LazyLoad>      
      
      {/* Gallery Section with ImageSlider */}
      <LazyLoad animation="fadeIn" delay={200}>
        <section className="gallery-section">
          <div className="gallery-container">
            <h2>Hình Ảnh Liên Quan</h2>
            {serviceContent.gallery && serviceContent.gallery.length > 0 ? (
              <ImageSlider images={serviceContent.gallery} title={serviceContent.title} />
            ) : (
              <p className="no-gallery">Không có hình ảnh để hiển thị</p>
            )}
          </div>
        </section>
      </LazyLoad>
    </div>
  );
};

ServiceDetail.propTypes = {
  serviceId: PropTypes.string
};

export default ServiceDetail;
