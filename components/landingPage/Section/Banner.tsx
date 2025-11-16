"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left content */}
      <div className="flex-1 space-y-6 max-w-xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-purple-700">
          <span>🚀</span>
          <span>Now with AI-powered features</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          Connect with{" "}
          <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
            Anyone, Anywhere
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Experience crystal-clear video conferencing with ChatVibe. Host
          unlimited meetings, share your screen, and collaborate seamlessly with
          teams around the globe.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all">
            <span>🎥</span> Start Free Meeting
          </button>
          <button className="border border-purple-400 text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-all">
            Watch Demo
          </button>
        </div>

        {/* Trusted Section */}
        <div className="flex items-center gap-3 pt-6">
          {/* Avatars */}
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center text-white text-sm font-semibold">
              10M+
            </div>
          </div>

          {/* Rating */}
          <div>
            <div className="flex text-yellow-400 text-sm">
              ★★★★★
            </div>
            <p className="text-sm text-gray-500">Trusted by 10M+ users</p>
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="flex-1 relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/60">
          <Image
            src={'/Banner/10001.jpeg'}
            alt="Conference"
            width={700}
            height={500}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
