import React from 'react';
import { useParams, Link } from 'react-router-dom';

const workers = [
  { id: 1,  name: 'Priya Sharma',  role: 'maid',       city: 'Mumbai',     area: 'Andheri West',   exp: '4 years',  salary: 9000,  avail: 'full-time', rating: 5, initials: 'PS', color: 'bg-emerald-100 text-emerald-800', phone: '+919876543210', about: 'Experienced in full household cleaning, cooking basic meals, and managing daily chores. Trustworthy and punctual.' },
  { id: 2,  name: 'Kavita Rao',    role: 'cook',       city: 'Mumbai',     area: 'Bandra',         exp: '6 years',  salary: 12000, avail: 'part-time', rating: 5, initials: 'KR', color: 'bg-amber-100 text-amber-800',   phone: '+919111122222', about: 'Expert in South Indian and North Indian cuisine. Can handle meal prep for large families.' },
  { id: 3,  name: 'Suresh Patil',  role: 'driver',     city: 'Mumbai',     area: 'Dadar',          exp: '8 years',  salary: 15000, avail: 'full-time', rating: 4, initials: 'SP', color: 'bg-blue-100 text-blue-800',     phone: '+919333344444', about: 'Experienced Mumbai driver. Knows all routes. Clean record, punctual and professional.' },
  { id: 4,  name: 'Raju Verma',    role: 'driver',     city: 'Delhi',      area: 'Dwarka',         exp: '7 years',  salary: 14000, avail: 'full-time', rating: 5, initials: 'RV', color: 'bg-blue-100 text-blue-800',     phone: '+919123456789', about: 'Licensed driver with 7 years of experience. Knows all Delhi routes. Clean record.' },
  { id: 5,  name: 'Sunita Kumari', role: 'maid',       city: 'Delhi',      area: 'Rohini',         exp: '3 years',  salary: 8000,  avail: 'part-time', rating: 4, initials: 'SK', color: 'bg-emerald-100 text-emerald-800', phone: '+919555566666', about: 'Hardworking and reliable maid available for part-time household work.' },
  { id: 6,  name: 'Ramesh Gupta',  role: 'gardener',   city: 'Delhi',      area: 'Vasant Kunj',    exp: '5 years',  salary: 9000,  avail: 'part-time', rating: 4, initials: 'RG', color: 'bg-green-100 text-green-800',   phone: '+919777788888', about: 'Experienced gardener specialising in lawn care, pruning and seasonal planting.' },
  { id: 7,  name: 'Sunita Devi',   role: 'cook',       city: 'Bangalore',  area: 'Koramangala',    exp: '5 years',  salary: 10500, avail: 'part-time', rating: 4, initials: 'SD', color: 'bg-amber-100 text-amber-800',   phone: '+918765432109', about: 'Specialises in South Indian, North Indian and continental cuisines.' },
  { id: 8,  name: 'Lakshmi S',     role: 'maid',       city: 'Bangalore',  area: 'Indiranagar',    exp: '4 years',  salary: 9500,  avail: 'full-time', rating: 5, initials: 'LS', color: 'bg-emerald-100 text-emerald-800', phone: '+919999900000', about: 'Dedicated and thorough with household cleaning and daily chores management.' },
  { id: 9,  name: 'Venkat Reddy',  role: 'driver',     city: 'Bangalore',  area: 'Whitefield',     exp: '6 years',  salary: 13000, avail: 'full-time', rating: 4, initials: 'VR', color: 'bg-blue-100 text-blue-800',     phone: '+919800011111', about: 'Professional driver with experience in IT corridor and airport routes in Bangalore.' },
  { id: 10, name: 'Meena Patel',   role: 'babysitter', city: 'Ahmedabad',  area: 'Satellite',      exp: '2 years',  salary: 7500,  avail: 'part-time', rating: 5, initials: 'MP', color: 'bg-pink-100 text-pink-800',     phone: '+917654321098', about: 'Caring and patient babysitter. Comfortable with infants and toddlers. First aid trained.' },
  { id: 11, name: 'Hansa Ben',     role: 'maid',       city: 'Ahmedabad',  area: 'Bopal',          exp: '5 years',  salary: 8500,  avail: 'full-time', rating: 4, initials: 'HB', color: 'bg-emerald-100 text-emerald-800', phone: '+919822233333', about: 'Reliable and experienced maid for full-time household work in Ahmedabad.' },
  { id: 12, name: 'Bharat Shah',   role: 'driver',     city: 'Ahmedabad',  area: 'Navrangpura',    exp: '9 years',  salary: 14000, avail: 'full-time', rating: 5, initials: 'BS', color: 'bg-blue-100 text-blue-800',     phone: '+919944455555', about: 'Senior driver with 9 years experience. Knows Ahmedabad and Gujarat highways well.' },
  { id: 13, name: 'Arjun Singh',   role: 'cleaner',    city: 'Pune',       area: 'Wakad',          exp: '3 years',  salary: 8000,  avail: 'full-time', rating: 4, initials: 'AS', color: 'bg-green-100 text-green-800',   phone: '+916543210987', about: 'Deep cleaning specialist. Has worked with residential apartments and offices. Brings own supplies.' },
  { id: 14, name: 'Sarita More',   role: 'cook',       city: 'Pune',       area: 'Kothrud',        exp: '4 years',  salary: 10000, avail: 'part-time', rating: 5, initials: 'SM', color: 'bg-amber-100 text-amber-800',   phone: '+919866677777', about: 'Home cook specialising in Maharashtrian and North Indian food. Tiffin service available.' },
  { id: 15, name: 'Ganesh Jadhav', role: 'driver',     city: 'Pune',       area: 'Hinjewadi',      exp: '5 years',  salary: 12000, avail: 'full-time', rating: 4, initials: 'GJ', color: 'bg-blue-100 text-blue-800',     phone: '+919788899999', about: 'Experienced driver covering Hinjewadi IT park and Pune city routes.' },
  { id: 16, name: 'Fatima Bi',     role: 'maid',       city: 'Hyderabad',  area: 'Banjara Hills',  exp: '6 years',  salary: 11000, avail: 'live-in',   rating: 5, initials: 'FB', color: 'bg-purple-100 text-purple-800', phone: '+915432109876', about: 'Experienced live-in maid. Handles cooking, cleaning and childcare. Highly recommended.' },
  { id: 17, name: 'Rajamma K',     role: 'cook',       city: 'Hyderabad',  area: 'Madhapur',       exp: '7 years',  salary: 13000, avail: 'full-time', rating: 5, initials: 'RK', color: 'bg-amber-100 text-amber-800',   phone: '+919810022222', about: 'Specialises in Hyderabadi, South Indian and North Indian cuisine. Expert biryani maker.' },
  { id: 18, name: 'Srinivas M',    role: 'driver',     city: 'Hyderabad',  area: 'Gachibowli',     exp: '4 years',  salary: 11000, avail: 'full-time', rating: 4, initials: 'SM', color: 'bg-blue-100 text-blue-800',     phone: '+919920033333', about: 'Driver with 4 years experience covering Gachibowli and HITEC City routes.' },
  { id: 19, name: 'Malathi R',     role: 'maid',       city: 'Chennai',    area: 'Anna Nagar',     exp: '5 years',  salary: 9000,  avail: 'full-time', rating: 5, initials: 'MR', color: 'bg-emerald-100 text-emerald-800', phone: '+919830044444', about: 'Dependable maid with 5 years experience in Chennai households. Speaks Tamil and Hindi.' },
  { id: 20, name: 'Selvam K',      role: 'driver',     city: 'Chennai',    area: 'Velachery',      exp: '10 years', salary: 16000, avail: 'full-time', rating: 5, initials: 'SK', color: 'bg-blue-100 text-blue-800',     phone: '+919840055555', about: 'Senior driver with 10 years experience. Knows all Chennai routes including OMR and ECR.' },
  { id: 21, name: 'Devi Priya',    role: 'babysitter', city: 'Chennai',    area: 'T Nagar',        exp: '3 years',  salary: 8000,  avail: 'part-time', rating: 4, initials: 'DP', color: 'bg-pink-100 text-pink-800',     phone: '+919850066666', about: 'Caring babysitter with 3 years experience. Comfortable with newborns and toddlers.' },
  { id: 22, name: 'Rekha Das',     role: 'maid',       city: 'Kolkata',    area: 'Salt Lake',      exp: '6 years',  salary: 8500,  avail: 'full-time', rating: 4, initials: 'RD', color: 'bg-emerald-100 text-emerald-800', phone: '+919860077777', about: 'Experienced maid available for full-time work in Salt Lake and nearby areas.' },
  { id: 23, name: 'Tapan Mondal',  role: 'driver',     city: 'Kolkata',    area: 'Park Street',    exp: '8 years',  salary: 13000, avail: 'full-time', rating: 5, initials: 'TM', color: 'bg-blue-100 text-blue-800',     phone: '+919870088888', about: 'Professional driver with 8 years experience in Kolkata city and suburbs.' },
  { id: 24, name: 'Gita Roy',      role: 'cook',       city: 'Kolkata',    area: 'Behala',         exp: '4 years',  salary: 9500,  avail: 'part-time', rating: 4, initials: 'GR', color: 'bg-amber-100 text-amber-800',   phone: '+919880099999', about: 'Bengali and North Indian cuisine specialist. Available for morning and evening cooking.' },
  { id: 25, name: 'Champa Devi',   role: 'maid',       city: 'Jaipur',     area: 'Vaishali Nagar', exp: '3 years',  salary: 7000,  avail: 'full-time', rating: 4, initials: 'CD', color: 'bg-emerald-100 text-emerald-800', phone: '+919890011111', about: 'Reliable maid for full-time household work in Jaipur.' },
  { id: 26, name: 'Mohan Sharma',  role: 'driver',     city: 'Jaipur',     area: 'Malviya Nagar',  exp: '6 years',  salary: 11000, avail: 'full-time', rating: 4, initials: 'MS', color: 'bg-blue-100 text-blue-800',     phone: '+919900022222', about: 'Experienced driver covering Jaipur city and Rajasthan highway routes.' },
  { id: 27, name: 'Poonam Joshi',  role: 'babysitter', city: 'Jaipur',     area: 'Civil Lines',    exp: '2 years',  salary: 7000,  avail: 'part-time', rating: 5, initials: 'PJ', color: 'bg-pink-100 text-pink-800',     phone: '+919910033333', about: 'Gentle and caring babysitter. Has experience with kids aged 1 to 8 years.' },
  { id: 28, name: 'Rima Ben',      role: 'maid',       city: 'Surat',      area: 'Adajan',         exp: '4 years',  salary: 8000,  avail: 'full-time', rating: 4, initials: 'RB', color: 'bg-emerald-100 text-emerald-800', phone: '+919920044444', about: 'Full-time maid experienced in household cleaning and basic cooking in Surat.' },
  { id: 29, name: 'Dinesh Patel',  role: 'driver',     city: 'Surat',      area: 'Vesu',           exp: '5 years',  salary: 11000, avail: 'full-time', rating: 4, initials: 'DP', color: 'bg-blue-100 text-blue-800',     phone: '+919930055555', about: 'Reliable driver covering Surat city and South Gujarat routes.' },
  { id: 30, name: 'Nisha Trivedi', role: 'cook',       city: 'Surat',      area: 'Athwa',          exp: '3 years',  salary: 9000,  avail: 'part-time', rating: 5, initials: 'NT', color: 'bg-amber-100 text-amber-800',   phone: '+919940066666', about: 'Gujarati and North Indian cuisine specialist. Hygienic and punctual.' },
];

export default function WorkerDetail() {
  const { id } = useParams();
  const worker = workers.find((w) => w.id === parseInt(id));

  if (!worker) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center text-gray-400">
        <p className="text-xl mb-4">worker not found</p>
        <Link to="/workers" className="text-green-600 hover:underline text-sm">
          back to workers
        </Link>
      </div>
    );
  }

  const stars = '★'.repeat(worker.rating) + '☆'.repeat(5 - worker.rating);

  const availBadge = {
    'full-time': 'bg-green-50 text-green-700',
    'part-time': 'bg-blue-50 text-blue-700',
    'live-in':   'bg-purple-50 text-purple-700',
  }[worker.avail] || 'bg-gray-100 text-gray-600';

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link to="/workers" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">
        back to workers
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* Top Banner */}
        <div className="bg-green-50 px-8 py-8 flex items-center gap-5">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-semibold flex-shrink-0 ${worker.color}`}>
            {worker.initials}
          </div>
          <div>
            <h1 className="font-serif text-2xl font-semibold text-gray-900">{worker.name}</h1>
            <p className="text-green-700 capitalize font-medium mt-0.5">{worker.role}</p>
            <p className="text-amber-500 text-sm tracking-wider mt-1">{stars}</p>
          </div>
        </div>

        <div className="px-8 py-6 space-y-5">

          {/* About */}
          <div>
            <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">about</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{worker.about}</p>
          </div>

          <div className="border-t border-gray-100" />

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">location</p>
              <p className="text-sm font-medium text-gray-800">{worker.area}, {worker.city}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">experience</p>
              <p className="text-sm font-medium text-gray-800">{worker.exp}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">expected salary</p>
              <p className="text-sm font-medium text-gray-800">Rs.{worker.salary.toLocaleString()}/month</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">availability</p>
              <span className={`text-xs px-2.5 py-1 rounded-full ${availBadge}`}>{worker.avail}</span>
            </div>
          </div>

          <div className="border-t border-gray-100" />

          {/* Contact */}
          <div>
            <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">contact</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              
                <a href={"tel:" + worker.phone}
                className="flex-1 text-center bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                call {worker.phone}
              </a>
              <a href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center border border-green-600 text-green-700 py-2.5 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors"
              >
                message on whatsapp
              </a>
            </div>
            
          </div>

        </div>
      </div>
    </div>
    
  );
}