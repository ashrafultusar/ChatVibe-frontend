"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative my-16 py-16 md:py-24 px-6 md:px-12 lg:px-20 
      bg-gradient-to-br from-[#0f1020] via-[#15162c] to-[#0b0c1a] text-white">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 
            bg-white/10 backdrop-blur-md border border-white/20
            px-4 py-2 rounded-full shadow text-sm font-semibold text-purple-300">
            <span>🚀</span>
            <span>Now with AI-powered features</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Connect with{" "}
            <span className="block md:inline text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-blue-500">
              Anyone, Anywhere
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Experience crystal-clear video conferencing with ChatVibe. Host
            unlimited meetings, share your screen, and collaborate seamlessly
            with teams around the globe.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/dashboard">
              <button className="flex items-center gap-2 
                bg-gradient-to-r from-purple-600 to-blue-600 
                text-white font-semibold px-6 py-3 rounded-lg 
                shadow-lg hover:opacity-90 active:scale-95 transition-all">
                🎥 Start Free Meeting
              </button>
            </Link>

            <button className="border border-purple-400/50 
              text-purple-300 font-semibold px-6 py-3 rounded-lg 
              hover:bg-purple-500/10 active:scale-95 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Trusted Section */}
          <div className="flex items-center gap-4 pt-6">
            
            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 
                flex items-center justify-center text-white text-sm font-semibold">
                10M+
              </div>
            </div>

            {/* Rating */}
            <div>
              <div className="flex text-yellow-400 text-base">★★★★★</div>
              <p className="text-sm text-gray-400">Trusted by 10M+ users</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="rounded-3xl overflow-hidden 
            shadow-2xl shadow-purple-500/30 
            w-full max-w-lg md:max-w-xl">
            <Image
              src="/Banner/10001.jpeg"
              alt="Conference"
              width={700}
              height={500}
              className="object-cover w-full h-full rounded-3xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
