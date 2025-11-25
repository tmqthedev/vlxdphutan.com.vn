import React, { useState } from 'react';
import AnimateNumber from '../components/AnimateNumber';
import LazyLoad from '../components/LazyLoad';
import '../styles/Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Công Ty Vật Liệu Xây Dựng Phú Tân',
      subtitle: 'Chuyên cung cấp dịch vụ tháo dỡ, chuyên nhân tài với chất lượng hàng đầu',
      image: 'linear-gradient(135deg, #1e90ff 0%, #ff6b6b 100%)'
    },
    {
      id: 2,
      title: 'Tháo Dỡ Chuyên Nghiệp',
      subtitle: 'Đội ngũ lành nghề, thiết bị hiện đại, đảm bảo an toàn lao động',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 3,
      title: 'Dịch Vụ Chuyên Nhà',
      subtitle: 'Chuyển nhà, văn phòng nhanh chóng, an toàn, giữ nguyên vẹn hàng hóa',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 4,
      title: 'Mua Bán Nội Thất & Kính Cường Lực',
      subtitle: 'Sản phẩm chất lượng cao, giá cạnh tranh, phục vụ tận tâm',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      <section className="hero-slider">
        <div className="slider-container">
          <div 
            className="slider-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id} 
                className="slide"
                style={{ background: slide.image }}
              >
                <div className="slide-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            ◀
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            ▶
          </button>

          {/* Slide Indicators */}
          <div className="slider-indicators">
            {slides.map((slide, index) => (
              <button
                key={`indicator-${slide.id}`}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="slide-counter">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <LazyLoad animation="slideUp">
          <div className="about-stats-container">
          {/* Left Column - Stats */}
          <div className="stats-column">
            <div className="stat-item">
              <div className="stat-number">
                <AnimateNumber target={150} />
              </div>
              <div className="stat-label">Dự án được hoàn thành trong 5 năm</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <AnimateNumber target={3379} />
              </div>
              <div className="stat-label">Giờ tư vấn được thiết lập</div>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="image-column">
            <img 
              src="https://via.placeholder.com/400x500/cccccc/999999?text=Team+Photo" 
              alt="Team"
              className="team-image"
            />
          </div>

          {/* Right Column - Text */}
          <div className="text-column">
            <h3>Công ty Phú Tân chuyên thu mua nội thất, tháo dỡ - hoàn trả mặt bằng và thi công kính cường lực.</h3>
            
            <p><strong>Kính gửi Quý Khách Hàng,</strong></p>
            
            <p>Trước hết, tôi xin gửi lời chào trân trọng và lời cảm ơn sâu sắc đến Quý Khách Hàng vì đã tin tưởng và ủng hộ chúng tôi trong suốt thời gian qua.</p>

            <p>Chúng tôi hiểu rằng sự tiết kiệm thời gian và hiệu quả trong công việc là yếu tố quan trọng trong đối với bạn. Chính vì vậy, với mỗi dịch vụ chúng tôi cung cấp, bạn sẽ nhận được sự chăm sóc tận tình và đảm bảo tiến độ hoàn thành nhanh chóng, đúng yêu cầu, chi phí hợp lý. Với phương châm "Uy tín - Nhanh chóng - Tối ưu - Chất lượng", Phú Tân sẽ là đối tác tin cậy, đông hành cùng Quý Khách Hàng trong mỗi công trình và dự án.</p>

            <p>Chúng tôi mong muốn tiếp tục nhận được sự ủng hộ và hợp tác từ Quý Khách Hàng trong thời gian tới. Xin chân thành cảm ơn và chúc Quý Khách Hàng sức khỏe, thành công và thịnh vượng.</p>

            <div className="ceo-signature">
              <p className="ceo-sign">Trân trọng,</p>
              <br></br><br></br><br></br>
              <p className="ceo-title">CEO<p className="ceo-name"> Hoàng Minh Phương</p></p>
            </div>
          </div>
        </div>
        </LazyLoad>
      </section>

      <section className="services-preview">
        <LazyLoad animation="slideUp" delay={100}>
          <h2>DỊCH VỤ CHÚNG TÔI CUNG CẤP</h2>
          <div className="services-carousel">
          <div className="service-item">
            <div className="service-image">
              <img src="https://via.placeholder.com/400x300/cccccc/999999?text=Tháo+Dỡ" alt="Tháo Dỡ" />
            </div>
            <div className="service-info">
              <span className="service-label">Dịch vụ</span>
              <h3>Tháo dỡ hoàn trả mặt bằng</h3>
            </div>
            <div className="service-hover">
              <p>Dịch vụ tháo dỡ, làm sạch mặt bằng sau thi công hoặc đổi công trình.</p>
              <a href="/services/demolition" className="service-btn">
                <span>➜</span> Xem Thêm
              </a>
            </div>
          </div>

          <div className="service-item">
            <div className="service-image">
              <img src="https://via.placeholder.com/400x300/cccccc/999999?text=Thu+Mua" alt="Thu Mua" />
            </div>
            <div className="service-info">
              <span className="service-label">Dịch vụ</span>
              <h3>Thu mua phế liệu, vật tư kho bãi</h3>
            </div>
            <div className="service-hover">
              <p>Chúng tôi mua sắm phế liệu, vật tư kho bãi với giá tốt nhất thị trường.</p>
              <a href="/services/purchase" className="service-btn">
                <span>➜</span> Xem Thêm
              </a>
            </div>
          </div>

          <div className="service-item">
            <div className="service-image">
              <img src="https://via.placeholder.com/400x300/cccccc/999999?text=Chuyên+Nhà" alt="Chuyển Nhà" />
            </div>
            <div className="service-info">
              <span className="service-label">Dịch vụ</span>
              <h3>Chuyển nhà, văn phòng</h3>
            </div>
            <div className="service-hover">
              <p>Chuyển nhà, chuyên văn phòng nhanh chóng, an toàn, giữ nguyên vẹn hàng hóa.</p>
              <a href="/services/moving" className="service-btn">
                <span>➜</span> Xem Thêm
              </a>
            </div>
          </div>

          <div className="service-item">
            <div className="service-image">
              <img src="https://via.placeholder.com/400x300/cccccc/999999?text=Nội+Thất" alt="Nội Thất" />
            </div>
            <div className="service-info">
              <span className="service-label">Dịch vụ</span>
              <h3>Mua bán nội thất, kính cường lực</h3>
            </div>
            <div className="service-hover">
              <p>Kinh cường lực chất lượng cao với giá cạnh tranh, phục vụ tận tâm.</p>
              <a href="/services/furniture" className="service-btn">
                <span>➜</span> Xem Thêm
              </a>
            </div>
          </div>

          <div className="service-item">
            <div className="service-image">
              <img src="https://via.placeholder.com/400x300/cccccc/999999?text=Kính+Cường+Lực" alt="Kính Cường Lực" />
            </div>
            <div className="service-info">
              <span className="service-label">Dịch vụ</span>
              <h3>Thi công kính cường lực</h3>
            </div>
            <div className="service-hover">
              <p>Thi công lắp đặt kính cường lực chuyên nghiệp với đội ngũ lành nghề.</p>
              <a href="/services/installation" className="service-btn">
                <span>➜</span> Xem Thêm
              </a>
            </div>
          </div>
        </div>
        </LazyLoad>
      </section>

      <section className="why-us">
        <LazyLoad animation="fadeIn" delay={200}>
          <h2>Tại Sao Chọn Phú Tân?</h2>
          <div className="features">
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h4>Báo Giá Đúng</h4>
            <p>Cung cấp báo giá chính xác, minh bạch, không có chi phí ẩn, giúp khách hàng dễ dàng dự ra quyết định.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🏆</div>
            <h4>Cam kết chất lượng</h4>
            <p>Sản phẩm nội thất và kính cường lực được chúng tôi kiểm tra kỹ lưỡng, đảm bảo bền đẹp và an toàn.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">😊</div>
            <h4>Mua bán chính trực</h4>
            <p>Hoạt động minh bạch, trung thực, đảm bảo mọi giao dịch rõ ràng, đúng quy định, đúng cam kết.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h4>Thi công nhanh gọn</h4>
            <p>Đội ngũ thi công chuyên nghiệp, đảm bảo tiến độ công trình nhanh chóng mà vẫn giữ chất lượng cao.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h4>Chung tay vì môi trường</h4>
            <p>Tái sử dụng các vật tư phế liệu, áp dụng quy trình thân thiện với môi trường.</p>
          </div>
        </div>
        </LazyLoad>
      </section>
    </div>
  );
};

export default Home;
