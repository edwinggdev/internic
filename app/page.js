import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Servicios from "./components/Services";
import Testimonials from "./components/Testimonials";
import StatisticsSection from "./components/StatisticsSection";
import Footer from "./components/Footer";
import Link from "next/link";
import WhatsAppButton from "./components/WhatsappButton";

export default function Home() {
  return (<>
    <Navbar></Navbar>
    <HeroSlider></HeroSlider>
    {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
        <Servicios></Servicios>
        <Testimonials></Testimonials>
        <StatisticsSection></StatisticsSection>
        <Footer></Footer>
        <WhatsAppButton></WhatsAppButton>
      {/* </main> */}
    {/* </div> */}
  </>
    
  );
}
