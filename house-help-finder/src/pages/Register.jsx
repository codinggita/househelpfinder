import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const serviceTypes = ['maid', 'cook', 'driver', 'babysitter', 'cleaner', 'gardener'];
const availOptions = ['full-time', 'part-time', 'live-in'];

const initialForm = {
  name: '', phone: '', serviceType: '', experience: '',
  city: '', area: '', salary: '', availability: 'full-time', about: '',
};

const expLevels = ['0–1 year', '1–3 years', '3–5 years', '5+ years'];

export default function Register() {
  const [form, setForm]     = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate            = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name        = 'name is required';
    if (!form.phone.trim())    e.phone       = 'phone is required';
    if (!form.serviceType)     e.serviceType = 'select a service type';
    if (!form.experience)      e.experience  = 'select experience level';
    if (!form.city.trim())     e.city        = 'city is required';
    if (!form.salary || isNaN(form.salary)) e.salary = 'enter a valid salary';
    return e;
  };

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    navigate('/register/success');
  };

  const inputClass = (name) =>
    `w-full bg-gray-50 border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-500 transition-colors ${
      errors[name] ? 'border-red-300' : 'border-gray-200'
    }`;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="bg-white border border-gray-200 rounded-2xl p-8">

        <h1 className="font-serif text-2xl font-semibold mb-1">register as a worker</h1>
        <p className="text-sm text-gray-500 mb-7">
          Create your free profile and start getting discovered by local households.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">full name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="e.g. Priya Sharma" className={inputClass('name')} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">phone number</label>
              <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" className={inputClass('phone')} />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">service type</label>
              <select name="serviceType" value={form.serviceType} onChange={handle} className={inputClass('serviceType')}>
                <option value="">select...</option>
                {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.serviceType && <p className="text-xs text-red-500 mt-1">{errors.serviceType}</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">experience</label>
              <select name="experience" value={form.experience} onChange={handle} className={inputClass('experience')}>
                <option value="">select...</option>
                {expLevels.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
              {errors.experience && <p className="text-xs text-red-500 mt-1">{errors.experience}</p>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">city</label>
              <input name="city" value={form.city} onChange={handle} placeholder="e.g. Mumbai" className={inputClass('city')} />
              {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">area</label>
              <input name="area" value={form.area} onChange={handle} placeholder="e.g. Andheri West" className={inputClass('area')} />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">expected salary (₹/month)</label>
              <input name="salary" type="number" value={form.salary} onChange={handle} placeholder="e.g. 8000" className={inputClass('salary')} />
              {errors.salary && <p className="text-xs text-red-500 mt-1">{errors.salary}</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">availability</label>
              <select name="availability" value={form.availability} onChange={handle} className={inputClass('availability')}>
                {availOptions.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>

          {/* About */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">about yourself</label>
            <textarea
              name="about"
              value={form.about}
              onChange={handle}
              rows={3}
              placeholder="Briefly describe your experience..."
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-serif font-semibold text-base hover:bg-green-700 transition-colors"
          >
            submit registration
          </button>

        </form>
      </div>
    </div>
  );
}