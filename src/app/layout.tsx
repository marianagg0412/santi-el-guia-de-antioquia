import "@/app/styles/globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Antioquia Multicultural',
  description: 'Explora la diversidad, cultura y comunidad de Antioquia.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-emerald-50 text-emerald-900`}>
        <Navbar />
        <main className="p-4 md:p-12 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
