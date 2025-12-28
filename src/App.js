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
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

// Lazy load service pages
const GroundSolutions = lazy(() => import('./pages/services/GroundSolutions'));
const BespokeInterior = lazy(() => import('./pages/services/BespokeInterior'));
const LooseMaterials = lazy(() => import('./pages/services/LooseMaterials'));
const AluminumGlassMaterials = lazy(() => import('./pages/services/AluminumGlassMaterials'));

// Lazy load about pages
const AboutUs = lazy(() => import('./pages/about/AboutUs'));
const FAQPage = lazy(() => import('./pages/about/FAQ'));
const Recruitment = lazy(() => import('./pages/about/Recruitment'));
const RecruitmentApply = lazy(() => import('./pages/about/RecruitmentApply'));

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
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productSlug" element={<ProductDetail />} />

            {/* Services routes */}
            <Route path="/services/ground-solutions" element={<GroundSolutions />} />
            <Route path="/services/bespoke-interior" element={<BespokeInterior />} />
            <Route path="/services/raw-materials" element={<LooseMaterials />} />
            <Route path="/services/aluminum-glass-materials" element={<AluminumGlassMaterials />} />

            {/* About routes */}
            <Route path="/about/us" element={<AboutUs />} />
            <Route path="/about/faq" element={<FAQPage />} />
            <Route path="/about/recruitment" element={<Recruitment />} />
            <Route path="/recruitment/apply/:positionId" element={<RecruitmentApply />} />

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
