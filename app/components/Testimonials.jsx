import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Floyd Miles",
      title: "Vice President, GoPro",
      image: "https://via.placeholder.com/50", // Reemplaza con la URL real de la imagen
      text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI Kits I have come across. It's so flexible, well organized, and easily editable.",
    },
    {
      name: "Jane Cooper",
      title: "CEO, Airbnb",
      image: "https://via.placeholder.com/50", // Reemplaza con la URL real de la imagen
      text: "I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
    },
    {
      name: "Kristin Watson",
      title: "Co-Founder, Strapi",
      image: "https://via.placeholder.com/50", // Reemplaza con la URL real de la imagen
      text: "Landify saved our time in designing my company page.",
    },
  ];

  return (
    <div className="bg-blue-50 py-10 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonios</h2>
      <p className="text-gray-600 mb-8">Get inspired by these stories.</p>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
            <h3 className="text-gray-900 font-bold">{testimonial.name}</h3>
            <span className="text-gray-500 text-sm">{testimonial.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
