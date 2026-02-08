import React from "react";

const HowItWorks = () => {
  const steps = [
    { number: "১", title: "রেজিস্টার/লগইন", description: "অ্যাকাউন্ট তৈরি করুন অথবা লগইন করুন" },
    { number: "২", title: "ডাক্তার খুঁজুন", description: "বিশেষজ্ঞ ডাক্তার বাছাই করুন" },
    { number: "৩", title: "এপয়েন্টমেন্ট বুক", description: "পছন্দের সময়ে এপয়েন্টমেন্ট বুক করুন" },
    { number: "৪", title: "কনসাল্টেশন", description: "অনলাইন/অফলাইনে কনসাল্টেশন করুন" }
  ];

  return (
    <section className="py-16 bg-primary text-primary-content">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">কীভাবে কাজ করবে</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;