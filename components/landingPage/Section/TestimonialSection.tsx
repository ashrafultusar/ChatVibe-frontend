"use client";

import Image from "next/image";

const reviews = [
  {
    score: "4.5/5",
    stars: 4.5,
    count: "7.9k+",
    source: "Gartner Peer Insights",
    logo: "/images/gartner.png", // Replace with actual logo path
  },
  {
    score: "4.5/5",
    stars: 4.5,
    count: "54.9k+",
    source: "G2",
    logo: "/images/g2.png", // Replace with actual logo path
  },
  {
    score: "8.3/10",
    stars: 4.0,
    count: "5.8k+",
    source: "TrustRadius",
    logo: "/images/trustradius.png", // Replace with actual logo path
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-16">
      {/* Ratings */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-700 rounded-2xl px-6 py-4 w-64"
          >
            <div className="text-2xl md:text-3xl font-bold mb-2">{review.score}</div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(review.stars) ? "text-yellow-400" : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.948c.3.921-.755 1.688-1.54 1.118l-3.361-2.44a1 1 0 00-1.176 0l-3.361 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.948a1 1 0 00-.364-1.118L2.037 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z" />
                </svg>
              ))}
            </div>
            <div className="text-sm text-gray-400 mb-2">
              out of {review.count} reviews
            </div>
            <div className="text-xs text-gray-400">{review.source}</div>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-white text-xl md:text-2xl font-semibold mb-6">
          “ChatVibe Workplace turns my brainwaves into polished gems. From meetings, I
          can create Clips, Notes, Docs, or even whiteboards faster than you can
          say, ‘transcript.’”
        </p>
        <div className="text-gray-400">
          <div className="font-medium">Marquesa Pettway</div>
          <div className="text-sm">Founder</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
