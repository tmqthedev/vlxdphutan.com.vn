import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/About.css';

const Recruitment = () => {
  const navigate = useNavigate();

  const positions = [
    {
      id: 1,
      title: 'Nhân Viên Tháo Dỡ',
      location: 'TP HCM',
      salary: 'Thỏa thuận',
      type: 'Full Time',
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
      type: 'Full Time',
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
      type: 'Full Time',
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
      type: 'Full Time',
      requirements: [
        'Có kinh nghiệm kinh doanh B2B',
        'Kỹ năng giao tiếp xuất sắc',
        'Ngoại hình chuyên nghiệp'
      ]
    }
  ];

  const handleApply = (positionId, positionTitle) => {
    navigate(`/recruitment/apply/${positionId}`, { state: { title: positionTitle } });
  };

  return (
    <>
      <div className="page-header">
        <h1>Thúc Đẩy Phát Triển Công Ty - Tìm Kiếm Nhân Tài</h1>
        <p>MÔI TRƯỜNG LÀM VIỆC CHUYÊN NGHIỆP, NĂNG ĐỘNG</p>
      </div>
      <div className="recruitment">
        <div className="recruitment-intro">
          <p>
            Phú Tân đang tìm kiếm những người tài năng, nhiệt huyết để gia nhập đội ngũ. 
            Nếu bạn có niềm đam mê với lĩnh vực của chúng tôi, vui lòng liên hệ.
          </p>
        </div>

        <div className="positions-list">
          {positions.map(position => (
            <button
              key={position.id} 
              className="position-card"
              onClick={() => handleApply(position.id, position.title)}
              type="button"
            >
              <div className="position-card-header">
                <span className="position-badge">{position.type}</span>
                <span className="position-location">{position.location}</span>
              </div>
              <h3 className="position-title">{position.title}</h3>
              <p className="position-salary">💰 {position.salary}</p>
              <div className="position-desc">
                <ul>
                  {position.requirements.map((req, idx) => (
                    <li key={`${position.id}-req-${idx}`}>-{req}</li>
                  ))}
                </ul>
              </div>
              <span className="position-apply-btn">
                ➜ Xem Thêm
              </span>
            </button>
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
    </>
  );
};

export default Recruitment;
