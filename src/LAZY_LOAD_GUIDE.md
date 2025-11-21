# Lazy Load Implementation Guide

## Cấu Trúc

```
src/
├── hooks/
│   └── useInView.js           # Hook để detect visibility
├── components/
│   └── LazyLoad.js            # Wrapper component cho lazy load
└── styles/
    └── Home.css               # Animations (fadeIn, slideUp, slideDown)
```

## Sử Dụng

### 1. Với Hook `useInView`

```javascript
import useInView from '../hooks/useInView';

export function MyComponent() {
  const { ref, isVisible, hasBeenVisible } = useInView({
    threshold: 0.2, // Trigger khi 20% visible
  });

  return (
    <div ref={ref}>
      {isVisible && <YourContent />}
    </div>
  );
}
```

### 2. Với Component `LazyLoad`

```javascript
import LazyLoad from '../components/LazyLoad';

export function Home() {
  return (
    <>
      {/* Fade in khi scroll tới */}
      <LazyLoad animation="fadeIn">
        <section className="about-stats">
          {/* Content */}
        </section>
      </LazyLoad>

      {/* Slide up khi scroll tới */}
      <LazyLoad animation="slideUp" delay={200}>
        <section className="services-preview">
          {/* Content */}
        </section>
      </LazyLoad>

      {/* Slide down với delay */}
      <LazyLoad animation="slideDown" delay={400} threshold={0.3}>
        <section className="why-us">
          {/* Content */}
        </section>
      </LazyLoad>
    </>
  );
}
```

## Animation Types

- **fadeIn**: Fade in từ transparent → opaque
- **slideUp**: Slide từ dưới lên với fade
- **slideDown**: Slide từ trên xuống với fade

## Props

### LazyLoad Component

| Prop | Type | Default | Mô Tả |
|------|------|---------|-------|
| children | ReactNode | - | Nội dung cần lazy load |
| className | string | '' | CSS class thêm vào |
| animation | string | 'fadeIn' | Animation type |
| delay | number | 0 | Animation delay (ms) |
| threshold | number | 0.1 | Viewport threshold (0-1) |

### useInView Hook

| Return | Type | Mô Tả |
|--------|------|-------|
| ref | React.Ref | Ref gán vào element |
| isVisible | boolean | Element hiện đang visible |
| hasBeenVisible | boolean | Element từng visible (1 lần) |

## Ví Dụ Kết Hợp

```javascript
import LazyLoad from '../components/LazyLoad';

export function Home() {
  return (
    <div className="home">
      {/* Section 1: Hero slider (tải ngay) */}
      <section className="hero-slider">
        {/* ... */}
      </section>

      {/* Section 2: Stats (lazy load) */}
      <LazyLoad animation="slideUp" threshold={0.2}>
        <section className="about-stats">
          {/* ... */}
        </section>
      </LazyLoad>

      {/* Section 3: Services (lazy load) */}
      <LazyLoad animation="fadeIn" delay={300}>
        <section className="services-preview">
          {/* ... */}
        </section>
      </LazyLoad>

      {/* Section 4: Why us (lazy load) */}
      <LazyLoad animation="slideUp" delay={600}>
        <section className="why-us">
          {/* ... */}
        </section>
      </LazyLoad>
    </div>
  );
}
```

## Performance Tips

1. **Reuse LazyLoad**: Wrap các section lớn, không từng item nhỏ
2. **Threshold tuning**: 0.1-0.3 là optimal cho hầu hết cases
3. **Delay management**: Tăng delay 200-300ms giữa các animation để tránh overwhelming
4. **CSS optimization**: Animations được GPU-accelerated (transform, opacity)

## Browser Support

- IntersectionObserver: Chrome 51+, Firefox 55+, Safari 12.1+, Edge 16+
- Fallback: Cần thêm polyfill cho IE 11
