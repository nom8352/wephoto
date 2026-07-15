import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SiteSchemas from './components/SiteSchemas';
import Home from './pages/Home';
import PoseBook from './pages/PoseBook';
import CouplePoseBook from './pages/CouplePoseBook';
import SocialMediaPoseBook from './pages/SocialMediaPoseBook';
import Guides from './pages/Guides';
import Blog from './pages/Blog';
import About from './pages/About';
import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegacyContentPage from './pages/LegacyContentPage';
import NotFound from './pages/NotFound';
import legacyPages from './data/legacyPages.json';
import { activeLegacyPaths, retiredRedirects } from './seo/siteRoutes';

const activeLegacyPages = legacyPages.filter((page) => activeLegacyPaths.has(page.path));

function App() {
  return (
    <div className="layout">
      <SiteSchemas />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pose-book" element={<PoseBook />} />
          <Route path="/pose-book/couples" element={<CouplePoseBook />} />
          <Route path="/pose-book/social-media" element={<SocialMediaPoseBook />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {activeLegacyPages.map((page) => (
            <Route key={page.path} path={page.path} element={<LegacyContentPage page={page} />} />
          ))}

          {retiredRedirects.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
