import React, { useState } from 'react';
import '../../styles/About.css';

const Recruitment = () => {
  const [expandedId, setExpandedId] = useState(null);

  const positions = [
    {
      id: 1,
      title: 'Nhân Viên Tháo Dỡ',
      location: 'TP HCM',
      salary: 'Thỏa thuận',
      requirements: [
        'Có kinh nghiệm tháo dỡ',
        'Khỏe mạnh, có kỹ năng an toàn lao động',
        'Độc lập, có trách nhiệm'
      ]
    },
    {
      id: 2,
      title: 'Nhân Viên Chuyên Nhà',
      location: 'TP HCM',
      salary: 'Thỏa thuận',
      requirements: [
        'Có kinh nghiệm chuyên nhà',
        'Có thể làm ngoài giờ khi cần',
        'Khả năng giao tiếp tốt'
      ]
    },
    {
      id: 3,
      title: 'Nhân Viên Lắp Đặt Kính',
      location: 'TP HCM',
      salary: 'Thỏa thuận',
      requirements: [
        'Có chứng chỉ lắp đặt kính cường lực',
        'Có kinh nghiệm tối thiểu 2 năm',
        'Kỹ năng kỹ thuật tốt'
      ]
    },
    {
      id: 4,
      title: 'Nhân Viên Kinh Doanh',
      location: 'TP HCM',
      salary: 'Thỏa thuận',
      requirements: [
        'Có kinh nghiệm kinh doanh B2B',
        'Kỹ năng giao tiếp xuất sắc',
        'Ngoại hình chuyên nghiệp'
      ]
    }
  ];

  const togglePosition = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="recruitment">
      <h1>Tuyển Dụng</h1>
      <div className="recruitment-intro">
        <p>
          Phú Tân đang tìm kiếm những người tài năng, nhiệt huyết để gia nhập đội ngũ. 
          Nếu bạn có niềm đam mê với lĩnh vực của chúng tôi, vui lòng liên hệ.
        </p>
      </div>

      <div className="positions-list">
        {positions.map(position => (
          <div key={position.id} className="position-card">
            <button 
              className="position-header"
              onClick={() => togglePosition(position.id)}
            >
              <div className="position-info">
                <h3>{position.title}</h3>
                <p>{position.location} • {position.salary}</p>
              </div>
              <span className={`icon ${expandedId === position.id ? 'active' : ''}`}>▼</span>
            </button>
            {expandedId === position.id && (
              <div className="position-details">
                <h4>Yêu Cầu</h4>
                <ul>
                  {position.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <p className="apply-info">
                  Để ứng tuyển, vui lòng liên hệ:<br />
                  <strong>Email:</strong> hr@phutan.com.vn<br />
                  <strong>Hotline:</strong> 0933 358 717
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="recruitment-benefits">
        <h2>Chế Độ Phúc Lợi</h2>
        <ul>
          <li>✓ Lương cạnh tranh, thưởng thêm</li>
          <li>✓ Bảo hiểm xã hội, bảo hiểm y tế</li>
          <li>✓ Nghỉ phép năm đầy đủ</li>
          <li>✓ Đào tạo nâng cao kỹ năng</li>
          <li>✓ Môi trường làm việc thân thiện</li>
          <li>✓ Cơ hội phát triển sự nghiệp</li>
        </ul>
      </div>
    </div>
  );
};

export default Recruitment;
