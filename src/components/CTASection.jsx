import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const CTASection = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">আজই শুরু করুন আপনার স্বাস্থ্য যাত্রা</h2>
        <p className="text-xl mb-8">
          আপনার স্বাস্থ্য পরিচর্যা এখন আরও সহজ এবং সাশ্রয়ী। আমাদের সাথে যুক্ত হন।
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {!user ? (
            <>
              <Link to="/register" className="btn btn-accent btn-lg">
                ফ্রি রেজিস্টার করুন
              </Link>
              <Link to="/doctors" className="btn btn-outline btn-accent btn-lg">
                ডাক্তার খুঁজুন
              </Link>
            </>
          ) : (
            <Link to="/dashboard" className="btn btn-accent btn-lg">
              ড্যাশবোর্ডে যান
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;