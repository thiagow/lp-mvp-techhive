'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import SocialProof from '@/components/SocialProof';
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
        
        {/* Seção 2 — Dores */}
        <PainPoints />
        
        {/* Seção 3 — Solução (Método Velocity) */}
        <Solution />
        
        {/* Seção 4 — Prova Social e Autoridade */}
        <SocialProof />
        
        {/* Seção 5 — Proposta de Valor (Card Glassmorphism) */}
        <ValueProposition />
        
        {/* Seção 6 — Garantia */}
        <Guarantee />
      </main>
      <Footer />
    </>
  );
}
