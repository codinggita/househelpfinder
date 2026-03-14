import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">

      <p className="font-serif text-8xl font-semibold text-green-100 mb-0"
         style={{ WebkitTextStroke: '2px #16a34a' }}>
        404
      </p>

      <h1 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
        page not found
      </h1>

      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <div className="flex gap-3 justify-center">
        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
        >
          back to home
        </Link>
        <Link
          to="/workers"
          className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          find workers
        </Link>
      </div>

    </div>
  );
}