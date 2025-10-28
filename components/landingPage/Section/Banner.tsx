"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  { img: "/Banner/10001.png" },
  { img: "/Banner/10002.png" },
  { img: "/Banner/10003.png" },
  { img: "/Banner/10004.png" },
  { img: "/Banner/10005.png" },
  { img: "/Banner/10006.png" },
  { img: "/Banner/10007.png" },
  { img: "/Banner/10008.png" },
  { img: "/Banner/10009.png" },
];

export default function Banner() {
  return (
    <div className="bg-gradient-to-b from-[#0A1A4A] via-[#1C3DAA] to-[#8A7DEB] text-white h-[90vh] w-full flex flex-col justify-center items-center px-4">
      {/* Headline */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Find out what’s possible <br className="hidden sm:block" /> when work connects
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm sm:text-base md:text-lg">
          Whether you're chatting with teammates or supporting customers, Zoom makes it easier
          to connect, collaborate, and reach goals — all with built-in AI doing the heavy lifting.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base">
            Explore products
          </button>
          <button className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition text-sm sm:text-base">
            Find your plan
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          grabCursor={true}
          className="px-6"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full bg-[#10194E] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img
                  src={card.img}
                  alt={`banner ${idx}`}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
