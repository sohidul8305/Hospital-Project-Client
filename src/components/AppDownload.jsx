import React from "react";
import PlayStoreLogo from "../assets/play-store.png";
import AppStoreLogo from "../assets/app-store.png";
import MobileAppImg from "../assets/mobileapp.png";

const AppDownload = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-base-200 rounded-2xl p-8">
          
          {/* Text + Buttons */}
          <div>
            <h2 className="text-3xl font-bold mb-4">মোবাইল অ্যাপ ডাউনলোড করুন</h2>
            <p className="mb-6">আপনার স্বাস্থ্য সর্বদা হাতের মুঠোয়</p>
            <div className="flex gap-4">

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <img
                  src={PlayStoreLogo}
                  className="w-6 h-6 mr-2"
                  alt="Google Play"
                />
                Google Play
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/app/id0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <img
                  src={AppStoreLogo}
                  className="w-6 h-6 mr-2"
                  alt="App Store"
                />
                App Store
              </a>

            </div>
          </div>

          {/* Mobile App Image */}
          <img
            src={MobileAppImg}
            className="max-w-xs mt-8 md:mt-0"
            alt="Mobile App"
          />

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
