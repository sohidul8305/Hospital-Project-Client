import React, { useState } from 'react';

const MedicineOrder = () => {
  const [cart, setCart] = useState([]);
  const [prescription, setPrescription] = useState(null);

  const medicines = [
    { id: 1, name: 'Napa 500mg', price: 0.50, stock: 100 },
    { id: 2, name: 'Ace 500mg', price: 1.00, stock: 50 },
    { id: 3, name: 'Seclo 20mg', price: 8.00, stock: 30 },
    { id: 4, name: 'Fexo 120mg', price: 10.00, stock: 40 },
  ];

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Medicine List */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">সাধারণ ঔষধ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {medicines.map(medicine => (
                <div key={medicine.id} className="card bg-base-100 shadow">
                  <div className="card-body">
                    <h4 className="card-title">{medicine.name}</h4>
                    <p>দাম: ৳{medicine.price.toFixed(2)}</p>
                    <p>স্টক: {medicine.stock} টি</p>
                    <div className="card-actions">
                      <button 
                        onClick={() => addToCart(medicine)}
                        className="btn btn-primary btn-sm"
                      >
                        কার্টে যোগ করুন
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart and Prescription */}
          <div className="space-y-6">
            {/* Shopping Cart */}
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h4 className="card-title">আপনার কার্ট</h4>
                {cart.length === 0 ? (
                  <p>কার্ট খালি</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center py-2">
                        <span>{item.name}</span>
                        <div className="flex items-center gap-2">
                          <span>৳{item.price.toFixed(2)}</span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="btn btn-xs btn-error"
                          >
                            ❌
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="divider"></div>
                    <div className="flex justify-between font-bold">
                      <span>মোট:</span>
                      <span>৳{totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary w-full">অর্ডার কনফার্ম করুন</button>
                  </>
                )}
              </div>
            </div>

            {/* Prescription Upload */}
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h4 className="card-title">প্রেসক্রিপশন আপলোড</h4>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  accept="image/*,.pdf"
                  onChange={(e) => setPrescription(e.target.files[0])}
                />
                {prescription && (
                  <p className="text-sm mt-2">ফাইল: {prescription.name}</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MedicineOrder;