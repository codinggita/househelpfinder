export const workers = [
  // Mumbai
  { id: 1,  name: 'Priya Sharma',    role: 'maid',       city: 'Mumbai',     area: 'Andheri West',    exp: '4 years', salary: 9000,  avail: 'full-time', rating: 5, initials: 'PS', color: 'bg-emerald-100 text-emerald-800' },
  { id: 2,  name: 'Kavita Rao',      role: 'cook',       city: 'Mumbai',     area: 'Bandra',          exp: '6 years', salary: 12000, avail: 'part-time', rating: 5, initials: 'KR', color: 'bg-amber-100 text-amber-800' },
  { id: 3,  name: 'Suresh Patil',    role: 'driver',     city: 'Mumbai',     area: 'Dadar',           exp: '8 years', salary: 15000, avail: 'full-time', rating: 4, initials: 'SP', color: 'bg-blue-100 text-blue-800' },

  // Delhi
  { id: 4,  name: 'Raju Verma',      role: 'driver',     city: 'Delhi',      area: 'Dwarka',          exp: '7 years', salary: 14000, avail: 'full-time', rating: 5, initials: 'RV', color: 'bg-blue-100 text-blue-800' },
  { id: 5,  name: 'Sunita Kumari',   role: 'maid',       city: 'Delhi',      area: 'Rohini',          exp: '3 years', salary: 8000,  avail: 'part-time', rating: 4, initials: 'SK', color: 'bg-emerald-100 text-emerald-800' },
  { id: 6,  name: 'Ramesh Gupta',    role: 'gardener',   city: 'Delhi',      area: 'Vasant Kunj',     exp: '5 years', salary: 9000,  avail: 'part-time', rating: 4, initials: 'RG', color: 'bg-green-100 text-green-800' },

  // Bangalore
  { id: 7,  name: 'Sunita Devi',     role: 'cook',       city: 'Bangalore',  area: 'Koramangala',     exp: '5 years', salary: 10500, avail: 'part-time', rating: 4, initials: 'SD', color: 'bg-amber-100 text-amber-800' },
  { id: 8,  name: 'Lakshmi S',       role: 'maid',       city: 'Bangalore',  area: 'Indiranagar',     exp: '4 years', salary: 9500,  avail: 'full-time', rating: 5, initials: 'LS', color: 'bg-emerald-100 text-emerald-800' },
  { id: 9,  name: 'Venkat Reddy',    role: 'driver',     city: 'Bangalore',  area: 'Whitefield',      exp: '6 years', salary: 13000, avail: 'full-time', rating: 4, initials: 'VR', color: 'bg-blue-100 text-blue-800' },

  // Ahmedabad
  { id: 10, name: 'Meena Patel',     role: 'babysitter', city: 'Ahmedabad',  area: 'Satellite',       exp: '2 years', salary: 7500,  avail: 'part-time', rating: 5, initials: 'MP', color: 'bg-pink-100 text-pink-800' },
  { id: 11, name: 'Hansa Ben',       role: 'maid',       city: 'Ahmedabad',  area: 'Bopal',           exp: '5 years', salary: 8500,  avail: 'full-time', rating: 4, initials: 'HB', color: 'bg-emerald-100 text-emerald-800' },
  { id: 12, name: 'Bharat Shah',     role: 'driver',     city: 'Ahmedabad',  area: 'Navrangpura',     exp: '9 years', salary: 14000, avail: 'full-time', rating: 5, initials: 'BS', color: 'bg-blue-100 text-blue-800' },

  // Pune
  { id: 13, name: 'Arjun Singh',     role: 'cleaner',    city: 'Pune',       area: 'Wakad',           exp: '3 years', salary: 8000,  avail: 'full-time', rating: 4, initials: 'AS', color: 'bg-green-100 text-green-800' },
  { id: 14, name: 'Sarita More',     role: 'cook',       city: 'Pune',       area: 'Kothrud',         exp: '4 years', salary: 10000, avail: 'part-time', rating: 5, initials: 'SM', color: 'bg-amber-100 text-amber-800' },
  { id: 15, name: 'Ganesh Jadhav',   role: 'driver',     city: 'Pune',       area: 'Hinjewadi',       exp: '5 years', salary: 12000, avail: 'full-time', rating: 4, initials: 'GJ', color: 'bg-blue-100 text-blue-800' },

  // Hyderabad
  { id: 16, name: 'Fatima Bi',       role: 'maid',       city: 'Hyderabad',  area: 'Banjara Hills',   exp: '6 years', salary: 11000, avail: 'live-in',   rating: 5, initials: 'FB', color: 'bg-purple-100 text-purple-800' },
  { id: 17, name: 'Rajamma K',       role: 'cook',       city: 'Hyderabad',  area: 'Madhapur',        exp: '7 years', salary: 13000, avail: 'full-time', rating: 5, initials: 'RK', color: 'bg-amber-100 text-amber-800' },
  { id: 18, name: 'Srinivas M',      role: 'driver',     city: 'Hyderabad',  area: 'Gachibowli',      exp: '4 years', salary: 11000, avail: 'full-time', rating: 4, initials: 'SM', color: 'bg-blue-100 text-blue-800' },

  // Chennai
  { id: 19, name: 'Malathi R',       role: 'maid',       city: 'Chennai',    area: 'Anna Nagar',      exp: '5 years', salary: 9000,  avail: 'full-time', rating: 5, initials: 'MR', color: 'bg-emerald-100 text-emerald-800' },
  { id: 20, name: 'Selvam K',        role: 'driver',     city: 'Chennai',    area: 'Velachery',       exp: '10 years',salary: 16000, avail: 'full-time', rating: 5, initials: 'SK', color: 'bg-blue-100 text-blue-800' },
  { id: 21, name: 'Devi Priya',      role: 'babysitter', city: 'Chennai',    area: 'T Nagar',         exp: '3 years', salary: 8000,  avail: 'part-time', rating: 4, initials: 'DP', color: 'bg-pink-100 text-pink-800' },

  // Kolkata
  { id: 22, name: 'Rekha Das',       role: 'maid',       city: 'Kolkata',    area: 'Salt Lake',       exp: '6 years', salary: 8500,  avail: 'full-time', rating: 4, initials: 'RD', color: 'bg-emerald-100 text-emerald-800' },
  { id: 23, name: 'Tapan Mondal',    role: 'driver',     city: 'Kolkata',    area: 'Park Street',     exp: '8 years', salary: 13000, avail: 'full-time', rating: 5, initials: 'TM', color: 'bg-blue-100 text-blue-800' },
  { id: 24, name: 'Gita Roy',        role: 'cook',       city: 'Kolkata',    area: 'Behala',          exp: '4 years', salary: 9500,  avail: 'part-time', rating: 4, initials: 'GR', color: 'bg-amber-100 text-amber-800' },

  // Jaipur
  { id: 25, name: 'Champa Devi',     role: 'maid',       city: 'Jaipur',     area: 'Vaishali Nagar',  exp: '3 years', salary: 7000,  avail: 'full-time', rating: 4, initials: 'CD', color: 'bg-emerald-100 text-emerald-800' },
  { id: 26, name: 'Mohan Sharma',    role: 'driver',     city: 'Jaipur',     area: 'Malviya Nagar',   exp: '6 years', salary: 11000, avail: 'full-time', rating: 4, initials: 'MS', color: 'bg-blue-100 text-blue-800' },
  { id: 27, name: 'Poonam Joshi',    role: 'babysitter', city: 'Jaipur',     area: 'Civil Lines',     exp: '2 years', salary: 7000,  avail: 'part-time', rating: 5, initials: 'PJ', color: 'bg-pink-100 text-pink-800' },

  // Surat
  { id: 28, name: 'Rima Ben',        role: 'maid',       city: 'Surat',      area: 'Adajan',          exp: '4 years', salary: 8000,  avail: 'full-time', rating: 4, initials: 'RB', color: 'bg-emerald-100 text-emerald-800' },
  { id: 29, name: 'Dinesh Patel',    role: 'driver',     city: 'Surat',      area: 'Vesu',            exp: '5 years', salary: 11000, avail: 'full-time', rating: 4, initials: 'DP', color: 'bg-blue-100 text-blue-800' },
  { id: 30, name: 'Nisha Trivedi',   role: 'cook',       city: 'Surat',      area: 'Athwa',           exp: '3 years', salary: 9000,  avail: 'part-time', rating: 5, initials: 'NT', color: 'bg-amber-100 text-amber-800' },
];

export const serviceTypes    = ['maid','cook','driver','babysitter','cleaner','gardener'];
export const availOptions    = ['full-time','part-time','live-in'];
export const cities          = [...new Set(workers.map((w) => w.city))].sort();