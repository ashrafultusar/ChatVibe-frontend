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
    <div className="text-white w-full flex justify-center items-center px-4 py-10">
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
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
              <div className="bg-[#10194E] rounded-2xl overflow-hidden shadow-xl w-full">
                <img
                  src={card.img}
                  alt={`banner ${idx}`}
                  className="w-full 
                    h-[350px]          /* Increased from 72 → now bigger */
                    sm:h-[400px]       /* Bigger on small devices */
                    md:h-[450px]       /* Bigger on medium screens */
                    lg:h-[500px]       /* Large height for desktops */
                    object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
