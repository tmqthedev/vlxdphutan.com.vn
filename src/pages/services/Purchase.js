import React from 'react';
import '../../styles/Services.css';

const Purchase = () => {
  return (
    <div className="service-detail">
      <h1>Thu Mua Phế Liệu, Vật Tư Kho Bãi</h1>
      <div className="service-content">
        <section>
          <h2>Giới Thiệu Dịch Vụ</h2>
          <p>
            Phú Tân chuyên mua các loại phế liệu, vật tư kho bãi với giá tốt nhất thị trường, 
            hỗ trợ đo đạc, vận chuyển và thanh toán nhanh chóng.
          </p>
        </section>

        <section>
          <h2>Các Loại Phế Liệu Mua</h2>
          <ul>
            <li>Sắt thép, kim loại vụn</li>
            <li>Vàng, bạc, đồng, nhôm</li>
            <li>Thiết bị điện tử cũ</li>
            <li>Gỗ thừa, phế liệu gỗ</li>
            <li>Giấy các tông, calamat</li>
            <li>Vật tư kho bãi quá hạn</li>
            <li>Máy móc, thiết bị cũ</li>
          </ul>
        </section>

        <section>
          <h2>Tại Sao Chọn Chúng Tôi</h2>
          <ul>
            <li>✓ Giá mua cao nhất thị trường</li>
            <li>✓ Thanh toán nhanh chóng, uy tín</li>
            <li>✓ Hỗ trợ vận chuyển miễn phí</li>
            <li>✓ Đo đạc chính xác</li>
            <li>✓ Xử lý thủ tục hải quan</li>
          </ul>
        </section>

        <section>
          <h2>Quy Trình Mua Bán</h2>
          <ol>
            <li>Liên hệ cung cấp thông tin phế liệu</li>
            <li>Chúng tôi gửi đội đo đạc kiểm tra</li>
            <li>Định giá và thương lượng</li>
            <li>Ký hợp đồng mua bán</li>
            <li>Vận chuyển và thanh toán</li>
          </ol>
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

export default Purchase;
