import React from "react";

const SectionDestiny = (props) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <section className="relative bg-cover bg-center py-10 mt-10" style={{ backgroundImage: `url(${basePath}${props.background})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
      {/* <div class="absolute inset-0 flex flex-col justify-center items-start px-6"> */}
        {/* Texto a la izquierda */}
        <div className="text-white lg:w-1/2">
            <h2 className="text-6xl font-bold mb-4">{props.country}</h2>
            <p className="text-2xl">
                {  props.description}
            </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img src={props.logo} alt="España Logo" className="w-64 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default SectionDestiny;
