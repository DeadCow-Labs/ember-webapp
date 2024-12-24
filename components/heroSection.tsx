'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-7xl md:text-9xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            EMBER
          </span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Create, Deploy & Co-own AI Agents in the Neural Mesh
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold hover:opacity-90 transition">
            Launch Agent
          </button>
          <button className="px-8 py-4 border border-purple-500 rounded-full text-purple-500 font-bold hover:bg-purple-500/10 transition">
            Explore Agents
          </button>
        </div>
      </motion.div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="neural-grid" />
      </div>
    </section>
  )
}