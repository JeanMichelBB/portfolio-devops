import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";

// Import all the subject components
import Linux from './pages/Linux';
import Git from './pages/Git';
import Python from './pages/Python';
import Docker from './pages/Docker';
import Networking from './pages/Networking';
import Kubernetes from './pages/Kubernetes';
import Monitoring from './pages/Monitoring';
import NGINX from './pages/NGINX';
import Terraform from './pages/Terraform';
import Ansible from './pages/Ansible';
import Cloud from './pages/Cloud';
import CICD from './pages/CICD';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <main className="text-gray-800 font-sans">
        <Header />
        <main className="bg-white">
          <Routes>
            {/* Home, About, Contact routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Subject routes */}
            <Route path="/linux-bash" element={<Linux />} />
            <Route path="/git" element={<Git />} />
            <Route path="/python" element={<Python />} />
            <Route path="/docker" element={<Docker />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/kubernetes" element={<Kubernetes />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/nginx" element={<NGINX />} />
            <Route path="/terraform" element={<Terraform />} />
            <Route path="/ansible" element={<Ansible />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/cicd" element={<CICD />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </main>
    </Router>
  );
};

export default App;