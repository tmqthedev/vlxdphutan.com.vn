import React, { useState } from 'react';
import AnimateNumber from '../components/AnimateNumber';
import LazyLoad from '../components/LazyLoad';
import servicesData from '../data/servicesData.json';
import contactInfo from '../data/contactInfo.json';
import '../styles/Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [servicesSlideIndex, setServicesSlideIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Giải Pháp Gia Cố Nền Móng Chuyên Sâu',
      subtitle: 'Chúng tôi cung cấp các vật tư gia cố nền đất tiêu chuẩn, được lựa chọn kỹ lưỡng để đảm bảo độ bền vững và khả năng chịu tải tối ưu cho mọi công trình.',
      image: 'url(/assets/images/home/homepage_section1_banner_1.jpg)'
    },
    {
      id: 2,
      title: 'Thiết bị Nội thất & Thiết kế riêng',
      subtitle: 'Chúng tôi cung cấp sự kết hợp hoàn hảo giữa các sản phẩm nội thất thương hiệu hàng đầu và các giải pháp gia công tùy chỉnh theo yêu cầu, đáp ứng mọi yêu cầu về thẩm mỹ và công năng.',
      image: 'url(/assets/images/home/homepage_section1_banner_2.png)'
    },
    {
      id: 3,
      title: 'Giải pháp Nhôm kính Thẩm mỹ & Hiện đại',
      subtitle: 'Cung cấp và thi công các hệ thống nhôm kính chất lượng cao, mang lại giải pháp ánh sáng tự nhiên, cách nhiệt tối ưu và nâng cao giá trị kiến trúc.',
      image: 'url(/assets/images/home/homepage_section1_banner_3.png)'
    },
    {
      id: 4,
      title: 'Hợp đồng cung ứng Vật tư Công trình Trọn gói',
      subtitle: 'Giải pháp hợp đồng toàn diện nhằm đơn giản hóa quy trình mua sắm, tối ưu hóa nguồn lực và đảm bảo tiến độ dự án.',
      image: 'url(/assets/images/home/homepage_section1_banner_4.jpg)'
    }
  ];

  // Convert services data object to array format for display
  const servicesArray = Object.keys(servicesData).map(key => ({
    id: key,
    label: 'Dịch vụ',
    title: servicesData[key].title,
    description: servicesData[key].intro,
    image: servicesData[key].heroImage,
    link: `/services/${key}`
  }));

  const ITEMS_PER_SLIDE = 4;
  const totalServicesSlides = Math.ceil(servicesArray.length / ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextServicesSlide = () => {
    setServicesSlideIndex((prev) => (prev + 1) % totalServicesSlides);
  };

  const prevServicesSlide = () => {
    setServicesSlideIndex((prev) => (prev - 1 + totalServicesSlides) % totalServicesSlides);
  };

  const getVisibleServices = () => {
    const startIndex = servicesSlideIndex * ITEMS_PER_SLIDE;
    return servicesArray.slice(startIndex, startIndex + ITEMS_PER_SLIDE);
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
                style={{ backgroundImage: slide.image }}
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
              src="/assets/images/home/homepage_section2_img.jpg"
              loading='lazy'
              alt="Team"
              className="team-image"
            />
          </div>

          {/* Right Column - Text */}
          <div className="text-column">
            <h3>Quá trình thành lập</h3>
            
            <p>Thành lập từ năm 2021, Công ty TNHH Tư vấn Thương mại Dịch vụ Phú Tân tự hào quy tụ đội ngũ thành viên giàu kinh nghiệm và đầy tâm huyết. Tuy còn non trẻ, Phú Tân đã nhanh chóng khẳng định vị thế vững chắc, trở thành đối tác tin cậy trong lĩnh vực sản xuất và cung cấp vật liệu xây dựng (VLXD).</p>

            <p>Chúng tôi cam kết mang đến những sản phẩm VLXD chất lượng vượt trội, với mức giá cạnh tranh nhất và phương thức vận chuyển tối ưu. Sự trưởng thành nhanh chóng của Phú Tân trong vài năm qua là minh chứng cho sự tín nhiệm mà khách hàng đã dành cho chúng tôi.</p>

            <p>Với phương châm "Uy tín, Chất lượng, Tiện lợi, Hiệu quả", Phú Tân luôn đồng hành cùng các chủ đầu tư, thực hiện công tác giám sát chất lượng sản phẩm chặt chẽ. Chúng tôi không ngừng tư vấn và quản lý nguồn VLXD, đảm bảo chất lượng, an toàn, hiệu quả và đúng tiến độ. Tất cả nhằm mang lại lợi ích tối ưu cho khách hàng và đóng góp tích cực cho xã hội, xứng đáng với mọi niềm tin và kỳ vọng mà quý vị đã gửi gắm.</p>

            <div className="ceo-signature">
              <p className="ceo-sign">Trân trọng,</p>
              <p className="ceo-name">{contactInfo.representative}</p>
              <p className="ceo-title">{contactInfo.position}</p>              
            </div>
          </div>
        </div>
        </LazyLoad>
      </section>

      <section className="services-preview">
        <LazyLoad animation="slideUp" delay={100}>
          <h2>DỊCH VỤ CHÚNG TÔI CUNG CẤP</h2>
          <div className="services-carousel">
            {getVisibleServices().map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-image">
                  <img src={service.image} loading='lazy' alt={service.title} />
                </div>
                <div className="service-info">
                  <span className="service-label">{service.label}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-hover">
                  <p>{service.description}</p>
                  <a href={service.link} className="service-btn">
                    <span>➜</span> Xem Thêm
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Services Navigation - Only show if more than 4 services */}
          {servicesArray.length > 4 && (
            <div className="services-navigation">
              <button className="slider-btn prev-btn" onClick={prevServicesSlide}>
                ◀
              </button>
              <div className="services-indicators">
                {Array.from({ length: totalServicesSlides }).map((_, index) => (
                  <button
                    key={`service-slide-${servicesSlideIndex}-${index}`}
                    className={`indicator ${index === servicesSlideIndex ? 'active' : ''}`}
                    onClick={() => setServicesSlideIndex(index)}
                    aria-label={`Go to services slide ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button className="slider-btn next-btn" onClick={nextServicesSlide}>
                ▶
              </button>
            </div>
          )}
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
