import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from '../data/newsData.json';
import '../styles/NewsDetail.css';

const NewsDetail = () => {
  const { slug } = useParams();

  // Find the current news article
  const currentNews = useMemo(() => {
    return newsData.find(item => item.slug === slug);
  }, [slug]);

  // Get related news (same category, excluding current)
  const relatedNews = useMemo(() => {
    if (!currentNews) return [];
    return newsData
      .filter(item => item.category === currentNews.category && item.id !== currentNews.id)
      .slice(0, 3);
  }, [currentNews]);

  // Get latest news (excluding current)
  const latestNews = useMemo(() => {
    if (!currentNews) return [];
    return newsData
      .filter(item => item.id !== currentNews.id)
      .slice(0, 4);
  }, [currentNews]);

  // Handle not found
  if (!currentNews) {
    return (
      <div className="news-detail">
        <div className="news-not-found">
          <h2>Bài viết không tìm thấy</h2>
          <p>Xin lỗi, bài viết bạn tìm kiếm không còn tồn tại.</p>
          <Link to="/news" className="back-btn">← Quay lại Tin Tức</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail">
      {/* Hero/Banner Section */}
      <section className="detail-hero">
        <div className="hero-image-wrapper">
          <img src={currentNews.image} alt={currentNews.title} className="hero-image" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/news">Tin Tức</Link>
              <span> / </span>
              <span>{currentNews.category}</span>
            </div>
            <h1>{currentNews.title}</h1>
            <div className="article-meta">
              <span className="meta-date">📅 {currentNews.date}</span>
              <span className="meta-author">👤 {currentNews.author}</span>
              <span className="meta-category">📌 {currentNews.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="detail-content-wrapper">
        <div className="detail-container">
          {/* Main Article */}
          <article className="detail-main">
            <div className="article-body">
              {/* Summary */}
              <div className="article-summary">
                <p className="summary-text">{currentNews.description}</p>
              </div>

              {/* Full Content */}
              <div className="article-content">
                <p>{currentNews.content}</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            {/* Latest News */}
            <div className="sidebar-block">
              <h3 className="sidebar-title">Tin Tức Mới Nhất</h3>
              <div className="latest-news-list">
                {latestNews.map(item => (
                  <Link 
                    key={item.id} 
                    to={`/news/${item.slug}`}
                    className="latest-item"
                  >
                    <div className="latest-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="latest-info">
                      <div className="latest-date">{item.date}</div>
                      <h4 className="latest-title">{item.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            {relatedNews.length > 0 && (
              <div className="sidebar-block">
                <h3 className="sidebar-title">Bài Viết Liên Quan</h3>
                <div className="related-news-list">
                  {relatedNews.map(item => (
                    <Link 
                      key={item.id}
                      to={`/news/${item.slug}`}
                      className="related-item"
                    >
                      <span className="related-label">{item.category}</span>
                      <h4 className="related-title">{item.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="sidebar-block">
              <h3 className="sidebar-title">Điều Hướng</h3>
              <div className="nav-links">
                <Link to="/news" className="nav-link">← Quay lại Tin Tức</Link>
                <Link to="/" className="nav-link">← Về Trang Chủ</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
