import React, { useState } from 'react';

const HealthTracker = () => {
  const [bloodPressure, setBloodPressure] = useState({ systolic: '', diastolic: '' });
  const [bloodSugar, setBloodSugar] = useState('');
  const [weight, setWeight] = useState('');
  const [records, setRecords] = useState([]);

  const addRecord = () => {
    const newRecord = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      bloodPressure: `${bloodPressure.systolic}/${bloodPressure.diastolic}`,
      bloodSugar,
      weight
    };
    
    setRecords([newRecord, ...records]);
    // Reset form
    setBloodPressure({ systolic: '', diastolic: '' });
    setBloodSugar('');
    setWeight('');
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">স্বাস্থ্য ট্র্যাকার</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Input Form */}
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ব্লাড প্রেশার</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="সিস্টোলিক"
                  className="input input-bordered w-1/2"
                  value={bloodPressure.systolic}
                  onChange={(e) => setBloodPressure({...bloodPressure, systolic: e.target.value})}
                />
                <span className="self-center">/</span>
                <input
                  type="number"
                  placeholder="ডায়াস্টোলিক"
                  className="input input-bordered w-1/2"
                  value={bloodPressure.diastolic}
                  onChange={(e) => setBloodPressure({...bloodPressure, diastolic: e.target.value})}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">ব্লাড সুগার (mg/dL)</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={bloodSugar}
                onChange={(e) => setBloodSugar(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">ওজন (kg)</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button onClick={addRecord} className="btn btn-primary w-full">
              রেকর্ড সংরক্ষণ করুন
            </button>
          </div>

          {/* Records Display */}
          <div>
            <h3 className="text-xl font-bold mb-4">রেকর্ডসমূহ</h3>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>তারিখ</th>
                    <th>সময়</th>
                    <th>ব্লাড প্রেশার</th>
                    <th>ব্লাড সুগার</th>
                    <th>ওজন</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.time}</td>
                      <td>{record.bloodPressure}</td>
                      <td>{record.bloodSugar}</td>
                      <td>{record.weight} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HealthTracker;