/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MainEvent from './pages/MainEvent';
import Events from './pages/Events';
import Designers from './pages/Designers';
import Models from './pages/Models';
import Gallery from './pages/Gallery';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';
import CEO from './pages/CEO';

export default function App() {
  return (
    <BrowserRouter basename="/rajasthan-glamour-week-2026">
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/ceo" element={<CEO />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rajasthan-glamour-week" element={<MainEvent />} />
          <Route path="events" element={<Events />} />
          <Route path="designers" element={<Designers />} />
          <Route path="models" element={<Models />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
