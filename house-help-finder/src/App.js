import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workers from './pages/Workers';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import WorkerDetail from './pages/WorkerDetail';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { ThemeProvider } from './context/ThemeContext';
import PostJob from './pages/PostJob';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workers" element={<Workers />} />
              <Route path="/workers/:id" element={<WorkerDetail />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/success" element={<RegisterSuccess />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/post-job" element={<PostJob />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;