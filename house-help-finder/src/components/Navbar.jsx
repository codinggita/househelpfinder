import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `text-sm transition-colors ${
      location.pathname === path
        ? 'text-green-700 font-medium'
        : 'text-gray-500 hover:text-gray-800'
    }`;

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="leading-tight">
          <span className="font-serif text-xl text-green-800 font-semibold">
            House Help Finder
          </span>
          <span className="block text-xs text-gray-400 font-light tracking-wide">
            domestic services platform
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className={linkClass('/')}>home</Link>
          <Link to="/workers" className={linkClass('/workers')}>find workers</Link>
          <Link to="/about" className={linkClass('/about')}>about</Link>
          <Link to="/contact" className={linkClass('/contact')}>contact</Link>
          <Link to="/register" className={linkClass('/register')}>register as worker</Link>
          <Link
            to="/register"
            className="bg-green-600 text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
          >
            post a job
          </Link>
        </div>

      </div>
    </nav>
  );
}