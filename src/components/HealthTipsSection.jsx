import React from "react";
import { Link } from "react-router";
import DiabeisImg from "../assets/diabetis.jpeg";
import HardImg from "../assets/hard.jpeg";
import sitImg from "../assets/sit.jpeg";

const HealthTipsSection = () => {
  const healthTips = [
    {
      id: 1,
      title: "ডায়াবেটিস নিয়ন্ত্রণের সহজ উপায়",
      description: "জানুন কিভাবে সহজে ডায়াবেটিস নিয়ন্ত্রণে রাখবেন...",
      image: DiabeisImg,
      category: "ডায়াবেটিস",
    },
    {
      id: 2,
      title: "হৃদরোগ প্রতিরোধের ১০ টিপস",
      description: "হৃদযন্ত্র সুস্থ রাখার জন্য দৈনন্দিন রুটিন...",
      image: HardImg,
      category: "কার্ডিওলজি",
    },
    {
      id: 3,
      title: "শীতকালীন রোগ থেকে বাঁচার উপায়",
      description: "শীতকালে সাধারণ সর্দি-কাশি থেকে মুক্তির উপায়...",
      image: sitImg,
      category: "সাধারণ স্বাস্থ্য",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">স্বাস্থ্য টিপস ও ব্লগ</h2>
            <p className="text-gray-600">
              নিয়মিত স্বাস্থ্য সম্পর্কিত আপডেট পান
            </p>
          </div>
          <Link to="/health_tips" className="btn btn-outline btn-primary">
            সব পড়ুন
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip) => (
            <div key={tip.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-primary">{tip.category}</div>
                <h3 className="card-title">{tip.title}</h3>
                <p>{tip.description}</p>
                <div className="card-actions">
                  <Link
                    to={`/health_tips/${tip.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    পড়ুন
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

export default HealthTipsSection;
