import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Faq from './pages/Faq';
import Booking from './pages/Booking';
import SeoLanding from './pages/SeoLanding';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/photo-studio-sydney" element={<SeoLanding pageKey="photo-studio-sydney" />} />
            <Route path="/headshot-photography-sydney" element={<SeoLanding pageKey="headshot-photography-sydney" />} />
            <Route path="/maternity-photography-sydney" element={<SeoLanding pageKey="maternity-photography-sydney" />} />
            <Route path="/self-portrait-photography-sydney" element={<SeoLanding pageKey="self-portrait-photography-sydney" />} />
            <Route path="/pet-photography-sydney" element={<SeoLanding pageKey="pet-photography-sydney" />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund_returns" element={<PrivacyPolicy />} />
            <Route path="/shop" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
