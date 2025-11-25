import React from 'react';
import PropTypes from 'prop-types';
import ImageSlider from '../components/ImageSlider';
import FAQList from '../components/FAQList';
import LazyLoad from '../components/LazyLoad';
import servicesData from '../data/servicesData.json';
import faqData from '../data/faqData.json';
import '../styles/Services.css';

const ServiceDetail = ({ serviceId = 'demolition' }) => {
  const serviceContent = servicesData[serviceId];

  if (!serviceContent) {
    return <div className="service-page">Dịch vụ không tìm thấy</div>;
  }

  const categories = [
    { id: 'demolition', label: 'Tháo dỡ hoàn trả mặt bằng' },
    { id: 'purchase', label: 'Thu mua phế liệu, vật tư kho bãi' },
    { id: 'moving', label: 'Chuyên nhà, chuyên văn phòng' },
    { id: 'furniture', label: 'Mua bán nội thất, kính cường lực' },
    { id: 'installation', label: 'Thi công lắp đặt kính cường lực' }
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

              <div className="cta-section">
                <h3>Liên Hệ Ngay Để Nhận Báo Giá</h3>
                <p>Hotline: <strong>0933 358 717 – 0909 583 236</strong></p>
                <button className="cta-button">Yêu Cầu Báo Giá</button>
              </div>
            </main>
          </div>
        </LazyLoad>
      </section>

      {/* FAQ Section */}
      <LazyLoad animation="slideUp" delay={100}>
        <section className="faq-section">
          <div className="faq-container">
            <h2>Các Câu Hỏi Thường Gặp</h2>
            <FAQList faqs={faqData[serviceId] || []} />
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
