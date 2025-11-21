import React from 'react';
import '../styles/News.css';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Tin Tức 1',
      date: '21/11/2025',
      content: 'Nội dung tin tức...',
      excerpt: 'Mô tả ngắn gọn về tin tức'
    },
    {
      id: 2,
      title: 'Tin Tức 2',
      date: '20/11/2025',
      content: 'Nội dung tin tức...',
      excerpt: 'Mô tả ngắn gọn về tin tức'
    },
    {
      id: 3,
      title: 'Tin Tức 3',
      date: '19/11/2025',
      content: 'Nội dung tin tức...',
      excerpt: 'Mô tả ngắn gọn về tin tức'
    }
  ];

  return (
    <div className="news">
      <div className="news-header">
        <h1>Tin Tức & Cập Nhật</h1>
        <p>Những thông tin mới nhất từ Phú Tân</p>
      </div>

      <div className="news-list">
        {news.map(item => (
          <article key={item.id} className="news-item">
            <div className="news-date">{item.date}</div>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <a href="/" className="read-more">Đọc thêm →</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
