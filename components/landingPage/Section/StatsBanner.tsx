export default function StatsBanner() {
  return (
    <div className="my-20 px-4">
      <div
        className="
          max-w-7xl mx-auto
          rounded-2xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          shadow-xl shadow-purple-500/20
          py-12
        "
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-blue-500">
              10M+
            </h2>
            <p className="text-sm text-gray-400 mt-1">Active Users</p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-blue-500">
              50M+
            </h2>
            <p className="text-sm text-gray-400 mt-1">Meetings Hosted</p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-blue-500">
              150+
            </h2>
            <p className="text-sm text-gray-400 mt-1">Countries</p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-blue-500">
              99.9%
            </h2>
            <p className="text-sm text-gray-400 mt-1">Uptime</p>
          </div>

        </div>
      </div>
    </div>
  );
}
