import React from 'react';
import '../../styles/Services.css';

const Demolition = () => {
  return (
    <div className="service-detail">
      <h1>Tháo Dỡ Hoàn Trả Mặt Bằng</h1>
      <div className="service-content">
        <section>
          <h2>Giới Thiệu Dịch Vụ</h2>
          <p>
            Phú Tân chuyên cung cấp dịch vụ tháo dỡ hoàn trả mặt bằng với đội ngũ chuyên nghiệp, 
            thiết bị hiện đại và kinh nghiệm lâu năm trong lĩnh vực.
          </p>
        </section>

        <section>
          <h2>Các Công Việc Cung Cấp</h2>
          <ul>
            <li>Tháo dỡ hoàn toàn các công trình, tòa nhà</li>
            <li>Tháo dỡ nội thất, thiết bị cơ điện</li>
            <li>Dọn dẹp vệ sinh sau tháo dỡ</li>
            <li>Xử lý chất thải theo quy định</li>
            <li>Thu mua các vật liệu tháo dỡ có giá trị</li>
          </ul>
        </section>

        <section>
          <h2>Ưu Điểm</h2>
          <ul>
            <li>✓ Đội ngũ chuyên nghiệp, có chứng chỉ</li>
            <li>✓ Thiết bị tháo dỡ hiện đại</li>
            <li>✓ Đảm bảo an toàn lao động</li>
            <li>✓ Giá cạnh tranh, hợp lý</li>
            <li>✓ Hoàn thành đúng tiến độ</li>
          </ul>
        </section>

        <section>
          <h2>Liên Hệ Ngay</h2>
          <p>
            Để được tư vấn chi tiết và báo giá, vui lòng liên hệ:<br />
            <strong>Hotline: 0933 358 717 – 0909 583 236</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Demolition;
