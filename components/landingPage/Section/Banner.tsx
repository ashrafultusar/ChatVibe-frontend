"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

const Banner = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => (prev - 320 <= -cards.length * 320 ? 0 : prev - 320));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-[#0A1A4A] via-[#1C3DAA] to-[#8A7DEB] text-white h-[80vh] w-full flex flex-col justify-center items-center px-4">
      {/* Headline */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Find out what's possible <br className="hidden sm:block" /> when work
          connects
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm sm:text-base md:text-lg">
          Whether you're chatting with teammates or supporting customers, Zoom
          makes it easier to connect, collaborate, and reach goals — all with
          built-in AI doing the heavy lifting.
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

      {/* Sliding Cards */}
      <div className="relative  overflow-hidden">
        <motion.div
          animate={{ x }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="flex gap-6 px-6"
          style={{ width: `${cards.length * 320}px` }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[300px] bg-[#10194E] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={card.img}
                alt={'image'}
                className="w-full h-52 sm:h-56 object-cover"
              />
              
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
