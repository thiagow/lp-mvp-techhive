'use client';

import React from 'react';
import { handleCtaRedirect } from '@/utils/navigation';

export default function Guarantee() {
  return (
    <section className="bg-navy-dark py-20 md:py-24 relative overflow-hidden">
      {/* Glow ao redor da seção de garantia */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-brand-blue/20 bg-white/5 p-8 md:p-12 shadow-[0_0_50px_rgba(37,99,235,0.08)] backdrop-blur-xl text-center relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 to-transparent pointer-events-none" />

          {/* Ícone de Garantia / Escudo */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue/20 border border-brand-blue/30 mb-8 shadow-[0_0_20px_rgba(37,99,235,0.15)] relative z-10">
            <svg className="h-10 w-10 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          {/* Título de Garantia */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl relative z-10">
            Garantia de Entrega Velocity™
          </h2>

          {/* Texto de Garantia */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed font-normal relative z-10">
            Entregamos no prazo combinado com tudo que foi acordado no escopo, ou trabalhamos sem custo adicional até entregar. Sem desculpas.
          </p>

          {/* CTA Final */}
          <div className="mt-10 relative z-10">
            <button
              onClick={() => handleCtaRedirect('guarantee_final_cta')}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-navy-deep cursor-pointer"
            >
              QUERO MINHA PROPOSTA EM 24 HORAS
              <svg 
                className="ml-2 -mr-1 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
