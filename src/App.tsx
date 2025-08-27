import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import './styles/mobile.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import PestLibrary from './pages/PestLibrary';
import PestCategory from './pages/PestCategory';
import PestDetail from './pages/PestDetail';
import ServiceAreas from './pages/ServiceAreas';
import ServiceAreaDetail from './pages/ServiceAreaDetail';
import Services from './pages/Services';
import ResidentialServices from './pages/ResidentialServices';
import CommercialServices from './pages/CommercialServices';
import RestaurantServices from './pages/RestaurantServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Emergency from './pages/Emergency';
import CamdenBoroughPage from './pages/CamdenBoroughPage';
import IslingtonBoroughPage from './pages/IslingtonBoroughPage';
import BlogNew from './pages/BlogNew';
import BlogPostNew from './pages/BlogPostNew';
import BlogAdminProtected from './pages/BlogAdminProtected';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            
            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/residential" element={<ResidentialServices />} />
            <Route path="/services/commercial" element={<CommercialServices />} />
            <Route path="/services/restaurants" element={<RestaurantServices />} />
            <Route path="/emergency" element={<Emergency />} />
            
            {/* Pest Library */}
            <Route path="/pest-library" element={<PestLibrary />} />
            <Route path="/pest-library/:pestId" element={<PestDetail />} />
            <Route path="/pest-library/:category/:pestId" element={<PestDetail />} />
            
            {/* Service Areas */}
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/camden" element={<CamdenBoroughPage />} />
            <Route path="/service-areas/islington" element={<IslingtonBoroughPage />} />
            <Route path="/service-areas/:areaId" element={<ServiceAreaDetail />} />

            {/* Company */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogNew />} />
            <Route path="/blog/admin" element={<BlogAdminProtected />} />
            <Route path="/blog/:slug" element={<BlogPostNew />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
