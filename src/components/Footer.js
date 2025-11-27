import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData.json';
import contactInfo from '../data/contactInfo.json';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Liên Hệ Nhanh</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-label">Địa chỉ: </span>
              <span className="contact-value">{contactInfo.address}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Hotline công ty: </span>
              <span className="contact-value">{contactInfo.hotline}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Hotline Zalo: </span>
              <span className="contact-value">{contactInfo.hotlineZalo}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Mã số thuế: </span>
              <span className="contact-value">{contactInfo.taxId}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Tài khoản: </span>
              <span className="contact-value">{contactInfo.bankAccount} - {contactInfo.bankName}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Người đại diện: </span>
              <span className="contact-value">{contactInfo.representative} - {contactInfo.position}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email: </span>
              <span className="contact-value">{contactInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Về Chúng Tôi</h3>
          <ul>
            <li><Link to="/about/us">Về Chúng Tôi</Link></li>
            <li><Link to="/about/recruitment">Tuyển dụng</Link></li>
            <li><Link to="/about/faq">Câu hỏi thường gặp</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Dịch Vụ</h3>
          <ul>
            {Object.keys(servicesData).map(key => (
              <li key={key}>
                <Link to={`/services/${key}`}>{servicesData[key].title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/">Điều khoản và Điều kiện</Link>
          <span> - </span>
          <Link to="/">Chính sách bảo mật</Link>
          <span> - </span>
          <Link to="/">Sơ đồ trang web</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
