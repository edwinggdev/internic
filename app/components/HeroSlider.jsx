"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Hero from "./Hero";

const HeroSlider = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
      >
        {/* Hero Slide 1 */}
        <SwiperSlide>
          {/* <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
            //   backgroundImage: "url('/images/hero1.jpg')",
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
              <p className="mt-4 text-lg">
                Discover amazing features and experiences.
              </p>
            </div>
          </div> */}
          <Hero image={`${basePath}/hero-img-1.png`} title="Descubre el mundo con facilidad"  description="Desde planificar escapadas de fin de semana hasta grandes aventuras,
              te ayudamos a organizar cada detalle para que solo te preocupes por
              disfrutar."></Hero>
        </SwiperSlide>

        {/* Hero Slide 2 */}
        <SwiperSlide>
          {/* <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
            //   backgroundImage: "url('/images/hero2.jpg')",
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Explore Our Services</h1>
              <p className="mt-4 text-lg">
                High-quality solutions for your business.
              </p>
            </div>
          </div> */}
          <Hero image={`${basePath}/hero-img-2.png`} title="Explora Europa como nunca antes"  description="Déjate maravillar por la historia, la cultura y los paisajes. Creamos itinerarios únicos para que cada momento sea inolvidable."></Hero>
        </SwiperSlide>

        {/* Hero Slide 3 */}
        <SwiperSlide>
          {/* <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
            //   backgroundImage: "url('/images/hero3.jpg')",
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Join Us Today</h1>
              <p className="mt-4 text-lg">Start your journey with us now.</p>
            </div>
          </div> */}
          <Hero image={`${basePath}/hero-img-3.png`} title="Vacaciones que reúnen a la familia"  description="Porque los mejores recuerdos se crean juntos, ofrecemos paquetes diseñados para que todos disfruten al máximo"></Hero>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
