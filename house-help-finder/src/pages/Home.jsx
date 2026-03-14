import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-10 border-b border-gray-200 mb-10">

        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-4 text-gray-900">
            Find trusted{' '}
            <span className="text-green-600">home help</span>{' '}
            in your neighbourhood
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Connect with verified maids, cooks, drivers, babysitters and
            cleaners near you — quickly, safely and transparently.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/workers"
              className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              find workers
            </Link>
            <Link
              to="/register"
              className="border border-green-600 text-green-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
            >
              register as worker
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { num: '1,200+', label: 'registered workers' },
            { num: '48',     label: 'cities covered' },
            { num: '4.8★',   label: 'avg. rating' },
            { num: '3 min',  label: 'avg. match time' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="font-serif text-3xl text-green-800 font-semibold">{s.num}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Search */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-semibold mb-4">search for help</h2>
        <SearchBar />
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-semibold mb-5">how it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: '01', title: 'search & filter',  desc: 'Use service type, city, and experience filters to find the right match.' },
            { num: '02', title: 'view profiles',    desc: 'Browse detailed worker profiles with skills, experience and salary.' },
            { num: '03', title: 'contact directly', desc: 'Reach workers directly via phone — no middlemen, no hidden fees.' },
          ].map((s) => (
            <div key={s.num} className="bg-gray-50 rounded-xl p-6">
              <p className="font-serif text-4xl font-semibold text-green-200 mb-2"
                 style={{ WebkitTextStroke: '1.5px #16a34a' }}>
                {s.num}
              </p>
              <h3 className="font-medium text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Worker CTA */}
      <section className="bg-green-50 border border-green-200 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-green-800">
            are you a domestic worker?
          </h3>
          <p className="text-sm text-green-700 mt-1">
            Register your profile for free and get discovered by hundreds of households.
          </p>
        </div>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap"
        >
          register now — it's free
        </Link>
      </section>

    </div>
  );
}