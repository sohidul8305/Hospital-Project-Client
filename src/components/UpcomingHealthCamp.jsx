// src/components/UpcomingHealthCamp.jsx
import React from 'react';
import { Link } from 'react-router';

const UpcomingHealthCamp = () => {
  const camps = [
    { id: 1, title: 'ফ্রি হার্ট চেকআপ ক্যাম্প', date: '২০ ডিসেম্বর ২০২৩', location: 'ঢাকা' },
    { id: 2, title: 'ডায়াবেটিস স্ক্রিনিং', date: '২৫ ডিসেম্বর ২০২৩', location: 'চট্টগ্রাম' },
    { id: 3, title: 'বিনামূল্যে চক্ষু শিবির', date: '৩০ ডিসেম্বর ২০২৩', location: 'রাজশাহী' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">আসন্ন স্বাস্থ্য শিবির</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {camps.map(camp => (
            <div key={camp.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{camp.title}</h3>
                <p>📅 তারিখ: {camp.date}</p>
                <p>📍 অবস্থান: {camp.location}</p>
                <div className="card-actions">
                  <Link to={`/camp/${camp.id}`} className="btn btn-primary btn-sm">বিস্তারিত</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingHealthCamp;