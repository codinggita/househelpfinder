import React, { useState } from 'react';
import { workers, serviceTypes, availOptions, cities } from '../data/workers';

const serviceTypes = ['maid','cook','driver','babysitter','cleaner','gardener'];
const availOptions = ['full-time','part-time','live-in'];

export default function Workers() {
  const [typeFilter, setTypeFilter]   = useState('');
  const [cityFilter, setCityFilter]   = useState('');
  const [availFilter, setAvailFilter] = useState('');

  const filtered = workers.filter((w) => {
    const matchType  = !typeFilter  || w.role === typeFilter;
    const matchCity  = !cityFilter  || w.city.toLowerCase().includes(cityFilter.toLowerCase()) || w.area.toLowerCase().includes(cityFilter.toLowerCase());
    const matchAvail = !availFilter || w.avail === availFilter;
    return matchType && matchCity && matchAvail;
  });

  const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

  const availBadge = (a) => ({
    'full-time': 'bg-green-50 text-green-700',
    'part-time': 'bg-blue-50 text-blue-700',
    'live-in':   'bg-purple-50 text-purple-700',
  }[a] || 'bg-gray-100 text-gray-600');

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-serif text-3xl font-semibold">all workers</h1>
        <span className="text-sm text-gray-500">
          showing {filtered.length} worker{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center bg-gray-50 border border-gray-200 rounded-xl p-3 mb-8">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="flex-1 min-w-[130px] bg-transparent border-none outline-none text-sm text-gray-700 px-2 py-1"
        >
          <option value="">all service types</option>
          {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <div className="w-px h-6 bg-gray-200 hidden sm:block" />

        <input
          type="text"
          placeholder="filter by city or area..."
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="flex-1 min-w-[150px] bg-transparent border-none outline-none text-sm text-gray-700 px-2 py-1 placeholder-gray-400"
        />

        <div className="w-px h-6 bg-gray-200 hidden sm:block" />

        <select
          value={availFilter}
          onChange={(e) => setAvailFilter(e.target.value)}
          className="flex-1 min-w-[130px] bg-transparent border-none outline-none text-sm text-gray-700 px-2 py-1"
        >
          <option value="">any availability</option>
          {availOptions.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>

        <button
          onClick={() => { setTypeFilter(''); setCityFilter(''); setAvailFilter(''); }}
          className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1"
        >
          clear
        </button>
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg mb-1">no workers found</p>
          <p className="text-sm">try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((w) => (
            <div key={w.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-green-400 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${w.color}`}>
                  {w.initials}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{w.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{w.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{w.city}</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{w.area}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full ${availBadge(w.avail)}`}>{w.avail}</span>
              </div>

              <p className="text-xs text-gray-500 mb-3">{w.exp} experience</p>

              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-sm font-medium text-green-700">
                  ₹{w.salary.toLocaleString()}/mo
                </span>
                <span className="text-amber-500 text-xs tracking-wider">{stars(w.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}