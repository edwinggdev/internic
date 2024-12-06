import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; // For WhatsApp icon

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Replace with your phone number
  const customMessage = "Hello!%20I%20am%20interested%20in%20your%20services."; // URL-encoded message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${customMessage}`;

  return (
    <div>
      {/* Other content of your page */}
      
      {/* Floating WhatsApp Button */}
      <Link href={whatsappLink} passHref
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        >
          <FaWhatsapp size={24} />
      </Link>
    </div>
  );
}
