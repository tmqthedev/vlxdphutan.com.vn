import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const services = [
    { id: 'demolition', label: 'Tháo dỡ hoàn trả mặt bằng', path: '/services/demolition' },
    { id: 'purchase', label: 'Thu mua phế liệu, vật tư kho bãi', path: '/services/purchase' },
    { id: 'moving', label: 'Chuyển nhà, chuyển văn phòng', path: '/services/moving' },
    { id: 'furniture', label: 'Mua bán nội thất, kính cường lực', path: '/services/furniture' },
    { id: 'installation', label: 'Thi công lắp đặt kính cường lực', path: '/services/installation' }
  ];

  const about = [
    { label: 'Về Phú Tân', path: '/about/us' },
    { label: 'Câu hỏi thường gặp', path: '/about/faq' },
    { label: 'Tuyển dụng', path: '/about/recruitment' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>PHÚ TÂN</h1>
            <p>Vật Liệu Xây Dựng</p>
          </Link>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Trang Chủ
              </Link>
            </li>

            <li className="nav-item-dropdown">
              <button 
                className="nav-link-dropdown"
                onClick={() => toggleSubmenu('services')}
              >
                Lĩnh Vực Hoạt Động
                <span className="dropdown-arrow">▼</span>
              </button>
              <ul className={`submenu ${activeSubmenu === 'services' ? 'active' : ''}`}>
                {services.map(service => (
                  <li key={service.id}>
                    <Link to={service.path} onClick={() => setIsOpen(false)}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Dự Án
              </Link>
            </li>

            <li className="nav-item-dropdown">
              <button 
                className="nav-link-dropdown"
                onClick={() => toggleSubmenu('about')}
              >
                Giới Thiệu
                <span className="dropdown-arrow">▼</span>
              </button>
              <ul className={`submenu ${activeSubmenu === 'about' ? 'active' : ''}`}>
                {about.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/news" onClick={() => setIsOpen(false)}>
                Tin Tức
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Liên Hệ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
