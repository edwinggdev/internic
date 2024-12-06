const Servicios = () => {
    return (
      <section className="relative bg-gray-100 py-20">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src="/bgServices.png" // Cambia esto por la ruta de tu imagen en `public`
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
  
        {/* Contenido */}
        <div className="relative z-10 container mx-auto text-center px-6 lg:px-16">
          {/* Título */}
          <h2 className="text-4xl font-bold text-gray-800">Servicios</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum is common placeholder text used to demonstrate the graphic
            elements of a document or visual presentation.
          </p>
  
          {/* Tarjetas */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/icons/workflow.png" // Cambia por la ruta del ícono
                  alt="Workflow"
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Robust Workflow</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                nibh tristique ipsum.
              </p>
            </div>
  
            {/* Tarjeta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/icons/flexibility.png" // Cambia por la ruta del ícono
                  alt="Flexibility"
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Flexibility</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                nibh tristique ipsum.
              </p>
            </div>
  
            {/* Tarjeta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/icons/user-friendly.png" // Cambia por la ruta del ícono
                  alt="User Friendly"
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">User Friendly</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
                nibh tristique ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Servicios;
  