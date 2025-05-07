'use client';
import AgentEmbed from './components/AgentEmbed'

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-emerald-800">
        Antioquia Multicultural
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-emerald-700">
        Conoce, celebra y comparte la riqueza cultural de nuestra región. Desde la diversidad étnica hasta eventos y recursos, este espacio es para ti.
      </p>
      <AgentEmbed />
    </div>
  )
}