import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/About.css';

const RecruitmentApply = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/about/recruitment');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="recruitment-apply">
        <div className="success-message">
          <h2>✓ Gửi Thông Tin Thành Công</h2>
          <p>Cảm ơn bạn đã ứng tuyển. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recruitment-apply">
      <div className="apply-wrapper">
        <div className="apply-left">
          <h2>Gửi Thông Tin Ứng Viên Thông Qua Biểu Mẫu Bên Cạnh</h2>
          <p>Vui lòng nhập chính xác thông tin để chúng tôi liên hệ bạn trong thời gian sớm nhất, xin cảm ơn.</p>
          
          <div className="hotline-section">
            <h4>Hoặc gọi trực tiếp hotline:</h4>
            <h1 className="hotline">0933 358 717</h1>
          </div>
        </div>

        <div className="apply-right">
          <div className="apply-container">
            <h2>Thông Tin Ứng Viên</h2>

            <form onSubmit={handleSubmit} className="apply-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Họ Và Tên"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Số Điện Thoại"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Địa chỉ"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Nội dung cần tư vấn"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="apply-btn">
                ➜ Gửi Thông Tin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentApply;
