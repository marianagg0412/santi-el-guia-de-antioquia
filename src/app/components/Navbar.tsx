'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Users, Calendar, Book } from 'lucide-react'

const links = [
  { href: '/diversidad', label: 'Diversidad', icon: <Users /> },
  { href: '/eventos', label: 'Eventos', icon: <Calendar /> },
  { href: '/recursos', label: 'Recursos', icon: <Book /> },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* Mobile Sidebar */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-emerald-100 text-emerald-900 p-6 shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-xl font-bold text-emerald-800 hover:text-emerald-700 transition transform hover:scale-105">
            Antioquia
          </Link>
          <button onClick={() => setOpen(false)} className="text-2xl">
            ×
          </button>
        </div>
        <ul className="space-y-4">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center space-x-3 text-lg hover:text-orange-600 transform hover:translate-x-2 transition"
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 md:hidden z-30 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Top Navbar */}
      <nav className="bg-emerald-100 text-emerald-900 px-6 py-4 shadow-lg rounded-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-emerald-800 hover:text-emerald-700 transition transform hover:scale-105">
            Antioquia
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex md:space-x-6">
            {links.map(({ href, label, icon }) => (
              <li key={href}>
                <Link onClick={() => setOpen(false)} href={href} className="flex items-center space-x-2 hover:text-orange-600 transform hover:translate-x-2 transition">
                  {icon}
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl focus:outline-none transform hover:scale-110 transition"
          >
            ☰
          </button>
        </div>
      </nav>
    </div>
  )
}
