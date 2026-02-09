import React from "react";
import { useParams, Link } from "react-router";

const News = () => {
  const { id } = useParams();

  const newsDetails = [
    {
      id: "1",
      title: "কোভিড-১৯ এর নতুন ভ্যারিয়েন্ট",
      date: "১০ ডিসেম্বর ২০২৩",
      content: `
বিশ্বজুড়ে কোভিড-১৯ এর একটি নতুন ভ্যারিয়েন্ট শনাক্ত হয়েছে।

বিশেষজ্ঞদের মতে, এই ভ্যারিয়েন্ট দ্রুত ছড়াতে পারে তবে এখনো আতঙ্কিত হওয়ার কিছু নেই।

সতর্কতা:
- মাস্ক ব্যবহার করুন
- হাত পরিষ্কার রাখুন
- ভিড় এড়িয়ে চলুন
- টিকা গ্রহণ করুন
      `,
    },
    {
      id: "2",
      title: "ডেঙ্গু প্রতিরোধে করণীয়",
      date: "৫ ডিসেম্বর ২০২৩",
      content: `
ডেঙ্গু জ্বর বর্তমানে একটি বড় স্বাস্থ্য সমস্যা।

প্রতিরোধের উপায়:
- জমে থাকা পানি পরিষ্কার করুন
- মশারি ব্যবহার করুন
- ফুলহাতা জামা পরুন
- জ্বর হলে দ্রুত চিকিৎসকের শরণাপন্ন হন
      `,
    },
    {
      id: "3",
      title: "শীতকালীন স্বাস্থ্য সমস্যা",
      date: "১ ডিসেম্বর ২০২৩",
      content: `
শীতকালে সাধারণত সর্দি, কাশি ও জ্বরের সমস্যা বেশি দেখা যায়।

সতর্কতা:
- গরম কাপড় পরুন
- কুসুম গরম পানি পান করুন
- পর্যাপ্ত ঘুম নিন
- ভিটামিন সমৃদ্ধ খাবার খান
      `,
    },
  ];

  const singleNews = newsDetails.find((item) => item.id === id);

  if (!singleNews) {
    return <p className="text-center mt-10">সংবাদ পাওয়া যায়নি</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link to="/news" className="btn btn-outline mb-6">
        ← সকল সংবাদ
      </Link>

      {/* Date */}
      <div className="badge badge-primary mb-4">{singleNews.date}</div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{singleNews.title}</h1>

      {/* Content */}
      <pre className="whitespace-pre-wrap text-gray-700 leading-7">
        {singleNews.content}
      </pre>
    </div>
  );
};

export default News;
