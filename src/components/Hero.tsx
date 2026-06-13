'use client';

import React from 'react';
import { handleCtaRedirect } from '@/utils/navigation';

export default function Hero() {
  const points = [
    {
      title: "Reuniões sem fim, orçamento travado",
      description: "A agência pediu mais uma reunião. De novo. O orçamento que você precisa para começar a rodar nada de chegar.",
      icon: (
        <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBg: "bg-blue-50"
    },
    {
      title: "Desenvolvedores que desaparecem",
      description: "O freelancer sumiu no meio do projeto e você se encontra travado: sem código, sem respostas e sem o dinheiro investido.",
      icon: (
        <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      iconBg: "bg-red-50"
    },
    {
      title: "Time interno sobrecarregado",
      description: "Seu time de tecnologia está focado em manter a operação rodando, e sua ideia de inovação entrou no fim da fila do depois.",
      icon: (
        <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      iconBg: "bg-amber-50"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-navy-base pt-20 pb-16 md:pt-24 md:pb-28">
      {/* Background image of neural network */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none" 
        style={{ backgroundImage: "url('/images/hero_background.png')" }}
      />
      {/* Radial overlay for gradient fade */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_20%,#02040A_95%)]" />
      
      {/* Glowing subtle lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 h-72 w-72 rounded-full bg-brand-blue/15 blur-[100px]" />
      <div className="absolute top-10 left-1/4 -z-10 h-60 w-60 rounded-full bg-brand-cyan/10 blur-[80px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-brand-cyan/20 bg-brand-cyan/5 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold tracking-widest text-brand-cyan uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="mr-1.5 flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
            VIBE CODING DIGITAL • TECH HIVE
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight max-w-3xl mx-auto text-balance">
            Sua ideia vira um produto digital funcional em até{' '}
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              10 dias úteis.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Enquanto a agência tradicional ainda está montando o orçamento, a gente entrega o seu MVP no ar. Desenvolvimento acelerado por IA, com arquitetura de quem constrói sistemas há 24 anos.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => handleCtaRedirect('hero_primary_cta')}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:bg-brand-blue-hover focus:outline-none focus:ring-2 focus:ring-brand-cyan cursor-pointer"
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
        </div>

        {/* 3 Floating Cards (PainPoints / Dores) */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-20">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Icon Container with soft background */}
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${point.iconBg} mb-5`}>
                {point.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 leading-tight">
                {point.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
