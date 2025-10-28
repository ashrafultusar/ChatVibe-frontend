"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    label: "Chat",
    content: (
      <>
        <p className="text-gray-200 mb-4">
          Stay connected through instant messaging and chat rooms. Communicate
          instantly and securely wherever you are.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-gray-200">
          <li>
            <strong className="text-blue-400">Group Chat:</strong> Talk with
            your whole team or friend group in one place.
          </li>
          <li>
            <strong className="text-blue-400">Private Chat:</strong> Send
            direct messages securely with end-to-end encryption.
          </li>
          <li>
            <strong className="text-blue-400">File Sharing:</strong> Share
            images, documents, and media directly in chat.
          </li>
          <li>
            <strong className="text-blue-400">Reactions & Emojis:</strong> React
            quickly to messages with fun emojis.
          </li>
          <li>
            <strong className="text-blue-400">Searchable History:</strong> Find
            past conversations easily anytime.
          </li>
        </ul>
      </>
    ),
    image: "/Communication/chat.png",
  },
  {
    label: "Call",
    content: (
      <>
        <p className="text-gray-200 mb-4">
          Communicate face-to-face with crystal-clear video and audio. Perfect
          for both business and personal conversations.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-gray-200">
          <li>
            <strong className="text-blue-400">Video Call:</strong> High-quality
            video calls for meetings or personal talks.
          </li>
          <li>
            <strong className="text-blue-400">Audio Call:</strong> Stable,
            noise-free audio communication anytime.
          </li>
          <li>
            <strong className="text-blue-400">In-call Messaging:</strong> Chat
            during calls without switching screens.
          </li>
          <li>
            <strong className="text-blue-400">Background Effects:</strong> Blur
            or replace your background for privacy.
          </li>
          <li>
            <strong className="text-blue-400">Screen Sharing:</strong> Share
            your screen during calls for collaboration.
          </li>
        </ul>
      </>
    ),
    image: "/Communication/call.png",
  },
  {
    label: "Screen Share",
    content: (
      <>
        <p className="text-gray-200 mb-4">
          Share your screen for better collaboration and presentations. Make
          teamwork smooth and visual.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-gray-200">
          <li>
            <strong className="text-blue-400">Real-time Sharing:</strong> Show
            your work, projects, or slides instantly.
          </li>
          <li>
            <strong className="text-blue-400">Multi-user Support:</strong> Allow
            multiple users to share and collaborate.
          </li>
          <li>
            <strong className="text-blue-400">HD Quality:</strong> Smooth and
            clear visuals without lag.
          </li>
          <li>
            <strong className="text-blue-400">Annotation Tools:</strong> Draw or
            highlight directly on the shared screen.
          </li>
          <li>
            <strong className="text-blue-400">Cross-device:</strong> Share
            screens from PC, tablet, or mobile seamlessly.
          </li>
        </ul>
      </>
    ),
    image: "/Communication/share.png",
  },
  {
    label: "Recording",
    content: (
      <>
        <p className="text-gray-200 mb-4">
          Record your important conversations, meetings, or sessions with one
          click. Never miss any detail.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-gray-200">
          <li>
            <strong className="text-blue-400">Meeting Recording:</strong> Capture
            audio, video, and shared screens.
          </li>
          <li>
            <strong className="text-blue-400">Cloud Storage:</strong> Save
            recordings securely and access anytime.
          </li>
          <li>
            <strong className="text-blue-400">Playback Controls:</strong> Replay,
            forward, or download recordings easily.
          </li>
          <li>
            <strong className="text-blue-400">Transcription:</strong> Automatically
            generate text transcripts for meetings.
          </li>
          <li>
            <strong className="text-blue-400">Secure Sharing:</strong> Share
            recordings with team members safely.
          </li>
        </ul>
      </>
    ),
    image: "/Communication/recording.png",
  },
];

const Communication = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-16">
      {/* Headings */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          All-in-one communication platform
        </h2>
        <p className="text-gray-200 text-base md:text-lg">
          Connect and collaborate easily with powerful tools designed for teams,
          friends, and professionals — all in one secure platform.
        </p>
      </div>

      {/* Custom Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs?.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full font-medium transition border ${
              activeTab === index
                ? "bg-blue-50 border-white text-blue-700"
                : "text-white border-white hover:bg-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-96 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={tabs[activeTab].image}
            alt={tabs[activeTab].label}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 w-full text-white lg:w-1/2">{tabs[activeTab].content}</div>
      </div>
    </section>
  );
};

export default Communication;
