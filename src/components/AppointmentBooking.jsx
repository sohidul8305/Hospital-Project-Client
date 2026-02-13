import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '02:00 PM', '03:00 PM', 
    '04:00 PM', '05:00 PM'
  ];

  const doctors = [
    { id: 1, name: 'ডা. আলমগীর কবির', specialty: 'কার্ডিওলজিস্ট' },
    { id: 2, name: 'ডা. ফারহানা ইসলাম', specialty: 'গাইনোকোলজিস্ট' },
    { id: 3, name: 'ডা. রফিকুল ইসলাম', specialty: 'নিউরোলজিস্ট' },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic here
    alert('এপয়েন্টমেন্ট বুকিং সফলভাবে সম্পন্ন হয়েছে!');
  };

  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">এপয়েন্টমেন্ট বুক করুন</h2>

        <form onSubmit={handleBooking} className="space-y-6">
          {/* Doctor Selection */}
          <div>
            <label className="block mb-2 font-medium">ডাক্তার নির্বাচন করুন</label>
            <select
              className="select select-bordered w-full"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              <option value="">ডাক্তার নির্বাচন করুন</option>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Date Selection */}
          <div>
            <label className="block mb-2 font-medium">তারিখ নির্বাচন করুন</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="input input-bordered w-full"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>

          {/* Time Slot Selection */}
          <div>
            <label className="block mb-2 font-medium">সময় নির্বাচন করুন</label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  type="button"
                  className={`btn ${selectedTime === time ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            এপয়েন্টমেন্ট কনফার্ম করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;