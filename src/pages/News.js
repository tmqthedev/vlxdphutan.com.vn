import React, { useMemo, useState } from 'react';
import newsData from '../data/newsData.json';
import '../styles/News.css';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get latest news (first 3 sorted by date)
  const latestNews = useMemo(() => {
    return newsData.slice(0, 3);
  }, []);

  // Get unique categories sorted alphabetically
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(newsData.map(item => item.category))];
    return uniqueCategories.sort((a, b) => a.localeCompare(b));
  }, []);

  // Count articles by category
  const categoryCounts = useMemo(() => {
    const counts = {};
    for (const item of newsData) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter articles by selected category
  const filteredNews = useMemo(() => {
    if (!selectedCategory) {
      return newsData;
    }
    return newsData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="news">
      <div className="news-header">
        <h1>Tin Tức & Cập Nhật</h1>
        <p>Những thông tin mới nhất từ Phú Tân</p>
      </div>

      <div className="news-container">
        <div className="news-main">
          <div className="news-list">
            {filteredNews.length > 0 ? (
              filteredNews.map(item => (
                <article key={item.id} className="news-item">
                  <div className="news-image-wrapper">
                    <img src={item.image} alt={item.title} className="news-image" />
                    <div className="news-date-badge">{item.date}</div>
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-category">{item.category}</span>
                      <span className="news-author">Bởi {item.author}</span>
                    </div>
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-description">{item.description}</p>
                    <a href={`/news/${item.slug}`} className="news-btn">
                      ➜ Đọc Thêm
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-articles">
                <p>Không có bài viết nào trong danh mục này.</p>
              </div>
            )}
          </div>
        </div>

        <aside className="news-sidebar">
          {/* Latest News Section */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Tin Tức Mới Nhất</h3>
            <div className="sidebar-items">
              {latestNews.map(item => (
                <a 
                  key={item.id} 
                  href={`/news/${item.slug}`} 
                  className="sidebar-item"
                >
                  <div className="sidebar-item-date">{item.date}</div>
                  <div className="sidebar-item-title">{item.title}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Danh Mục</h3>
            <div className="sidebar-categories">
              <button 
                className={`category-link ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                <span>Tất Cả</span>
                <span className="category-count">{newsData.length}</span>
              </button>
              {categories.map(category => (
                <button 
                  key={category} 
                  className={`category-link ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span>{category}</span>
                  <span className="category-count">{categoryCounts[category]}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default News;
