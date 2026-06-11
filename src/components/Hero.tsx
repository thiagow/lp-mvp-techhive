'use client';

import React from 'react';
import { handleCtaRedirect } from '@/utils/navigation';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Grid sutil de fundo estilo engenharia */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      {/* Gradiente sutil azul de destaque no fundo */}
      <div className="absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute top-20 left-1/4 -z-10 h-80 w-80 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge de Destaque */}
          <div className="inline-flex items-center rounded-full border border-navy-base/10 bg-navy-base/5 px-3 py-1 text-xs font-semibold tracking-wider text-navy-base uppercase mb-8 md:mb-10">
            <span className="mr-1.5 flex h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
            Vibe Coding Studio • Tech Hive
          </div>

          {/* Headline (H1) */}
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-base sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Sua ideia vira um produto digital funcional em até{' '}
            <span className="bg-gradient-to-r from-brand-blue to-blue-500 bg-clip-text text-transparent">
              10 dias úteis.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-base/80 sm:text-xl md:mt-8 leading-relaxed font-normal">
            Enquanto a agência tradicional ainda está montando o orçamento, a gente entrega o seu MVP no ar. Desenvolvimento acelerado por IA, com arquitetura de quem constrói sistemas há 24 anos.
          </p>

          {/* CTA Principal */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleCtaRedirect('hero_primary_cta')}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 cursor-pointer"
            >
              QUERO TIRAR MINHA IDEIA DO PAPEL
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

          {/* Indicadores de Confiança Rápidos */}
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-y-4 gap-x-8 text-sm font-medium text-navy-base/60 border-t border-navy-base/10 pt-8 max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Entrega em 5 a 15 dias
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Garantia de Entrega
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Arquitetura Sênior
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
