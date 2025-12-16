export default function FeaturesSection() {
  const features = [
    {
      title: "HD Video Quality",
      desc: "Crystal-clear video calls with up to 1080p resolution for the best experience",
      icon: "🎥",
    },
    {
      title: "Unlimited Participants",
      desc: "Host meetings with unlimited participants without any restrictions",
      icon: "👥",
    },
    {
      title: "Screen Sharing",
      desc: "Share your screen, applications, or specific windows with ease",
      icon: "🖥️",
    },
    {
      title: "End-to-End Encryption",
      desc: "Your meetings are secured with industry-standard encryption",
      icon: "🔐",
    },
    {
      title: "Recording & Playback",
      desc: "Record your meetings and access them anytime, anywhere",
      icon: "🎞️",
    },
    {
      title: "Live Chat & Reactions",
      desc: "Engage with participants through chat and emoji reactions",
      icon: "💬",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto bg-transparent">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Everything You Need for{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Perfect Meetings
          </span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Packed with powerful features to make your virtual meetings more
          productive and engaging
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="
              p-6 rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-lg shadow-purple-500/10
              hover:bg-white/10 hover:shadow-purple-500/20
              transition
            "
          >
            <div
              className="
                w-14 h-14 flex items-center justify-center
                rounded-xl text-2xl
                bg-gradient-to-r from-purple-600/20 to-blue-600/20
                border border-white/10
              "
            >
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
