import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SiteSchemas from './components/SiteSchemas';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import CouplePoseBook from './pages/CouplePoseBook';
import LegacyContentPage from './pages/LegacyContentPage';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import legacyPages from './data/legacyPages.json';

const insightPath =
  '/photo-studio-sydney/an-insight-on-the-key-aspects-related-to-self-portrait-photography';

function App() {
  return (
    <div className="layout">
      <SiteSchemas />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pose-book/couples" element={<CouplePoseBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/single-session" element={<Shop focus="single" />} />
          <Route path="/product/group-session" element={<Shop focus="group" />} />

          {legacyPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<LegacyContentPage page={page} />}
            />
          ))}

          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/home-10-masonry-gallery" element={<Navigate to="/" replace />} />
          <Route path="/cart" element={<Navigate to="/booking" replace />} />
          <Route path="/cart-2" element={<Navigate to="/booking" replace />} />
          <Route path="/checkout" element={<Navigate to="/booking" replace />} />
          <Route path="/checkout-2" element={<Navigate to="/booking" replace />} />
          <Route path="/my-account" element={<Navigate to="/booking" replace />} />
          <Route path="/contact" element={<Navigate to="/booking" replace />} />
          <Route path="/author/wephotoad" element={<Navigate to="/blog" replace />} />
          <Route path="/product-category/uncategorized" element={<Navigate to="/shop" replace />} />
          <Route
            path="/an-insight-on-the-key-aspects-related-to-self-portrait-photography"
            element={<Navigate to={insightPath} replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
