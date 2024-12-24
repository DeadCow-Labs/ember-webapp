import HeroSection from '@/components/heroSection'
import FloatingElements from '@/components/floatingElements'
import AgentGrid from '@/components/agentGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black">
      <div className="relative overflow-hidden">
        <FloatingElements />
        
        <div className="relative z-10">
          <HeroSection />
          
          <section className="container mx-auto px-4 py-20">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
              Active Agents
            </h2>
            <AgentGrid />
          </section>
          
          <section className="container mx-auto px-4 py-20">
            <div className="glowing-border p-8 rounded-2xl backdrop-blur-sm bg-black/30">
              <h2 className="text-4xl font-bold text-white mb-8">Launch Your Agent</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature cards */}
              </div>
            </div>
          </section>

          {/* New Coming Soon section */}
          <section className="container mx-auto px-4 py-32 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            <div className="relative z-10">
              {/* <h2 className="text-[12rem] font-bold leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 blur-[1px]">
                  SOON™
                </span>
              </h2> */}
              <div className="mt-8 flex gap-2 items-center justify-center text-purple-300/80">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <p className="text-xl tracking-widest uppercase">
                  Initializing Neural Network
                </p>
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              </div>
              
              <div className="mt-12 flex gap-4 justify-center">
                <a 
                  href="#" 
                  className="px-8 py-3 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition"
                >
                  Join Waitlist
                </a>
                <a 
                  href="#" 
                  className="px-8 py-3 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition"
                >
                  Documentation
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-purple-500/50 to-transparent" />
          </section>
        </div>
      </div>
    </main>
  )
}