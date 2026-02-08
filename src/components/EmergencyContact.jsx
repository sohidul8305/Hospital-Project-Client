import React from "react";

const EmergencyContact = () => {
  const emergencyContacts = [
    {
      icon: "📞",
      title: "কল করুন",
      number: "১৬২৬৩"
    },
    {
      icon: "🚑",
      title: "এম্বুলেন্স",
      number: "১০৬৬৬"
    },
    {
      icon: "📍",
      title: "অবস্থান",
      text: "ঢাকা, বাংলাদেশ"
    }
  ];

  return (
    <section className="bg-error text-error-content py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">জরুরী স্বাস্থ্যসেবা প্রয়োজন?</h2>
            <p className="text-lg">আমরা ২৪ ঘন্টা জরুরী সেবা দিয়ে থাকি</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{contact.icon}</div>
                <h3 className="text-xl font-bold">{contact.title}</h3>
                <p className="text-2xl font-bold">
                  {contact.number || contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;