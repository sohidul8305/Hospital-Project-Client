import React from "react";
import { useParams, Link } from "react-router";
import DiabeisImg from "../assets/diabetis.jpeg";
import HardImg from "../assets/hard.jpeg";
import sitImg from "../assets/sit.jpeg";

const Health_tips = () => {
  const { id } = useParams();

  const healthTipsDetails = [
    {
      id: "1",
      title: "ডায়াবেটিস নিয়ন্ত্রণের সহজ উপায়",
      image: DiabeisImg,
      content: `
১. খাবারের থালায় পরিবর্তন আনুন  
চিনি ও মিষ্টি এড়িয়ে চলুন, লাল চাল ও সবজি বেশি খান।

২. নিয়মিত হাঁটা ও ব্যায়াম  
প্রতিদিন অন্তত ৩০ মিনিট হাঁটুন।

৩. ওজন নিয়ন্ত্রণ  
পেটের মেদ কমাতে সচেতন হোন।

৪. ঘুম ও মানসিক চাপ  
৭–৮ ঘণ্টা ঘুম ও মেডিটেশন করুন।

৫. নিয়মিত ব্লাড সুগার চেক  
ডাক্তারের পরামর্শ মেনে চলুন।
      `,
    },
    {
      id: "2",
      title: "হৃদরোগ প্রতিরোধের ১০ টিপস",
      image: HardImg,
      content: `
১. লবণ কম খান  
২. ধূমপান বন্ধ করুন  
৩. প্রতিদিন হাঁটুন  
৪. তেল-চর্বি কমান  
৫. রক্তচাপ নিয়ন্ত্রণে রাখুন  
৬. স্ট্রেস কমান  
৭. পর্যাপ্ত ঘুম  
৮. বেশি ফল ও সবজি খান  
৯. ওজন নিয়ন্ত্রণ  
১০. বছরে একবার হার্ট চেকআপ
      `,
    },
    {
      id: "3",
      title: "শীতকালীন রোগ থেকে বাঁচার উপায়",
      image: sitImg,
      content: `
১. গরম কাপড় পরুন  
২. কুসুম গরম পানি পান করুন  
৩. ভিটামিন C যুক্ত খাবার খান  
৪. হাত পরিষ্কার রাখুন  
৫. ঠান্ডা এড়িয়ে চলুন  
৬. পর্যাপ্ত ঘুম  
৭. সর্দি-কাশি হলে দ্রুত ব্যবস্থা নিন
      `,
    },
  ];

  const singleTip = healthTipsDetails.find((tip) => tip.id === id);

  if (!singleTip) {
    return <p className="text-center mt-10">ডাটা পাওয়া যায়নি</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link to="/health_tips" className="btn btn-outline mb-6">
        ← সব টিপসে ফিরে যান
      </Link>

      {/* Image */}
      <img
        src={singleTip.image}
        alt={singleTip.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{singleTip.title}</h1>

      {/* Content */}
      <pre className="whitespace-pre-wrap text-gray-700 leading-7 text-base">
        {singleTip.content}
      </pre>
    </div>
  );
};

export default Health_tips;
