import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LazyLoad from '../components/LazyLoad';
import servicesData from '../data/servicesData.json';
import '../styles/Services.css';

const ProductDetail = () => {
  const { productSlug } = useParams();
  
  // Find the product and its service
  let product = null;
  let service = null;
  
  Object.keys(servicesData).forEach(serviceId => {
    const serviceContent = servicesData[serviceId];
    const foundProduct = serviceContent.products?.find(p => p.slug === productSlug);
    if (foundProduct) {
      product = foundProduct;
      service = { id: serviceId, ...serviceContent };
    }
  });

  if (!product || !service) {
    return (
      <div className="product-detail-page">
        <div className="product-not-found">
          <h1>Sản phẩm không tìm thấy</h1>
          <Link to="/services/ground-solutions">← Quay lại dịch vụ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {/* Product Header */}
      <section className="product-header">
        <div className="product-breadcrumb">
          <Link to="/">Trang chủ</Link>
          <span> / </span>
          <Link to={`/services/${service.id}`}>{service.title}</Link>
          <span> / </span>
          <span>{product.name}</span>
        </div>
      </section>

      {/* Product Content */}
      <section className="product-content">
        <LazyLoad animation="slideUp">
          <div className="product-container">
            {/* Product Image */}
            <div className="product-image-section">
              <img src={product.image} alt={product.name} className="product-main-image" />
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <p className="product-service-category">{service.title}</p>
              <h1 className="product-main-title">{product.name}</h1>
              
              <div className="product-detail-content">
                <h3>Chi Tiết Sản Phẩm</h3>
                <p className="product-description">{product.detail}</p>
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                <Link to="/contact" className="btn-contact">Liên Hệ Để Tư Vấn</Link>
                <Link to={`/services/${service.id}`} className="btn-back">
                  ← Quay lại dịch vụ
                </Link>
              </div>
            </div>
          </div>
        </LazyLoad>
      </section>

      {/* Related Products */}
      <section className="related-products">
        <LazyLoad animation="slideUp" delay={100}>
          <div className="related-container">
            <h2>Sản Phẩm Liên Quan</h2>
            <div className="related-products-grid">
              {service.products
                ?.filter(p => p.slug !== productSlug)
                .slice(0, 3)
                .map(relatedProduct => (
                  <div key={relatedProduct.slug} className="related-product-card">
                    <div className="related-product-image">
                      <img src={relatedProduct.image} alt={relatedProduct.name} />
                    </div>
                    <div className="related-product-info">
                      <h3>{relatedProduct.name}</h3>
                      <Link 
                        to={`/product/${relatedProduct.slug}`} 
                        className="related-product-link"
                      >
                        Xem Chi Tiết ➜
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </LazyLoad>
      </section>
    </div>
  );
};

export default ProductDetail;
