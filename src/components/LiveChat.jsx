// src/components/LiveChat.jsx
import React, { useState } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* চ্যাট বাটন */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {/* চ্যাট উইন্ডো */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-base-100 shadow-2xl rounded-lg z-50">
          <div className="bg-primary text-primary-content p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">লাইভ চ্যাট</h3>
            <button onClick={() => setIsOpen(false)} className="btn btn-ghost btn-sm">✕</button>
          </div>
          <div className="p-4 h-96 overflow-y-auto">
            <div className="chat chat-start">
              <div className="chat-bubble">কীভাবে সাহায্য করতে পারি?</div>
            </div>
            {/* চ্যাট মেসেজ গুলো */}
          </div>
          <div className="p-4 border-t">
            <input 
              type="text" 
              placeholder="আপনার মেসেজ লিখুন..." 
              className="input input-bordered w-full" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;