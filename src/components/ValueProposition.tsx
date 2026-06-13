'use client';

import React from 'react';
import Image from 'next/image';
import { handleCtaRedirect } from '@/utils/navigation';

export default function ValueProposition() {
  const benefits = [
    "Clareza de escopo técnica e comercial em minutos.",
    "Sem ligações insistentes ou reuniões improdutivas.",
    "Orçamento transparente com cronograma de 10 dias garantido.",
    "Feedback imediato da nossa equipe de engenharia sênior."
  ];

  return (
    <section id="proposta-secao" className="relative overflow-hidden bg-navy-base py-20 md:py-32">
      {/* Círculos de gradiente neon sutil ao fundo */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-violet/5 blur-[100px] pointer-events-none" />

      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem Futurista Holográfica */}
          <div className="order-2 lg:order-1 relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl border border-brand-cyan/20 bg-navy-deep/40 backdrop-blur-xl p-4 shadow-[0_0_40px_rgba(6,182,212,0.15)] ring-1 ring-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-brand-violet/10 pointer-events-none" />
              <Image 
                src="/images/value_tech.png" 
                alt="Gráficos holográficos de performance" 
                width={800} 
                height={600} 
                className="rounded-xl object-cover hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Lado Direito: Card Principal com Efeito Glassmorphism */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-brand-blue/30 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Tag / Destaque */}
              <div className="inline-flex items-center rounded-full bg-brand-blue/20 border border-brand-blue/30 px-3 py-1 text-xs font-semibold tracking-wider text-brand-cyan uppercase mb-6">
                Acesso Imediato
              </div>

              {/* Título do Card */}
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
                Inicie o seu MVP agora.<br/>
                <span className="text-slate-300 font-medium text-2xl sm:text-3xl">Sem formulário chato, sem compromisso.</span>
              </h2>

              {/* Texto de Apoio */}
              <p className="mt-6 text-base text-slate-300 leading-relaxed font-normal">
                Nosso assistente de proposta dinâmica vai te fazer algumas perguntas rápidas para entender o que você precisa. Em poucos minutos, você terá clareza do caminho - e nossa equipe prepara um escopo sob medida.
              </p>

              {/* Lista de Benefícios com ícone de check */}
              <div className="mt-8">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-200">
                      <svg className="h-5 w-5 text-brand-cyan shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de Ação Principal */}
              <div className="mt-10">
                <button
                  onClick={() => handleCtaRedirect('value_prop_cta')}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-navy-dark cursor-pointer"
                >
                  CONVERSAR E DESCREVER MINHA IDEIA
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
                
                {/* Nota sobre o tempo de preenchimento */}
                <p className="mt-4 text-xs text-slate-400 font-normal">
                  Tempo estimado: 3 minutos. Não requer conhecimentos técnicos.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
