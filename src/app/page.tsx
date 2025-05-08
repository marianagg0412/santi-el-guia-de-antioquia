'use client';
import AgentEmbed from './components/AgentEmbed'

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-emerald-800">
        Antioquia Multicultural
      </h1>
      <p className="text-lg md:text-xl text-emerald-700 mt-4">
          Descubre la riqueza cultural de nuestra región: desde su diversidad étnica hasta sus tradiciones, festivales y gastronomía.
        </p>
      <AgentEmbed />
    </div>
  )
}