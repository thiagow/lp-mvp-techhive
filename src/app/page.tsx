'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import DorIcp from '@/components/DorIcp';
import Solution from '@/components/Solution';
import StudioMethod from '@/components/StudioMethod';
import Roles from '@/components/Roles';
import SocialProof from '@/components/SocialProof';
import Metrics from '@/components/Metrics';
import Guarantee from '@/components/Guarantee';
import FAQ from '@/components/FAQ';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* S02 — Hero */}
        <Hero />
        
        
        {/* S04 — Dor do ICP */}
        <DorIcp />
        
        {/* S05 — Método Velocity */}
        <Solution />
        
        {/* S06 — Método Studio */}
        <StudioMethod />
        
        {/* S07 — Divisão de Trabalho */}
        <Roles />
        
        {/* S08 — Social Proof */}
        <SocialProof />
        
        {/* S09 — Métricas da Empresa */}
        <Metrics />
        
        {/* S10 — Garantia e Tabela */}
        <Guarantee />
        
        {/* S11 — FAQ */}
        <FAQ />
        
        {/* S12 — CTA Final */}
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
