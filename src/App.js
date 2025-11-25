import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load service pages
const Demolition = lazy(() => import('./pages/services/Demolition'));
const Purchase = lazy(() => import('./pages/services/Purchase'));
const Moving = lazy(() => import('./pages/services/Moving'));
const Furniture = lazy(() => import('./pages/services/Furniture'));
const Installation = lazy(() => import('./pages/services/Installation'));

// Lazy load about pages
const AboutUs = lazy(() => import('./pages/about/AboutUs'));
const FAQPage = lazy(() => import('./pages/about/FAQ'));
const Recruitment = lazy(() => import('./pages/about/Recruitment'));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Scroll to top when route changes
  useScrollToTop();

  return (
    <>
      <Header />
      <main className={`main-content ${isHome ? 'home-page' : ''}`}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services routes */}
            <Route path="/services/demolition" element={<Demolition />} />
            <Route path="/services/purchase" element={<Purchase />} />
            <Route path="/services/moving" element={<Moving />} />
            <Route path="/services/furniture" element={<Furniture />} />
            <Route path="/services/installation" element={<Installation />} />

            {/* About routes */}
            <Route path="/about/us" element={<AboutUs />} />
            <Route path="/about/faq" element={<FAQPage />} />
            <Route path="/about/recruitment" element={<Recruitment />} />

            {/* 404 - Not found */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
