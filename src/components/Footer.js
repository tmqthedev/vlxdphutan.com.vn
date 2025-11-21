import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Liên Hệ Nhanh</h3>
          <div className="footer-contact">
            <p>
              <strong>Địa chỉ:</strong> 22/4 Đường Lâm Văn Bền, KP4, Phường Tân Quy, Quận 7, TP HCM
            </p>
            <p>
              <strong>Hotline công ty:</strong> 0933 358 717 – 0909 583 236
            </p>
            <p>
              <strong>Hotline Zalo:</strong> 0938 251 396
            </p>
            <p>
              <strong>Mã số thuế:</strong> 0316093402
            </p>
            <p>
              <strong>Tài khoản:</strong> 037 1000 521 890 Tại Ngân hàng – TMCP Ngoại Thương VN CN Tân Định
            </p>
            <p>
              <strong>Người đại diện:</strong> Bà NGUYỄN THỊ THỦY TRANG
            </p>
            <p>
              <strong>Chức vụ:</strong> Giám đốc
            </p>
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
            <li><Link to="/services/demolition">Tháo dỡ hoàn trả mặt bằng</Link></li>
            <li><Link to="/services/purchase">Thu mua phế liệu, vật tư kho bãi</Link></li>
            <li><Link to="/services/moving">Chuyên nhà, chuyên văn phòng</Link></li>
            <li><Link to="/services/furniture">Mua bán nội thất, kính cường lực</Link></li>
            <li><Link to="/services/installation">Thi công lắp đặt kính cường lực</Link></li>
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
        <div className="footer-copyright">
          <p>©2024 Daiquangminhcorp. Bảo lưu mọi quyền. Được thiết kế bởi VIDOWEB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
