import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const workers = [
  { id: 1,  name: 'Priya Sharma',  role: 'maid',       city: 'Mumbai',     area: 'Andheri West',   exp: '4 years',  salary: 9000,  avail: 'full-time', rating: 5, initials: 'PS', color: 'bg-emerald-100 text-emerald-800' },
  { id: 2,  name: 'Kavita Rao',    role: 'cook',       city: 'Mumbai',     area: 'Bandra',         exp: '6 years',  salary: 12000, avail: 'part-time', rating: 5, initials: 'KR', color: 'bg-amber-100 text-amber-800' },
  { id: 3,  name: 'Suresh Patil',  role: 'driver',     city: 'Mumbai',     area: 'Dadar',          exp: '8 years',  salary: 15000, avail: 'full-time', rating: 4, initials: 'SP', color: 'bg-blue-100 text-blue-800' },
  { id: 4,  name: 'Raju Verma',    role: 'driver',     city: 'Delhi',      area: 'Dwarka',         exp: '7 years',  salary: 14000, avail: 'full-time', rating: 5, initials: 'RV', color: 'bg-blue-100 text-blue-800' },
  { id: 5,  name: 'Sunita Kumari', role: 'maid',       city: 'Delhi',      area: 'Rohini',         exp: '3 years',  salary: 8000,  avail: 'part-time', rating: 4, initials: 'SK', color: 'bg-emerald-100 text-emerald-800' },
  { id: 6,  name: 'Ramesh Gupta',  role: 'gardener',   city: 'Delhi',      area: 'Vasant Kunj',    exp: '5 years',  salary: 9000,  avail: 'part-time', rating: 4, initials: 'RG', color: 'bg-green-100 text-green-800' },
  { id: 7,  name: 'Sunita Devi',   role: 'cook',       city: 'Bangalore',  area: 'Koramangala',    exp: '5 years',  salary: 10500, avail: 'part-time', rating: 4, initials: 'SD', color: 'bg-amber-100 text-amber-800' },
  { id: 8,  name: 'Lakshmi S',     role: 'maid',       city: 'Bangalore',  area: 'Indiranagar',    exp: '4 years',  salary: 9500,  avail: 'full-time', rating: 5, initials: 'LS', color: 'bg-emerald-100 text-emerald-800' },
  { id: 9,  name: 'Venkat Reddy',  role: 'driver',     city: 'Bangalore',  area: 'Whitefield',     exp: '6 years',  salary: 13000, avail: 'full-time', rating: 4, initials: 'VR', color: 'bg-blue-100 text-blue-800' },
  { id: 10, name: 'Meena Patel',   role: 'babysitter', city: 'Ahmedabad',  area: 'Satellite',      exp: '2 years',  salary: 7500,  avail: 'part-time', rating: 5, initials: 'MP', color: 'bg-pink-100 text-pink-800' },
  { id: 11, name: 'Hansa Ben',     role: 'maid',       city: 'Ahmedabad',  area: 'Bopal',          exp: '5 years',  salary: 8500,  avail: 'full-time', rating: 4, initials: 'HB', color: 'bg-emerald-100 text-emerald-800' },
  { id: 12, name: 'Bharat Shah',   role: 'driver',     city: 'Ahmedabad',  area: 'Navrangpura',    exp: '9 years',  salary: 14000, avail: 'full-time', rating: 5, initials: 'BS', color: 'bg-blue-100 text-blue-800' },
  { id: 13, name: 'Arjun Singh',   role: 'cleaner',    city: 'Pune',       area: 'Wakad',          exp: '3 years',  salary: 8000,  avail: 'full-time', rating: 4, initials: 'AS', color: 'bg-green-100 text-green-800' },
  { id: 14, name: 'Sarita More',   role: 'cook',       city: 'Pune',       area: 'Kothrud',        exp: '4 years',  salary: 10000, avail: 'part-time', rating: 5, initials: 'SM', color: 'bg-amber-100 text-amber-800' },
  { id: 15, name: 'Ganesh Jadhav', role: 'driver',     city: 'Pune',       area: 'Hinjewadi',      exp: '5 years',  salary: 12000, avail: 'full-time', rating: 4, initials: 'GJ', color: 'bg-blue-100 text-blue-800' },
  { id: 16, name: 'Fatima Bi',     role: 'maid',       city: 'Hyderabad',  area: 'Banjara Hills',  exp: '6 years',  salary: 11000, avail: 'live-in',   rating: 5, initials: 'FB', color: 'bg-purple-100 text-purple-800' },
  { id: 17, name: 'Rajamma K',     role: 'cook',       city: 'Hyderabad',  area: 'Madhapur',       exp: '7 years',  salary: 13000, avail: 'full-time', rating: 5, initials: 'RK', color: 'bg-amber-100 text-amber-800' },
  { id: 18, name: 'Srinivas M',    role: 'driver',     city: 'Hyderabad',  area: 'Gachibowli',     exp: '4 years',  salary: 11000, avail: 'full-time', rating: 4, initials: 'SM', color: 'bg-blue-100 text-blue-800' },
  { id: 19, name: 'Malathi R',     role: 'maid',       city: 'Chennai',    area: 'Anna Nagar',     exp: '5 years',  salary: 9000,  avail: 'full-time', rating: 5, initials: 'MR', color: 'bg-emerald-100 text-emerald-800' },
  { id: 20, name: 'Selvam K',      role: 'driver',     city: 'Chennai',    area: 'Velachery',      exp: '10 years', salary: 16000, avail: 'full-time', rating: 5, initials: 'SK', color: 'bg-blue-100 text-blue-800' },
  { id: 21, name: 'Devi Priya',    role: 'babysitter', city: 'Chennai',    area: 'T Nagar',        exp: '3 years',  salary: 8000,  avail: 'part-time', rating: 4, initials: 'DP', color: 'bg-pink-100 text-pink-800' },
  { id: 22, name: 'Rekha Das',     role: 'maid',       city: 'Kolkata',    area: 'Salt Lake',      exp: '6 years',  salary: 8500,  avail: 'full-time', rating: 4, initials: 'RD', color: 'bg-emerald-100 text-emerald-800' },
  { id: 23, name: 'Tapan Mondal',  role: 'driver',     city: 'Kolkata',    area: 'Park Street',    exp: '8 years',  salary: 13000, avail: 'full-time', rating: 5, initials: 'TM', color: 'bg-blue-100 text-blue-800' },
  { id: 24, name: 'Gita Roy',      role: 'cook',       city: 'Kolkata',    area: 'Behala',         exp: '4 years',  salary: 9500,  avail: 'part-time', rating: 4, initials: 'GR', color: 'bg-amber-100 text-amber-800' },
  { id: 25, name: 'Champa Devi',   role: 'maid',       city: 'Jaipur',     area: 'Vaishali Nagar', exp: '3 years',  salary: 7000,  avail: 'full-time', rating: 4, initials: 'CD', color: 'bg-emerald-100 text-emerald-800' },
  { id: 26, name: 'Mohan Sharma',  role: 'driver',     city: 'Jaipur',     area: 'Malviya Nagar',  exp: '6 years',  salary: 11000, avail: 'full-time', rating: 4, initials: 'MS', color: 'bg-blue-100 text-blue-800' },
  { id: 27, name: 'Poonam Joshi',  role: 'babysitter', city: 'Jaipur',     area: 'Civil Lines',    exp: '2 years',  salary: 7000,  avail: 'part-time', rating: 5, initials: 'PJ', color: 'bg-pink-100 text-pink-800' },
  { id: 28, name: 'Rima Ben',      role: 'maid',       city: 'Surat',      area: 'Adajan',         exp: '4 years',  salary: 8000,  avail: 'full-time', rating: 4, initials: 'RB', color: 'bg-emerald-100 text-emerald-800' },
  { id: 29, name: 'Dinesh Patel',  role: 'driver',     city: 'Surat',      area: 'Vesu',           exp: '5 years',  salary: 11000, avail: 'full-time', rating: 4, initials: 'DP', color: 'bg-blue-100 text-blue-800' },
  { id: 30, name: 'Nisha Trivedi', role: 'cook',       city: 'Surat',      area: 'Athwa',          exp: '3 years',  salary: 9000,  avail: 'part-time', rating: 5, initials: 'NT', color: 'bg-amber-100 text-amber-800' },
];

const serviceTypes = ['maid','cook','driver','babysitter','cleaner','gardener'];
const availOptions = ['full-time','part-time','live-in'];
const WORKERS_PER_PAGE = 9;

export default function Workers() {
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter]   = useState('');
  const [cityFilter, setCityFilter]   = useState('');
  const [availFilter, setAvailFilter] = useState('');
  const [loading, setLoading]         = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = workers.filter((w) => {
    const matchType  = !typeFilter  || w.role === typeFilter;
    const matchCity  = !cityFilter  || w.city.toLowerCase().includes(cityFilter.toLowerCase()) || w.area.toLowerCase().includes(cityFilter.toLowerCase());
    const matchAvail = !availFilter || w.avail === availFilter;
    return matchType && matchCity && matchAvail;
  });

  const totalPages = Math.ceil(filtered.length / WORKERS_PER_PAGE);
  const paginated  = filtered.slice(
    (currentPage - 1) * WORKERS_PER_PAGE,
    currentPage * WORKERS_PER_PAGE
  );

  const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

  const availBadge = (a) => ({
    'full-time': 'bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300',
    'part-time': 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    'live-in':   'bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  }[a] || 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300');

  const resetFilters = () => {
    setTypeFilter('');
    setCityFilter('');
    setAvailFilter('');
    setCurrentPage(1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-serif text-3xl font-semibold text-gray-900 dark:text-white">all workers</h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          showing {filtered.length} worker{filtered.length !== 1 ? 's' : ''} — page {currentPage} of {totalPages || 1}
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 mb-8">
        <select
          value={typeFilter}
          onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}
          className="flex-1 min-w-[130px] bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 px-2 py-1"
        >
          <option value="">all service types</option>
          {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 hidden sm:block" />
        <input
          type="text"
          placeholder="filter by city or area..."
          value={cityFilter}
          onChange={(e) => { setCityFilter(e.target.value); setCurrentPage(1); }}
          className="flex-1 min-w-[150px] bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 px-2 py-1 placeholder-gray-400"
        />
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 hidden sm:block" />
        <select
          value={availFilter}
          onChange={(e) => { setAvailFilter(e.target.value); setCurrentPage(1); }}
          className="flex-1 min-w-[130px] bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 px-2 py-1"
        >
          <option value="">any availability</option>
          {availOptions.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
        <button
          onClick={resetFilters}
          className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 px-2 py-1"
        >
          clear
        </button>
      </div>

      {/* Cards */}
      {loading ? (
        <Spinner />
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-lg mb-1">no workers found</p>
          <p className="text-sm">try adjusting your filters</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((w) => (
              <div
                key={w.id}
                onClick={() => navigate(`/workers/${w.id}`)}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-green-400 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${w.color}`}>
                    {w.initials}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{w.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{w.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{w.city}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{w.area}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${availBadge(w.avail)}`}>{w.avail}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{w.exp} experience</p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">₹{w.salary.toLocaleString()}/mo</span>
                  <span className="text-amber-500 text-xs tracking-wider">{stars(w.rating)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 text-sm rounded-lg border transition-colors ${
                    currentPage === page
                      ? 'bg-green-600 text-white border-green-600'
                      : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}