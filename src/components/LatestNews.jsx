// src/components/LatestNews.jsx
import React from 'react';
import { Link } from 'react-router';

const LatestNews = () => {
  const news = [
    { id: 1, title: 'কোভিড-১৯ এর নতুন ভ্যারিয়েন্ট', excerpt: 'কোভিড-১৯ এর নতুন ভ্যারিয়েন্ট সম্পর্কে সর্বশেষ তথ্য...', date: '১০ ডিসেম্বর ২০২৩' },
    { id: 2, title: 'ডেঙ্গু প্রতিরোধে করণীয়', excerpt: 'ডেঙ্গু জ্বর থেকে বাঁচতে এই সতর্কতাগুলো মেনে চলুন...', date: '৫ ডিসেম্বর ২০২৩' },
    { id: 3, title: 'শীতকালীন স্বাস্থ্য সমস্যা', excerpt: 'শীতকালে সাধারণ যে স্বাস্থ্য সমস্যাগুলো দেখা যায়...', date: '১ ডিসেম্বর ২০২৩' },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">স্বাস্থ্য সংবাদ</h2>
            <p className="text-gray-600">স্বাস্থ্য সম্পর্কিত সর্বশেষ আপডেট</p>
          </div>
          <Link to="/news" className="btn btn-outline btn-primary">সকল সংবাদ</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map(item => (
            <div key={item.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="badge badge-primary">{item.date}</div>
                <h3 className="card-title">{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="card-actions">
                  <Link to={`/news/${item.id}`} className="btn btn-primary btn-sm">পড়ুন</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;