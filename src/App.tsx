/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Animation from './pages/Animation';
import Rigging from './pages/Rigging';
import Production from './pages/Production';
import ContactPage from './pages/ContactPage';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <main className="font-sans antialiased selection:bg-black selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/rigging" element={<Rigging />} />
        <Route path="/production" element={<Production />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </main>
  );
}
