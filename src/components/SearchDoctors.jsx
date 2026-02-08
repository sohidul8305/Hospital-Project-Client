// src/components/SearchDoctors.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchDoctors = () => {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // সার্চ পারামিটার সহ ডাক্তার পেজে নিয়ে যান
    navigate(`/doctors?specialty=${specialty}&location=${location}`);
  };

  return (
    <div className="bg-base-100 shadow-xl p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">ডাক্তার খুঁজুন</h3>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <select 
          className="select select-bordered w-full md:w-auto" 
          value={specialty} 
          onChange={(e) => setSpecialty(e.target.value)}
        >
          <option value="">বিশেষজ্ঞতা নির্বাচন করুন</option>
          <option value="cardiology">কার্ডিওলজি</option>
          <option value="neurology">নিউরোলজি</option>
          <option value="orthopedics">অর্থোপেডিকস</option>
          <option value="pediatrics">পেডিয়াট্রিকস</option>
        </select>
        <input 
          type="text" 
          placeholder="এলাকা/শহর" 
          className="input input-bordered w-full md:w-auto" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">খুঁজুন</button>
      </form>
    </div>
  );
};

export default SearchDoctors;