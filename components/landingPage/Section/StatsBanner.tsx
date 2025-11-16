export default function StatsBanner() {
    return (
    <div className="my-20">
        <div className="w-full py-10 bg-gradient-to-r from-[#6A5AE0] to-[#8A5CF6] flex justify-center">
        <div className="w-full  grid grid-cols-2 sm:grid-cols-4 text-center text-white gap-6 px-4">
          
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">10M+</h2>
            <p className="text-sm opacity-80 mt-1">Active Users</p>
          </div>
  
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">50M+</h2>
            <p className="text-sm opacity-80 mt-1">Meetings Hosted</p>
          </div>
  
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">150+</h2>
            <p className="text-sm opacity-80 mt-1">Countries</p>
          </div>
  
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">99.9%</h2>
            <p className="text-sm opacity-80 mt-1">Uptime</p>
          </div>
  
        </div>
      </div>
    </div>
    );
  }
  