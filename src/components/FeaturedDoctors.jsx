import React from "react";
import { Link } from "react-router";

import Doctor1Img from "../assets/docalamgir1.png";
import Doctor2Img from "../assets/docfrahana2.png";
import Doctor3Img from "../assets/docrofikur.png";
import Doctor4Img from "../assets/docsumna.png";
import Doctor5Img from "../assets/doctormahmud1.png";
import Doctor6Img from "../assets/doctornasrin1.png";

const FeaturedDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "ডা. আলমগীর কবির",
      specialty: "কার্ডিওলজিস্ট",
      experience: "১৫+ বছর অভিজ্ঞতা",
      rating: 4,
      image: Doctor1Img,
    },
    {
      id: 2,
      name: "ডা. ফারহানা ইসলাম",
      specialty: "গাইনোকোলজিস্ট",
      experience: "১২+ বছর অভিজ্ঞতা",
      rating: 4,
      image: Doctor2Img,
    },
    {
      id: 3,
      name: "ডা. রফিকুল ইসলাম",
      specialty: "নিউরোলজিস্ট",
      experience: "১৮+ বছর অভিজ্ঞতা",
      rating: 5,
      image: Doctor3Img,
    },
    {
      id: 4,
      name: "ডা. সুমন আহমেদ",
      specialty: "পেডিয়াট্রিশিয়ান",
      experience: "১০+ বছর অভিজ্ঞতা",
      rating: 4,
      image: Doctor4Img,
    },
    {
      id: 5,
      name: "ডা. মাহমুদ হাসান",
      specialty: "অর্থোপেডিক সার্জন",
      experience: "১৪+ বছর অভিজ্ঞতা",
      rating: 4,
      image: Doctor5Img,
    },
    {
      id: 6,
      name: "ডা. নাসরিন আক্তার",
      specialty: "ডার্মাটোলজিস্ট",
      experience: "১১+ বছর অভিজ্ঞতা",
      rating: 5,
      image: Doctor6Img,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold">আমাদের বিশেষজ্ঞ ডাক্তারগণ</h2>
          <p className="text-gray-500 mt-2">অভিজ্ঞতা ও দক্ষতায় অনন্য</p>
        </div>
        <Link
          to="/doctors"
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          সকল ডাক্তার
        </Link>
      </div>

      {/* ✅ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div className="flex justify-center mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
            </div>

            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-blue-600">{doctor.specialty}</p>
            <p className="text-gray-500 text-sm mt-1">
              {doctor.experience}
            </p>

            {/* Rating */}
            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < doctor.rating
                      ? "text-orange-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              বুক অ্যাপয়েন্টমেন্ট
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDoctors;
