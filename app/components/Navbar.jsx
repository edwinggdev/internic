import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
const Navbar = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={`${basePath}/logo.png`} // Cambia esto por el nombre de tu archivo en `public`
              alt="Inter Nic Travel Logo"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-lg font-semibold text-gray-700">
                <a href="/" className="hover:underline">
              Inter Nic Travel
              </a>
            </span>
          </div>

          {/* Enlaces principales */}
          <div className="hidden md:flex space-x-6">
            <Link to="/destinations"
              // href={`${basePath}/destinations`}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Destinos
            </Link>
            {/* <a
              href="/"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Planes
            </a> */}
            <a
              href={`${basePath}/benefits`}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Beneficios
            </a>
            <a
              href={`${basePath}/prices`}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Precios
            </a>
          </div>

          {/* Íconos de redes sociales */}
          <div className="flex items-center space-x-4">
          <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 hover:text-pink-500 transition-colors"
      >
        <FaInstagram className="h-5 w-5" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FaFacebook className="h-5 w-5" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 hover:text-blue-400 transition-colors"
      >
        <FaXTwitter className="h-5 w-5" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 hover:text-red-600 transition-colors"
      >
        <FaTiktok className="h-5 w-5" />
      </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
