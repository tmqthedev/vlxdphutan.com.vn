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
          <h3>Thông Tin Liên Hệ</h3>
          <p>
            <strong>Địa chỉ:</strong><br />
            22/4 Đường Lâm Văn Bền, KP4, Phường Tân Quy, Quận 7, TP HCM
          </p>
          <p>
            <strong>Hotline:</strong><br />
            0933 358 717 – 0909 583 236
          </p>
          <p>
            <strong>Hotline Zalo:</strong><br />
            0938 251 396
          </p>
          <p>
            <strong>Email:</strong><br />
            info@phutan.com.vn
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
            <label>Họ và Tên</label>
            <input type="text" placeholder="Nhập họ và tên" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Nhập email" required />
          </div>
          <div className="form-group">
            <label>Số Điện Thoại</label>
            <input type="tel" placeholder="Nhập số điện thoại" required />
          </div>
          <div className="form-group">
            <label>Dịch Vụ Cần</label>
            <select required>
              <option value="">-- Chọn dịch vụ --</option>
              <option value="demolition">Tháo dỡ hoàn trả mặt bằng</option>
              <option value="purchase">Thu mua phế liệu, vật tư kho bãi</option>
              <option value="moving">Chuyển nhà, chuyển văn phòng</option>
              <option value="furniture">Mua bán nội thất, kính cường lực</option>
              <option value="installation">Thi công lắp đặt kính cường lực</option>
            </select>
          </div>
          <div className="form-group">
            <label>Nội Dung</label>
            <textarea placeholder="Nhập nội dung tin nhắn" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Gửi Tin Nhắn</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
