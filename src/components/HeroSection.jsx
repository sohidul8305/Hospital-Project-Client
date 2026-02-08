import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import hospital1 from "../assets/hospital.jpg";
import hospital2 from "../assets/hematology.jpg";
import hospital3 from "../assets/hospitaladvantecnia.jpg";

const HeroSection = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        swipeable
      >
        {[hospital1, hospital2, hospital3].map((img, index) => (
          <div key={index} className="relative h-[70vh] w-full">
            
            {/* ✅ Background Image */}
            <img
              src={img}
              className="h-full w-full object-cover"
              alt="Hospital Banner"
            />

            {/* ✅ Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* ✅ Text Content on Image */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-6 text-white">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-15">
                  আপনার স্বাস্থ্য, আমাদের অগ্রাধিকার
                </h1>

                <p className="py-6 text-lg md:text-xl">
                  ২৪/৭ স্বাস্থ্যসেবা, অভিজ্ঞ ডাক্তার এবং আধুনিক চিকিৎসা ব্যবস্থার সাথে।
                  বাড়িতে বসে ডাক্তার পরামর্শ ও প্রেসক্রিপশনের ঔষধ পেয়ে যান।
                </p>

                <div className="flex flex-wrap gap-4">
                  {!user && (
                    <>
                      <Link to="/register" className="btn btn-primary">
                        রেজিস্টার করুন
                      </Link>
                      <Link to="/doctors" className="btn btn-outline btn-primary text-white border-white">
                        ডাক্তার খুঁজুন
                      </Link>
                    </>
                  )}
                  <Link to="/emergency" className="btn btn-error">
                    জরুরী সাহায্য
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
