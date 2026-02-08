import React from "react";

const DepartmentsSection = () => {
  const departments = [
    { icon: "❤️", name: "কার্ডিওলজি" },
    { icon: "🧠", name: "নিউরোলজি" },
    { icon: "👁️", name: "অপথালমোলজি" },
    { icon: "🦴", name: "অর্থোপেডিকস" },
    { icon: "👶", name: "পেডিয়াট্রিকস" },
    { icon: "🦷", name: "ডেন্টাল" },
    { icon: "🧬", name: "নেফ্রোলজি" },
    { icon: "👂", name: "ENT" },
    { icon: "🤰", name: "গাইনোকোলজি" },
    { icon: "🧠", name: "সাইকিয়াট্রি" },
    { icon: "🩸", name: "হেমাটোলজি" },
    { icon: "👁️", name: "ডার্মাটোলজি" },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">আমাদের ডিপার্টমেন্টসমূহ</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments.map((dept, index) => (
            <div key={index} className="flex flex-col items-center p-4 hover:bg-base-100 rounded-lg transition-colors cursor-pointer">
              <div className="text-3xl mb-2">{dept.icon}</div>
              <p className="text-center font-medium">{dept.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;