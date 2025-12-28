import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

  // Generate categories dynamically from servicesData
  const categories = Object.keys(servicesData).map(key => ({
    id: key,
    label: servicesData[key].title
  }));

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

      {/* Product Section */}
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

            {/* Right Content - Products Grid */}
            <main className="service-content">
              <h2>{serviceContent.title}</h2>
              <p className="intro-text">{serviceContent.intro}</p>

              {serviceContent.products && serviceContent.products.length > 0 && (
                <div className="products-section">
                  <div className="products-grid">
                    {serviceContent.products.map((product) => (
                      <div key={product.slug} className="product-card">
                        <div className="product-image">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                          <p className="product-category">{serviceContent.title}</p>
                          <h3 className="product-name">{product.name}</h3>
                          <p className="product-detail">{product.detail}</p>
                          <Link 
                            to={`/product/${product.slug}`} 
                            className="product-btn"
                          >
                            Xem Chi Tiết <span>➜</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
    </div>
  );
};

ServiceDetail.propTypes = {
  serviceId: PropTypes.string
};

export default ServiceDetail;
