import React from "react";
import { Link } from "react-router";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">
            🏥 HospitalCare
          </h2>
          <p className="text-gray-600 text-sm">
            HospitalCare is a modern hospital management system where you can
            book doctor appointments and order medicines online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link className="hover:text-primary" to="/">Home</Link></li>
            <li><Link className="hover:text-primary" to="/doctors">Doctors</Link></li>
            <li><Link className="hover:text-primary" to="/medicines">Medicines</Link></li>
            <li><Link className="hover:text-primary" to="/about">About</Link></li>
            <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-gray-600 text-sm">📞 +880 1944 709984</p>
          <p className="text-gray-600 text-sm">✉ info@hospitalcare.com</p>

          <div className="flex flex-col gap-2 mt-3">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FaTwitter /> Twitter
            </a>

            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FaFacebookSquare /> Facebook
            </a>

            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary"
            >
              <FaSquareInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-base-300 text-sm text-gray-500">
        © {new Date().getFullYear()} HospitalCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
