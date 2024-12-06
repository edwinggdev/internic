import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <footer className="bg-cyan-600 py-10 px-6 lg:px-20">
      <div className="lg:flex lg:items-center lg:justify-center">
        {/* Sección izquierda: texto */}
        <div className="lg:w-1/2 text-center">
          <img
            src={`${basePath}/logo.png`} // Reemplaza con la ruta de tu logo
            alt="Logo"
            className="w-52 h-46 mb-4 mx-auto"
          />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ponte en contacto con nuestros asesores
          </h2>
          <p className="text-cyan-200 text-lg mb-6">
            Download the app to manage your projects, keep track of the progress and complete tasks without procrastinating. Stay on track and complete on time!
          </p>
          {/* Iconos sociales */}
          <div className="flex justify-center items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-800">
                <FaInstagram className="h-9 w-9" />
              {/* <i className="fab fa-instagram text-2xl"></i> */}
            </a>
            <a href="#" className="text-white hover:text-gray-800">
                <FaFacebook className="h-9 w-9" />
            </a>
            <a href="#" className="text-white hover:text-gray-800">
                <FaYoutube className="h-9 w-9" />
            </a>
            <a href="#" className="text-white hover:text-gray-800">
                <FaTiktok className="h-9 w-9" />
            </a>
          </div>
        </div>

        {/* Sección derecha: imagen */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
            {/* Imagen del avión */}
            <img
                src={`${basePath}/footerairplane.png`} // Reemplaza con la ruta de tu imagen de avión
                alt="Airplane"
                style={{
                    transform: 'rotate(-25deg)',
                  }}
                className="w-2/3 lg:w-1/2" // Aplica la rotación de -35 grados
            />
            {/* logo de la empresa */}
            <div className="absolute" style={{ top: '28%', right: '35%' }}> {/* Ajusta `top` y `right` según sea necesario */}
                <img
                src={`${basePath}/logo.png`}
                alt="Logo"
                style={{
                    transform: 'rotate(-25deg)',
                  }}
                className="w-20 h-auto" // Ajusta el tamaño del logo
                />
            </div>
            {/* Imagen del equipo */}
            <div className="absolute bottom-0 right-8"  style={{ top: '38%', right: '10%' }}>
                <img
                src={`${basePath}/footerteam.png`} // Reemplaza con la ruta de tu imagen de personas
                alt="Team"
                className="w-96 h-auto"
                />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
