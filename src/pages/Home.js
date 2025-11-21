import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Công Ty Vật Liệu Xây Dựng Phú Tân</h1>
          <p>Chuyên cung cấp dịch vụ tháo dỡ, chuyển nhà, mua bán nội thất, kính cường lực</p>
          <button className="cta-button">Liên Hệ Ngay</button>
        </div>
      </section>

      <section className="services-preview">
        <h2>Lĩnh Vực Hoạt Động</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Tháo Dỡ Hoàn Trả Mặt Bằng</h3>
            <p>Dịch vụ tháo dỡ chuyên nghiệp với đội ngũ lành nghề</p>
          </div>
          <div className="service-card">
            <h3>Thu Mua Phế Liệu</h3>
            <p>Mua sắm phế liệu, vật tư kho bãi với giá tốt nhất thị trường</p>
          </div>
          <div className="service-card">
            <h3>Chuyển Nhà, Văn Phòng</h3>
            <p>Chuyên nhà, chuyên văn phòng nhanh chóng, an toàn</p>
          </div>
          <div className="service-card">
            <h3>Mua Bán Nội Thất</h3>
            <p>Kinh cường lực chất lượng cao, giá cạnh tranh</p>
          </div>
          <div className="service-card">
            <h3>Thi Công Kính Cường Lực</h3>
            <p>Thi công lắp đặt kính cường lực chuyên nghiệp</p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Tại Sao Chọn Phú Tân?</h2>
        <div className="features">
          <div className="feature">
            <h4>✓ Kinh Nghiệm</h4>
            <p>Nhiều năm kinh nghiệm trong lĩnh vực</p>
          </div>
          <div className="feature">
            <h4>✓ Đội Ngũ Chuyên Nghiệp</h4>
            <p>Đội ngũ nhân viên lành nghề, tận tâm</p>
          </div>
          <div className="feature">
            <h4>✓ Giá Cạnh Tranh</h4>
            <p>Giá dịch vụ cạnh tranh, hợp lý</p>
          </div>
          <div className="feature">
            <h4>✓ Hỗ Trợ 24/7</h4>
            <p>Hỗ trợ khách hàng 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
