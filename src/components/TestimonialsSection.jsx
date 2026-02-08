import React from "react";
import Present1Img from "../assets/pasent1.png";
import Present2Img from "../assets/pasent2.png";
import Present3Img from "../assets/pasent3.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "রহিমা আক্তার",
      role: "কার্ডিয়াক রোগী",
      comment:
        "ডাক্তার সাহেবের চিকিৎসা ও সেবায় আমি সম্পূর্ণ সুস্থ হয়ে উঠেছি। অনলাইন কনসাল্টেশন সেবা অসাধারণ!",
      rating: 4,
      image: Present1Img,
    },
    {
      name: "মোহাম্মদ আলী",
      role: "ডায়াবেটিস রোগী",
      comment:
        "ঔষধ ডেলিভারি সেবা অসাধারণ। এখন আর লাইনে দাঁড়িয়ে ঔষধ কিনতে হয় না।",
      rating: 5,
      image: Present2Img,
    },
    {
      name: "সায়মা সুলতানা",
      role: "গর্ভবতী মা",
      comment:
        "ডাক্তার ফারহানা আপার পরামর্শ ও যত্নে আমার পুরো প্রেগন্যান্সি খুব সুন্দরভাবে কেটেছে।",
      rating: 4,
      image: Present3Img,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <input
        key={index}
        type="radio"
        name={`rating-testimonial-${index}`}
        className="mask mask-star-2 bg-orange-400"
        defaultChecked={index < rating}
        readOnly
      />
    ));
  };

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">রোগীদের মতামত</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="rating rating-sm mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="italic">"{testimonial.comment}"</p>
                <div className="flex items-center mt-6">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
