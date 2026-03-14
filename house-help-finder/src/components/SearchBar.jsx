import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const serviceTypes = ['maid','cook','driver','babysitter','cleaner','gardener'];

export default function SearchBar() {
  const [serviceType, setServiceType] = useState('');
  const [city, setCity]               = useState('');
  const navigate                      = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (serviceType) params.set('type', serviceType);
    if (city) params.set('city', city);
    navigate(`/workers?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center bg-gray-50 border border-gray-200 rounded-xl p-3">

      <select
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        className="flex-1 min-w-[140px] bg-transparent border-none outline-none text-sm text-gray-700 px-2 py-1"
      >
        <option value="">all service types</option>
        {serviceTypes.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <div className="w-px h-6 bg-gray-200 hidden sm:block" />

      <input
        type="text"
        placeholder="enter city or area..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="flex-1 min-w-[150px] bg-transparent border-none outline-none text-sm text-gray-700 px-2 py-1 placeholder-gray-400"
      />

      <button
        onClick={handleSearch}
        className="bg-green-600 text-white text-sm px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
      >
        search
      </button>

    </div>
  );
}