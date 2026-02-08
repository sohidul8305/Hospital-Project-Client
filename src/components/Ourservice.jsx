import React from "react";
import { Link } from "react-router";

const Ourservice = () => {
  const services = [
    {
      icon: "👨‍⚕️",
      title: "অনলাইন কনসাল্টেশন",
      description: "বাড়িতে বসে বিশেষজ্ঞ ডাক্তারের সাথে ভিডিও কনসাল্টেশন",
      link: "/doctors",
      btnText: "বুক করুন"
    },
    {
      icon: "💊",
      title: "ঔষধ হোম ডেলিভারি",
      description: "প্রেসক্রিপশনের ঔষধ ২ ঘণ্টার মধ্যে বাড়িতে পৌঁছে দেওয়া",
      link: "/medicines",
      btnText: "অর্ডার করুন"
    },
    {
      icon: "🏥",
      title: "হাসপাতাল ভিজিট",
      description: "সর্বাধুনিক যন্ত্রপাতি সহ সম্পূর্ণ চিকিৎসা সেবা",
      link: "/services",
      btnText: "বিস্তারিত"
    },
    {
      icon: "📋",
      title: "ল্যাব টেস্ট",
      description: "হোম স্যাম্পল কালেকশন ও রিপোর্ট অনলাইনে",
      link: "/lab-tests",
      btnText: "বুক করুন"
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">আমাদের সেবাসমূহ</h2>
        <p className="text-center text-lg mb-12 text-gray-600">
          সম্পূর্ণ ডিজিটাল স্বাস্থ্যসেবা প্ল্যাটফর্ম
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-actions">
                  <Link to={service.link} className="btn btn-primary btn-sm">
                    {service.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservice;