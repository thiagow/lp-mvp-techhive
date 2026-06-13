'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solution from '@/components/Solution';
import ValueProposition from '@/components/ValueProposition';
import Guarantee from '@/components/Guarantee';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Seção 1 — Hero */}
        <Hero />
        
        {/* Seção 2 — Solução (Método Velocity) */}
        <Solution />
        
        {/* Seção 3 — Proposta de Valor (Card Glassmorphism) */}
        <ValueProposition />
        
        {/* Seção 4 — Garantia */}
        <Guarantee />
      </main>
      <Footer />
    </>
  );
}
