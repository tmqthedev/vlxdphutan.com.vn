import React from 'react';
import '../../styles/Services.css';

const Moving = () => {
  return (
    <div className="service-detail">
      <h1>Chuyển Nhà, Chuyển Văn Phòng</h1>
      <div className="service-content">
        <section>
          <h2>Giới Thiệu Dịch Vụ</h2>
          <p>
            Dịch vụ chuyển nhà, chuyên văn phòng chuyên nghiệp của Phú Tân với đội ngũ tàn tâm, 
            nhanh chóng, an toàn, giữ nguyên vẹn toàn bộ vật dụng.
          </p>
        </section>

        <section>
          <h2>Loại Chuyển Phục Vụ</h2>
          <ul>
            <li>Chuyển nhà ở từ nhỏ đến lớn</li>
            <li>Chuyển văn phòng công ty</li>
            <li>Chuyển chi nhánh, showroom</li>
            <li>Chuyển kho hàng</li>
            <li>Chuyển máy móc, thiết bị</li>
          </ul>
        </section>

        <section>
          <h2>Quy Trình Chuyển</h2>
          <ol>
            <li>Tư vấn trước chuyển về thủ tục, giá cả</li>
            <li>Chuẩn bị vật liệu gói, đóng gói</li>
            <li>Vận chuyển an toàn</li>
            <li>Xếp hàng, lắp đặt tại nơi mới</li>
            <li>Kiểm tra, hoàn tất chuyên nhà</li>
          </ol>
        </section>

        <section>
          <h2>Lợi Ích Khi Sử Dụng</h2>
          <ul>
            <li>✓ Tiết kiệm thời gian và công sức</li>
            <li>✓ Bảo vệ hàng hóa an toàn</li>
            <li>✓ Giá dịch vụ cạnh tranh</li>
            <li>✓ Đội ngũ chuyên nghiệp</li>
            <li>✓ Hỗ trợ chuyên văn phòng ngoài giờ</li>
          </ul>
        </section>

        <section>
          <h2>Liên Hệ Ngay</h2>
          <p>
            <strong>Hotline: 0933 358 717 – 0909 583 236</strong><br />
            <strong>Zalo: 0938 251 396</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Moving;
