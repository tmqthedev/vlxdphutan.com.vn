# Assets Folder Structure

Cấu trúc thư mục `assets` được organize theo từng loại resources và trang:

## Cấu Trúc

```
assets/
├── images/
│   ├── home/                 # Hình ảnh cho trang Home (banners, hero, slides)
│   ├── services/             # Hình ảnh cho các trang dịch vụ (5 services)
│   ├── about/                # Hình ảnh cho trang About (company info, team)
│   ├── projects/             # Hình ảnh cho trang Projects (dự án, portfolio)
│   ├── news/                 # Hình ảnh cho trang News (bài viết, tin tức)
│   └── team/                 # Ảnh đội ngũ, nhân sự
├── icons/                    # Icon SVG cho menu, buttons, features
├── logos/                    # Logo công ty (header, footer)
├── videos/                   # Video promotional, demo
└── fonts/                    # Custom fonts (nếu có)
```

## Quy Ước Đặt Tên File

- **Images**: `kebab-case` (vd: `hero-banner-1.jpg`, `team-photo.jpg`)
- **Icons**: `icon-[name].svg` (vd: `icon-phone.svg`, `icon-location.svg`)
- **Logos**: `logo-[variant].svg` (vd: `logo-main.svg`, `logo-white.svg`)

## Sử Dụng Trong Component

```javascript
import heroImage from '../assets/images/home/hero-banner.jpg';

export default function Home() {
  return <img src={heroImage} alt="Hero Banner" />;
}
```

## Kích Thước Hình Ảnh Khuyến Nghị

- **Hero Banner**: 1920x600px (full-width slider)
- **Team Photo**: 400x500px (vertical)
- **Project Thumbnail**: 400x300px (landscape)
- **Service Icon**: 64x64px (svg)
- **Logo**: 200x80px (svg)
