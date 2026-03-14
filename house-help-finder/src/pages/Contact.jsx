import React, { useState } from 'react';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(initialForm);
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'name is required';
    if (!form.email.trim())   e.email   = 'email is required';
    if (!form.subject.trim()) e.subject = 'subject is required';
    if (!form.message.trim()) e.message = 'message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputClass = (name) =>
    `w-full bg-gray-50 border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-green-500 transition-colors ${
      errors[name] ? 'border-red-300' : 'border-gray-200'
    }`;

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-2xl font-semibold mb-3">message sent!</h1>
        <p className="text-gray-500 text-sm mb-6">
          Thanks for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={() => { setForm(initialForm); setSubmitted(false); }}
          className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
        >
          send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Header */}
      <section className="max-w-2xl mb-10">
        <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-4">contact us</h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Have a question or feedback? We would love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">full name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="e.g. Rahul Mehta" className={inputClass('name')} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">email</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="rahul@email.com" className={inputClass('email')} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">subject</label>
              <input name="subject" value={form.subject} onChange={handle} placeholder="e.g. Worker not found in my area" className={inputClass('subject')} />
              {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={4}
                placeholder="Write your message here..."
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-serif font-semibold text-base hover:bg-green-700 transition-colors"
            >
              send message
            </button>

          </form>
        </div>

        {/* Info */}
        <div className="space-y-6">
          {[
            { label: 'email',    value: 'support@househelpfinder.in' },
            { label: 'phone',    value: '+91 98765 43210' },
            { label: 'location', value: 'Ahmedabad, Gujarat, India' },
            { label: 'hours',    value: 'Mon – Sat, 9am – 6pm IST' },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}