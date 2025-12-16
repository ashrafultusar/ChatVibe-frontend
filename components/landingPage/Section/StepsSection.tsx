export default function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      desc: "Sign up in seconds with your email or Google account",
      icon: "👤",
    },
    {
      number: "2",
      title: "Schedule or Start",
      desc: "Create instant meetings or schedule them for later",
      icon: "📅",
    },
    {
      number: "3",
      title: "Invite Participants",
      desc: "Share meeting link via email, chat, or calendar invite",
      icon: "🔗",
    },
    {
      number: "4",
      title: "Start Connecting",
      desc: "Join from any device and start your meeting instantly",
      icon: "🎥",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-transparent">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Get Started in{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            4 Simple Steps
          </span>
        </h2>
        <p className="text-gray-400 mt-2">
          Start hosting professional meetings in minutes
        </p>
      </div>

      {/* Steps Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* Line (dark-friendly) */}
        <div className="absolute top-8 left-[12%] w-[76%] h-[2px] bg-white/10 hidden sm:block" />

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Icon + Number */}
              <div
                className="
                  relative w-16 h-16 flex items-center justify-center
                  rounded-full text-3xl
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  shadow-lg shadow-purple-500/10
                "
              >
                <span>{step.icon}</span>

                {/* Number Badge */}
                <span
                  className="
                    absolute -top-1 -right-1
                    bg-gradient-to-r from-purple-600 to-blue-600
                    text-white text-xs font-semibold
                    w-6 h-6 flex items-center justify-center rounded-full
                    border border-white/20
                  "
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold mt-4 text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
