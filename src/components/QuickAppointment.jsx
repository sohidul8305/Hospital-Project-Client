// src/components/QuickAppointment.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const QuickAppointment = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ফোন নাম্বার ভ্যালিডেশন এবং এপয়েন্টমেন্ট পেজে রিডাইরেক্ট
    navigate('/appointment', { state: { phone } });
  };

  return (
    <div className="bg-primary text-primary-content p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">দ্রুত এপয়েন্টমেন্ট বুক করুন</h3>
      <p className="mb-6">একটি ফোন নাম্বার দিয়ে শুরু করুন, আমরা আপনাকে সাহায্য করব</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input 
          type="tel" 
          placeholder="আপনার ফোন নাম্বার" 
          className="input input-bordered text-black w-full md:w-auto" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-accent">এপয়েন্টমেন্ট বুক করুন</button>
      </form>
    </div>
  );
};

export default QuickAppointment;