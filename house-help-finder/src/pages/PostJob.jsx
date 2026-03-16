import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const serviceTypes = ['maid', 'cook', 'driver', 'babysitter', 'cleaner', 'gardener'];

const initialForm = {
  name: '', phone: '', email: '', serviceType: '',
  city: '', area: '', requirements: '',
};

export default function PostJob() {
  const [form, setForm]     = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate            = useNavigate();

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim())        e.name        = 'name is required';
    if (!form.phone.trim())       e.phone       = 'phone is required';
    if (!form.email.trim())       e.email       = 'email is required';
    if (!form.serviceType)        e.serviceType = 'select a service type';
    if (!form.city.trim())        e.city        = 'city is required';
    if (!form.requirements.trim()) e.requirements = 'requirements are required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputClass = (name) =>
    `w-full bg-gray-50 dark:bg-gray-700 border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-500 transition-colors text-gray-900 dark:text-white placeholder-gray-400 ${
      errors[name] ? 'border-red-300' : 'border-gray-200 dark:border-gray-600'
    }`;

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 bg-green-50 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-2xl font-semibold mb-3 text-gray-900 dark:text-white">job posted!</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          Your job requirement has been received.<br />
          We will connect you with suitable workers shortly.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { setForm(initialForm); setSubmitted(false); }}
            className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            post another job
          </button>
          <button
            onClick={() => navigate('/workers')}
            className="border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            find workers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">

        <h1 className="font-serif text-2xl font-semibold mb-1 text-gray-900 dark:text-white">post a job</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-7">
          Tell us what kind of help you need and we will find the right worker for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">your name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="e.g. Rahul Mehta" className={inputClass('name')} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">phone number</label>
              <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" className={inputClass('phone')} />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">email</label>
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="rahul@email.com" className={inputClass('email')} />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">service needed</label>
            <select name="serviceType" value={form.serviceType} onChange={handle} className={inputClass('serviceType')}>
              <option value="">select service...</option>
              {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.serviceType && <p className="text-xs text-red-500 mt-1">{errors.serviceType}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">city</label>
              <input name="city" value={form.city} onChange={handle} placeholder="e.g. Mumbai" className={inputClass('city')} />
              {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">area</label>
              <input name="area" value={form.area} onChange={handle} placeholder="e.g. Andheri West" className={inputClass('area')} />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">requirements</label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handle}
              rows={3}
              placeholder="Describe what you are looking for..."
              className={`${inputClass('requirements')} resize-none`}
            />
            {errors.requirements && <p className="text-xs text-red-500 mt-1">{errors.requirements}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-serif font-semibold text-base hover:bg-green-700 transition-colors"
          >
            post job
          </button>

        </form>
      </div>
    </div>
  );
}