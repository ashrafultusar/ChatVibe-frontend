"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Phone",
    img: "/images/phone.jpg",
  },
  {
    title: "Whiteboard",
    img: "/images/phone.jpg",
  },
  {
    title: "Webinars",
    img: "/images/phone.jpg",
  },
  {
    title: "Docs",
    img: "/images/phone.jpg",
  },
  {
    title: "Contact Center",
    img: "/images/contact.jpg",
  },
  {
    title: "Virtual Agent",
    img: "/images/virtual.jpg",
  },
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
    <div className="overflow-x-hidden bg-gradient-to-b from-[#0B163F] to-[#203A8C] text-white py-16 flex flex-col items-center">
      {/* Headline */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find out what's possible <br /> when work connects
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Whether you're chatting with teammates or supporting customers, Zoom makes it
          easier to connect, collaborate, and reach goals — all with built-in AI doing the heavy lifting.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition">
            Explore products
          </button>
          <button className="bg-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-500 transition">
            Find your plan
          </button>
        </div>
      </div>

      {/* Sliding Cards */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          animate={{ x }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="flex gap-6 px-6"
          style={{ width: `${cards.length * 320}px` }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[300px] bg-[#10194E] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
