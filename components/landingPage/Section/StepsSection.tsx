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
      <div className="w-full py-16 px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-gray-500 mt-1">Start hosting professional meetings in minutes</p>
        </div>
  
        {/* Steps Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-purple-200 hidden sm:block" />
  
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Icon + Number */}
                <div className="relative w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full text-3xl">
                  <span>{step.icon}</span>
  
                  {/* Number Badge */}
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                    {step.number}
                  </span>
                </div>
  
                {/* Title */}
                <h3 className="font-semibold mt-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  