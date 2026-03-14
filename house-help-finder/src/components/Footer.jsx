import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <p className="font-serif text-lg text-green-800 font-semibold mb-2">
              House Help Finder
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Connecting households with trusted domestic workers across India.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">quick links</p>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-gray-500 hover:text-green-700 transition-colors">home</Link>
              <Link to="/workers" className="text-sm text-gray-500 hover:text-green-700 transition-colors">find workers</Link>
              <Link to="/register" className="text-sm text-gray-500 hover:text-green-700 transition-colors">register as worker</Link>
              <Link to="/about" className="text-sm text-gray-500 hover:text-green-700 transition-colors">about</Link>
<Link to="/contact" className="text-sm text-gray-500 hover:text-green-700 transition-colors">contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">services</p>
            <div className="flex flex-col gap-2">
              {['maid', 'cook', 'driver', 'babysitter', 'cleaner', 'gardener'].map((s) => (
                <Link
                  key={s}
                  to={`/workers?type=${s}`}
                  className="text-sm text-gray-500 hover:text-green-700 transition-colors capitalize"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">
            © 2025 House Help Finder. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            made with ❤️ in India
          </p>
        </div>

      </div>
    </footer>
  );
}