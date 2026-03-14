import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workers from './pages/Workers';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import WorkerDetail from './pages/WorkerDetail';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/success" element={<RegisterSuccess />} />
            <Route path="/workers/:id" element={<WorkerDetail />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;