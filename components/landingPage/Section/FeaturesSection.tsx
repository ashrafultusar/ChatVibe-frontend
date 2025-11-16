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
      <div className="w-full py-16 px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Perfect Meetings
            </span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Packed with powerful features to make your virtual meetings more
            productive and engaging
          </p>
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-purple-50 rounded-xl text-2xl">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  