import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'for households',
    items: [
      { q: 'how do I find a worker?',                    a: 'Go to the Find Workers page, use the filters to search by service type, city or area, and browse worker profiles.' },
      { q: 'is it free to search for workers?',          a: 'Yes, searching and contacting workers is completely free for households.' },
      { q: 'how do I contact a worker?',                 a: 'Open any worker profile and use the Call or WhatsApp button to contact them directly.' },
      { q: 'are the workers verified?',                  a: 'Workers are registered on the platform. Full verification features are coming soon.' },
      { q: 'can I filter by city?',                      a: 'Yes, you can filter workers by city, area, service type and availability on the Workers page.' },
    ],
  },
  {
    category: 'for workers',
    items: [
      { q: 'how do I register as a worker?',             a: 'Click Register as Worker in the navbar, fill in your details and submit. Your profile goes live shortly after.' },
      { q: 'is registration free?',                      a: 'Yes, registering your profile on House Help Finder is completely free.' },
      { q: 'can I update my profile?',                   a: 'Profile editing is coming soon. For now contact us to update your details.' },
      { q: 'how will households contact me?',            a: 'Households can call or message you on WhatsApp using the number you provided during registration.' },
      { q: 'which cities are supported?',                a: 'We currently support 48 cities across India including Mumbai, Delhi, Bangalore, Ahmedabad, Pune, Hyderabad, Chennai, Kolkata, Jaipur and Surat.' },
    ],
  },
  {
    category: 'general',
    items: [
      { q: 'is House Help Finder available on mobile?',  a: 'Yes, the platform is fully responsive and works on all mobile browsers.' },
      { q: 'how do I report an issue?',                  a: 'Visit our Contact page and send us a message. We will get back to you within 24 hours.' },
      { q: 'will there be a mobile app?',                a: 'A mobile app is planned for a future release.' },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => setOpen(open === key ? null : key);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      {/* Header */}
      <section className="mb-10">
        <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-4">
          frequently asked questions
        </h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Everything you need to know about House Help Finder.
        </p>
      </section>

      {/* FAQ List */}
      <div className="space-y-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4 capitalize">
              {section.category}
            </h2>
            <div className="space-y-2">
              {section.items.map((item, i) => {
                const key = `${section.category}-${i}`;
                return (
                  <div key={key} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggle(key)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-900">{item.q}</span>
                      <span className="text-gray-400 text-lg flex-shrink-0">
                        {open === key ? '−' : '+'}
                      </span>
                    </button>
                    {open === key && (
                      <div className="px-5 pb-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 leading-relaxed pt-3">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-green-50 border border-green-200 rounded-xl px-8 py-6 text-center">
        <h3 className="font-serif text-xl font-semibold text-green-800 mb-2">
          still have questions?
        </h3>
        <p className="text-sm text-green-700 mb-4">
          We are happy to help. Send us a message.
        </p>
        <Link
          to="/contact"
          className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
        >
          contact us
        </Link>
      </div>

    </div>
  );
}