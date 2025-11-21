import React from 'react';
import '../../styles/Services.css';

const Furniture = () => {
  return (
    <div className="service-detail">
      <h1>Mua Bán Nội Thất, Kính Cường Lực</h1>
      <div className="service-content">
        <section>
          <h2>Giới Thiệu Dịch Vụ</h2>
          <p>
            Phú Tân chuyên mua bán nội thất chất lượng cao và kính cường lực với giá tốt nhất, 
            đa dạng mẫu mã, phù hợp cho gia đình, văn phòng và công ty.
          </p>
        </section>

        <section>
          <h2>Các Sản Phẩm Cung Cấp</h2>
          <h3>Nội Thất:</h3>
          <ul>
            <li>Bàn, ghế, tủ công ty</li>
            <li>Sofa, giường, tủ gia đình</li>
            <li>Kệ sách, tủ lưu trữ</li>
            <li>Bàn ăn, bàn bếp</li>
          </ul>
          <h3>Kính Cường Lực:</h3>
          <ul>
            <li>Kính cường lực khung nhôm</li>
            <li>Kính cường lực không khung</li>
            <li>Cửa kính cường lực</li>
            <li>Vách kính cường lực</li>
          </ul>
        </section>

        <section>
          <h2>Dịch Vụ Bổ Sung</h2>
          <ul>
            <li>Tư vấn thiết kế nội thất</li>
            <li>Lắp đặt kính cường lực</li>
            <li>Vận chuyển miễn phí</li>
            <li>Bảo hành sản phẩm</li>
            <li>Dịch vụ sau bán hàng</li>
          </ul>
        </section>

        <section>
          <h2>Tại Sao Chọn Chúng Tôi</h2>
          <ul>
            <li>✓ Sản phẩm chất lượng cao</li>
            <li>✓ Giá cạnh tranh, hợp lý</li>
            <li>✓ Đa dạng mẫu mã, lựa chọn</li>
            <li>✓ Vận chuyển và lắp đặt miễn phí</li>
            <li>✓ Bảo hành dài hạn</li>
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

export default Furniture;
