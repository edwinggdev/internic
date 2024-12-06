import React from "react";

const StatisticsSection = () => {
  const stats = [
    { value: "10,000+", label: "Downloads per day" },
    { value: "2 Million", label: "Users" },
    { value: "500+", label: "Clients" },
    { value: "140", label: "Countries" },
  ];

  return (
    <div className="relative bg-blue-50 py-10 px-6 lg:px-20">
      <div className="lg:flex lg:items-center lg:justify-between">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Más de 5 años</h2>
          <p className="text-gray-600">Thanks to your superpowers, we have reached this milestone.</p>
        </div>

        {/* Right Stats Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 grid grid-cols-2 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/bgStatistics.png')`, // Reemplaza con la URL de la imagen real
        }}
      />
    </div>
  );
};

export default StatisticsSection;
