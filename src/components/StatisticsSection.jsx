import React from "react";

const StatisticsSection = () => {
  const stats = [
    { value: "৫০+", label: "বিশেষজ্ঞ ডাক্তার" },
    { value: "১০,০০০+", label: "সন্তুষ্ট রোগী" },
    { value: "২৪/৭", label: "সেবা প্রাপ্তি" },
    { value: "৯৮%", label: "সন্তুষ্টির হার" }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <h3 className="text-5xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;