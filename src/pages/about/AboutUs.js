import React from 'react';
import '../../styles/About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Về Phú Tân</h1>
      <div className="about-content">
        <section>
          <h2>Giới Thiệu Công Ty</h2>
          <p>
            Công ty Vật Liệu Xây Dựng Phú Tân được thành lập với mục đích cung cấp các dịch vụ 
            chất lượng cao trong lĩnh vực tháo dỡ, chuyển nhà, mua bán nội thất và kính cường lực.
          </p>
        </section>

        <section>
          <h2>Thông Tin Công Ty</h2>
          <ul>
            <li><strong>Tên công ty:</strong> Công Ty TNHH Vật Liệu Xây Dựng Phú Tân</li>
            <li><strong>Mã số thuế:</strong> 0316093402</li>
            <li><strong>Địa chỉ:</strong> 22/4 Đường Lâm Văn Bền, KP4, Phường Tân Quy, Quận 7, TP HCM</li>
            <li><strong>Người đại diện:</strong> Bà Nguyễn Thị Thủy Trang</li>
            <li><strong>Chức vụ:</strong> Giám Đốc</li>
            <li><strong>Hotline:</strong> 0933 358 717 – 0909 583 236</li>
          </ul>
        </section>

        <section>
          <h2>Tầm Nhìn & Sứ Mệnh</h2>
          <h3>Tầm Nhìn</h3>
          <p>
            Trở thành đơn vị hàng đầu trong lĩnh vực cung cấp dịch vụ vật liệu xây dựng, 
            tháo dỡ, chuyển nhà và mua bán nội thất tại TP HCM.
          </p>
          <h3>Sứ Mệnh</h3>
          <p>
            Cung cấp dịch vụ chất lượng cao, giá cạnh tranh, với đội ngũ chuyên nghiệp 
            và tận tâm với khách hàng.
          </p>
        </section>

        <section>
          <h2>Giá Trị Cốt Lõi</h2>
          <ul>
            <li><strong>Chất Lượng:</strong> Luôn đặt chất lượng dịch vụ lên hàng đầu</li>
            <li><strong>Uy Tín:</strong> Thành thật và trung thực trong mọi giao dịch</li>
            <li><strong>Chuyên Nghiệp:</strong> Đội ngũ lành nghề, có kinh nghiệm</li>
            <li><strong>Tận Tâm:</strong> Phục vụ khách hàng hết lòng</li>
          </ul>
        </section>

        <section>
          <h2>Lịch Sử Phát Triển</h2>
          <p>
            Từ khi thành lập, Phú Tân đã phục vụ hàng ngàn khách hàng cá nhân và doanh nghiệp, 
            xây dựng uy tín và niềm tin từ khách hàng. Chúng tôi không ngừng cải tiến dịch vụ, 
            đầu tư trang thiết bị hiện đại và nâng cao kỹ năng đội ngũ nhân viên.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
