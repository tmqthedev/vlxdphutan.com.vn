import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData.json';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  // Convert services data object to array format
  const services = Object.keys(servicesData).map(key => ({
    id: key,
    label: servicesData[key].title,
    path: `/services/${key}`
  }));

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
            <img src="/assets/images/logo.png" alt="Phú Tân Logo" />
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
