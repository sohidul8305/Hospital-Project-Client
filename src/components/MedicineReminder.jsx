// src/components/MedicineReminder.jsx
import React, { useState } from 'react';

const MedicineReminder = () => {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [time, setTime] = useState('');

  const addReminder = () => {
    if (medicineName && time) {
      setMedicines([...medicines, { name: medicineName, time }]);
      setMedicineName('');
      setTime('');
    }
  };

  return (
    <div className="bg-base-200 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">ঔষধ রিমাইন্ডার</h3>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input 
          type="text" 
          placeholder="ঔষধের নাম" 
          className="input input-bordered w-full" 
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
        <input 
          type="time" 
          className="input input-bordered w-full" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={addReminder} className="btn btn-primary">যোগ করুন</button>
      </div>
      <div className="space-y-2">
        {medicines.map((med, index) => (
          <div key={index} className="flex justify-between items-center bg-base-100 p-3 rounded">
            <span>{med.name}</span>
            <span>⏰ {med.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineReminder;