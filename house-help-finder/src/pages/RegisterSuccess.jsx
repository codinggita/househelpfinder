import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterSuccess() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="font-serif text-3xl font-semibold text-gray-900 mb-3">registration submitted!</h1>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Your profile has been received and will be live shortly.<br />
        Households in your area can now find you.
      </p>
      <div className="flex gap-3 justify-center">
        <Link to="/" className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
          back to home
        </Link>
        <Link to="/workers" className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
          browse workers
        </Link>
      </div>
    </div>
  );
}