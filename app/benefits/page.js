import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionDestiny from "../components/SectionDestiny";

export default function Home() {
  return (<>
    <Navbar></Navbar>
    <div className="bg-cyan-100 py-12 px-4">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800">
        <span className="text-cyan-600 text-4xl">“</span> Beneficios
      </h2>
      <p className="text-gray-600">Get inspired by these stories.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
        <img src="/icons/ben-tickets.png" alt="Tickets" className="w-16 h-16 mr-4" />
        <p className="text-gray-800 font-semibold">Tiquetes ida y vuelta</p>
      </div>

      <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
        <img src="/icons/ben-tour.png" alt="Tours" className="w-16 h-16 mr-4" />
        <p className="text-gray-800 font-semibold">Tours guiados</p>
      </div>

      <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
        <img src="/icons/ben-attention.png" alt="Atención" className="w-16 h-16 mr-4" />
        <p className="text-gray-800 font-semibold">Atención durante el viaje</p>
      </div>

      <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
        <img src="/icons/ben-support.png" alt="Soporte" className="w-16 h-16 mr-4" />
        <p className="text-gray-800 font-semibold">
          Soporte en caso de cambios o emergencias
        </p>
      </div>
      <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
        <img src="/icons/ben-maps.png" alt="Mapas" className="w-16 h-16 mr-4" />
        <p className="text-gray-800 font-semibold">Mapas personalizados</p>
      </div>
      <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
        <img src="/icons/ben-groups.png" alt="Grupos" className="w-16 h-16 mr-4" />
        <p className="text-gray-800 font-semibold">
          Descuentos para grupos o familias
        </p>
      </div>
    </div>
  </div>
</div>

    <Footer></Footer>
  </>
    
  );
}