'use client'

import { motion } from 'framer-motion'

type Agent = {
  id: string
  name: string
  description: string
  imageUrl: string
  tokenSymbol: string
  status: 'active' | 'inactive'
}

const SAMPLE_AGENTS: Agent[] = [
  {
    id: '1',
    name: 'Neural Navigator',
    description: 'Advanced pathfinding and decision-making agent',
    imageUrl: '/placeholder.png',
    tokenSymbol: '$NNAV',
    status: 'active',
  },
  {
    id: '2',
    name: 'Quantum Quester',
    description: 'Quantum computing optimization agent',
    imageUrl: '/placeholder.png',
    tokenSymbol: '$QQUEST',
    status: 'active',
  },
  {
    id: '3',
    name: 'Synth Sentinel',
    description: 'Security and monitoring agent',
    imageUrl: '/placeholder.png',
    tokenSymbol: '$SYNT',
    status: 'active',
  },
  // Add more sample agents as needed
]

export default function AgentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SAMPLE_AGENTS.map((agent, index) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div>
                <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                <p className="text-purple-400">{agent.tokenSymbol}</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-4">{agent.description}</p>
            
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                {agent.status}
              </span>
            </div>
            
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}