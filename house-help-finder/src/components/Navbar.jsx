import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, setDark } = useTheme();

  const linkClass = (path) =>
    `text-sm transition-colors ${
      location.pathname === path
        ? 'text-green-700 font-medium'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
    }`;

  const mobileLinkClass = (path) =>
    `block px-4 py-3 text-sm rounded-lg transition-colors ${
      location.pathname === path
        ? 'text-green-700 font-medium bg-green-50 dark:bg-green-900'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
    }`;

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="leading-tight">
          <span className="font-serif text-xl text-green-800 dark:text-green-400 font-semibold">
            House Help Finder
          </span>
          <span className="block text-xs text-gray-400 dark:text-gray-500 font-light tracking-wide">
            domestic services platform
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/"         className={linkClass('/')}>home</Link>
          <Link to="/workers"  className={linkClass('/workers')}>find workers</Link>
          <Link to="/about"    className={linkClass('/about')}>about</Link>
          <Link to="/contact"  className={linkClass('/contact')}>contact</Link>
          <Link to="/register" className={linkClass('/register')}>register as worker</Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? '☀️ light' : '🌙 dark'}
          </button>

          <Link
            to="/post-job"
            className="bg-green-600 text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
          >
            post a job
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-700 px-4 py-3 space-y-1 bg-white dark:bg-gray-900 transition-colors">
          <Link to="/"         onClick={() => setMenuOpen(false)} className={mobileLinkClass('/')}>home</Link>
          <Link to="/workers"  onClick={() => setMenuOpen(false)} className={mobileLinkClass('/workers')}>find workers</Link>
          <Link to="/about"    onClick={() => setMenuOpen(false)} className={mobileLinkClass('/about')}>about</Link>
          <Link to="/contact"  onClick={() => setMenuOpen(false)} className={mobileLinkClass('/contact')}>contact</Link>
          <Link to="/faq"      onClick={() => setMenuOpen(false)} className={mobileLinkClass('/faq')}>faq</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className={mobileLinkClass('/register')}>register as worker</Link>

          {/* Dark Mode Toggle Mobile */}
          <button
            onClick={() => setDark(!dark)}
            className="w-full text-left px-4 py-3 text-sm rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? '☀️ light mode' : '🌙 dark mode'}
          </button>

          <div className="pt-2 pb-1">
            <Link
              to="/post-job"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-green-600 text-white text-sm px-4 py-2.5 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              post a job
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}