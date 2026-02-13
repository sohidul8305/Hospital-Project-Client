// src/pages/Doctor.jsx
import React, { useState } from "react";
import SearchDoctors from "../components/SearchDoctors";
import AppointmentBooking from "../components/AppointmentBooking";

import Doctor1Img from "../assets/docalamgir1.png";
import Doctor2Img from "../assets/docfrahana2.png";
import Doctor3Img from "../assets/docrofikur.png";
import Doctor4Img from "../assets/docsumna.png";
import Doctor5Img from "../assets/doctormahmud1.png";
import Doctor6Img from "../assets/doctornasrin1.png";

const Doctor = () => {
  const [filter, setFilter] = useState("");

  const doctors = [
    { id: 1, name: "ডা. আলমগীর কবির", specialty: "কার্ডিওলজি", experience: "১৫+ বছর", rating: 4.8, image: Doctor1Img },
    { id: 2, name: "ডা. ফারহানা ইসলাম", specialty: "গাইনোকোলজি", experience: "১২+ বছর", rating: 4.6, image: Doctor2Img },
    { id: 3, name: "ডা. রফিকুল ইসলাম", specialty: "নিউরোলজি", experience: "১৮+ বছর", rating: 4.9, image: Doctor3Img },
    { id: 4, name: "ডা. সুমন আহমেদ", specialty: "পেডিয়াট্রিকস", experience: "১০+ বছর", rating: 4.5, image: Doctor4Img },
    { id: 5, name: "ডা. মাহমুদ হাসান", specialty: "অর্থোপেডিকস", experience: "১৪+ বছর", rating: 4.7, image: Doctor5Img },
    { id: 6, name: "ডা. নাসরিন আক্তার", specialty: "ডার্মাটোলজি", experience: "১১+ বছর", rating: 5.0, image: Doctor6Img },
    { id: 7, name: "ডা. শারমিন আক্তার", specialty: "কার্ডিওলজি", experience: "৯+ বছর", rating: 4.3,  image: "https://i.ibb.co.com/0jZp2ZZq/Dr-Sharmin-Akter.jpg",},
    { id: 8, name: "ডা. জাহিদুল ইসলাম", specialty: "নিউরোলজি", experience: "১৩+ বছর", rating: 4.4, image: "https://i.ibb.co.com/3yFvG8BC/images-q-tbn-ANd9-Gc-Qb9-Wf-Ed6rn-W-j-Nz-Y0-NVWw8-Vq-E-CYrfvl-Lob-A-s.jpg" },
    { id: 9, name: "ডা. তানভীর হাসান", specialty: "গাইনোকোলজি", experience: "১৬+ বছর", rating: 4.9, image: "https://i.ibb.co.com/B5VrH4kb/images-q-tbn-ANd9-Gc-S4x-Ao2-NBZg-At2ed-Bfsg-L8f-Eje-Pf-Sfi-Fu-MA-s.jpg", },
    { id: 10, name: "ডা. সাবিহা রহমান", specialty: "পেডিয়াট্রিকস", experience: "৮+ বছর", rating: 4.2, image: "https://i.ibb.co.com/HfTft5MM/infertility-specialist-dr-shabiha-sultanasumi-sylhet-photo.webp" },
    { id: 11, name: "ডা. কামাল হোসেন", specialty: "অর্থোপেডিকস", experience: "২০+ বছর", rating: 4.8, image: "https://i.ibb.co.com/dsMTXB1Q/images-q-tbn-ANd9-Gc-SZfeo-Ft5-Zf2-FW9-Zwdl-Yb23-H9404ieor-Bj-Ojg-s.jpg" },
    { id: 12, name: "ডা. লিপি আক্তার", specialty: "ডার্মাটোলজি", experience: "৭+ বছর", rating: 4.1, image: "https://drlistify.com/wp-content/uploads/2025/07/nutritionist-hasina-akhter-lipi-chittagong-photo.webp" },
    { id: 13, name: "ডা. আরিফুল ইসলাম", specialty: "কার্ডিওলজি", experience: "১৭+ বছর", rating: 4.9, image: "https://drlistify.com/wp-content/uploads/2025/06/general-surgeon-dr-md-ariful-islam-surgeon-kushtia-photo.webp" },
    { id: 14, name: "ডা. তানজিলা সুলতানা", specialty: "গাইনোকোলজি", experience: "৬+ বছর", rating: 4.0, image: "https://i.ibb.co.com/kVY21P6J/1702135966-6574889e78b6e.jpg" },
    { id: 15, name: "ডা. রাশেদুল করিম", specialty: "নিউরোলজি", experience: "১৪+ বছর", rating: 4.7, image: "https://i.ibb.co.com/m5CnZjK7/images-q-tbn-ANd9-Gc-SNsafk3p-OJnk-DYoc-Yhd-FXGQLGgm-Xl1-S2s-Fzw-s.jpg" },
  ];

  const filteredDoctors = filter
    ? doctors.filter((doc) => doc.specialty === filter)
    : doctors;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <SearchDoctors />

      {/* Filter Buttons */}
      <div className="my-6 flex flex-wrap gap-3">
        {["", "কার্ডিওলজি", "নিউরোলজি", "গাইনোকোলজি", "পেডিয়াট্রিকস", "অর্থোপেডিকস", "ডার্মাটোলজি"]
          .map((spec, index) => (
            <button
              key={index}
              onClick={() => setFilter(spec)}
              className={`btn ${filter === spec ? "btn-primary" : "btn-outline"}`}
            >
              {spec === "" ? "সব" : spec}
            </button>
          ))}
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition">
            <figure>
              <img src={doctor.image} alt={doctor.name} className="h-56 w-full object-cover" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{doctor.name}</h2>
              <p>বিশেষজ্ঞ: {doctor.specialty}</p>
              <p>অভিজ্ঞতা: {doctor.experience}</p>
              <p>⭐ {doctor.rating}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  এপয়েন্টমেন্ট বুক করুন
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <AppointmentBooking />
      </div>

    </div>
  );
};

export default Doctor;
