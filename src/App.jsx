import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import useReveal from './components/useReveal';

import Home from './pages/Home';
import Enclosures from './pages/Enclosures';
import Fixed from './pages/Fixed';
import Swing from './pages/Swing';
import Sliding from './pages/Sliding';
import LShaped from './pages/LShaped';
import Glass from './pages/Glass';
import Hardware from './pages/Hardware';
import Process from './pages/Process';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Mirrors from './pages/Mirrors';
import Drains from './pages/Drains';
import Admin from './pages/Admin';

export default function App() {
  useReveal();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enclosures" element={<Enclosures />} />
        <Route path="/fixed" element={<Fixed />} />
        <Route path="/swing" element={<Swing />} />
        <Route path="/sliding" element={<Sliding />} />
        <Route path="/l-shaped" element={<LShaped />} />
        <Route path="/glass" element={<Glass />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/mirrors" element={<Mirrors />} />
        <Route path="/drains" element={<Drains />} />
        <Route path="/process" element={<Process />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </>
  );
}
