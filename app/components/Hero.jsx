'use client'
import { useState } from "react";
const Hero = (props) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false)

  const phoneNumber = "1234567890"; // Replace with your phone number
  const customMessage = "Hello!%20I%20am%20interested%20in%20your%20services."; // URL-encoded message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${customMessage}`;

    return (
      <section className="relative bg-gradient-to-r from-blue-50 to-purple-100 overflow-hidden">
        {/* Imagen de fondo */}
        {/* <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div> */}
  
        <div className="container mx-auto relative z-10 flex items-center justify-between py-20 px-6 lg:px-16">
          {/* Contenido principal */}
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight sm:text-5xl">
              { props.title }
            </h1>
            <p className="mt-4 text-gray-600">
              { props.description }
            </p>
  
            {/* Botones */}
            <div className="mt-6 flex space-x-4">
              <a
                href={whatsappLink}
                className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition"
              >
                Ponte en Contacto
              </a>
              {/* <a
                onClick={openModal}
                href="#"
                className="flex items-center text-purple-600 hover:text-purple-700"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.341A8 8 0 115.11 8.659"
                  ></path>
                </svg>
                Ver Video
              </a> */}
            </div>
          </div>
  
          {/* Imagen flotante */}
          <div className="lg:block ">
            <img
              src={ props.image }
              alt="Hero Image"
              className="max-w-md"
            />
          </div>
        </div>

           {/* Formas decorativas */}
        <div className="absolute bottom-0 left-0 w-1/3 h-16 bg-teal-200 rounded-full transform rotate-6"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-16 bg-purple-300 rounded-full transform -rotate-6"></div>

        {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-md">
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            {/* Video */}
            <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      </section>
    );
  };
  
  export default Hero;
  