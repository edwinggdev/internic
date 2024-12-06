import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const destinations = [
    { city: "Madrid", price: 900, currency: "€" },
    { city: "Paris", price: 1200, currency: "€" },
    { city: "Roma", price: 1100, currency: "€" },
  ];
  return (<>
    <Navbar></Navbar>
    <section className="bg-sky-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Precios</h2>
        <p className="text-gray-600">Elige el destino de tus sueños.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-yellow-400 to-purple-900 text-center rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{dest.city}</h3>
            <p className="text-lg text-white">Desde</p>
            <div className="text-5xl font-bold text-yellow-300 mb-4">
              ${dest.price} {dest.currency}
            </div>
            <button className="bg-black text-yellow-300 px-6 py-2 rounded-md text-sm font-bold hover:bg-yellow-500 hover:text-black transition">
              Contáctanos →
            </button>
          </div>
        ))}
      </div>
    </section>

    <Footer></Footer>
  </>
    
  );
}