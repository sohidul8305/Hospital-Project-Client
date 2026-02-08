import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const QuickActions = () => {
  const { user } = useContext(AuthContext);

  const actions = [
    { icon: '📅', label: 'এপয়েন্টমেন্ট', link: '/book-appointment' },
    { icon: '💊', label: 'ঔষধ কিনুন', link: '/medicines' },
    { icon: '🏥', label: 'ইমার্জেন্সি', link: '/emergency' },
    { icon: '📋', label: 'ল্যাব টেস্ট', link: '/lab-tests' },
    { icon: '👨‍⚕️', label: 'ডাক্তার খুঁজুন', link: '/doctors' },
    { icon: '💰', label: 'বিল পেমেন্ট', link: '/pay-bill' },
  ];

  return (
    <div className="bg-base-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">দ্রুত একশন</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="flex flex-col items-center p-4 bg-base-200 rounded-lg hover:bg-primary hover:text-primary-content transition-all"
            >
              <div className="text-3xl mb-2">{action.icon}</div>
              <span className="text-sm text-center font-medium">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;