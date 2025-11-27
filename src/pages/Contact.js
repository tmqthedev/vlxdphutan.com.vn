import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Liên Hệ Với Chúng Tôi</h1>
        <p>Hãy để lại thông tin, chúng tôi sẽ liên hệ lại bạn sớm nhất</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-map-wrapper">
            <iframe 
              title="Bản đồ địa chỉ công ty Phú Tân"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8825739960866!2d106.68682687363366!3d11.047429889118266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d0266b1b23c1%3A0x6a4d74ac71b0e48!2zxJDGsOG7nW5nIE5CNSwgUGjDuiBN4bu5LCBUcC4gVGjhu6cgROG6p3UgTeG7mXQsIELDrG5oIETGsMahbmcsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1764221945519!5m2!1sen!2s"
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <h3>Thông Tin Liên Hệ</h3>
          <p>
            <strong>Địa chỉ:</strong><br />
             Số 35, đường NB5, khu 01, Phường Bình Dương, Thành phố Hồ Chí Minh.
          </p>
          <p>
            <strong>Hotline:</strong><br />
            0937 685 069
          </p>
          <p>
            <strong>Hotline Zalo:</strong><br />
            0915 899 071
          </p>
          <p>
            <strong>Email:</strong><br />
            thuongmaiphutan@gmail.com
          </p>
          <p>
            <strong>Giờ làm việc:</strong><br />
            Thứ Hai - Thứ Sáu: 08:00 - 17:30<br />
            Thứ Bảy: 08:00 - 12:00<br />
            Chủ Nhật: Nghỉ
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Họ và Tên</label>
            <input id="fullname" type="text" placeholder="Nhập họ và tên" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Nhập email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số Điện Thoại</label>
            <input id="phone" type="tel" placeholder="Nhập số điện thoại" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Dịch Vụ Cần</label>
            <select id="service" required>
              <option value="">-- Chọn dịch vụ --</option>
              <option value="ground-solutions">Giải Pháp Gia Cố Nền Móng Chuyên Sâu</option>
              <option value="bespoke-interior">Thiết bị Nội thất & Thiết kế riêng</option>
              <option value="glazing-solutions">Giải pháp Nhôm kính Thẩm mỹ & Hiện đại</option>
              <option value="material-supply-contract">Hợp đồng cung ứng Vật tư Công trình Trọn gói</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Nội Dung</label>
            <textarea id="message" placeholder="Nhập nội dung tin nhắn" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Gửi Tin Nhắn</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
