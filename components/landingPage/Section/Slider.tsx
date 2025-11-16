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

export default function Slider() {
  return (
    <div className="text-white h-[90vh] w-full flex justify-center items-center px-4">
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
