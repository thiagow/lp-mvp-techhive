'use client';

import React from 'react';

export default function SocialProof() {
  const partners = [
    { name: "TOTVS", desc: "Integrações de ERP" },
    { name: "Omie", desc: "Ecossistema Financeiro" },
    { name: "Conta Azul", desc: "Plataformas SaaS" },
    { name: "SAP B1", desc: "Sistemas Corporativos" }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge de Autoridade */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-navy-base px-3.5 py-1 text-xs font-semibold tracking-wider text-white uppercase mb-6">
            <svg className="h-4 w-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.9L10 1.154l7.834 3.746A1 1 0 0118.5 5.8v6.2c0 1.94-.8 3.79-2.2 5.17l-5.67 5.15a1 1 0 01-1.26 0l-5.67-5.15a7.515 7.515 0 01-2.2-5.17V5.8a1 1 0 01.666-.9zM10 3.54L4.5 6.17v4.83c0 1.34.56 2.62 1.54 3.58l3.96 3.6 3.96-3.6c.98-.96 1.54-2.24 1.54-3.58V6.17L10 3.54z" clipRule="evenodd" />
            </svg>
            Autoridade Comprovada
          </div>

          {/* Destaque Principal */}
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-base sm:text-4xl md:text-5xl leading-tight">
            24 anos construindo sistemas críticos para empresas brasileiras.
          </h2>

          {/* Texto de Apoio */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-base/80 leading-relaxed font-normal">
            Não somos uma agência que aprendeu inteligência artificial no YouTube. Somos engenharia de software de verdade, focada em segurança, escalabilidade e desempenho, agora acelerada por IA.
          </p>
        </div>

        {/* Faixa de Logos dos Parceiros/Integrações */}
        <div className="mt-12 md:mt-16 border-t border-slate-200 pt-10">
          <p className="text-center text-xs font-bold tracking-widest text-navy-base/40 uppercase mb-8">
            Nossos engenheiros já desenvolveram integrações e sistemas compatíveis com:
          </p>
          <div className="mx-auto grid max-w-lg grid-cols-2 gap-6 md:max-w-none md:grid-cols-4 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-brand-blue/30 group cursor-default"
              >
                {/* Logo Estilizada Minimalista */}
                <span className="text-xl font-black tracking-widest text-navy-base/50 transition-colors duration-200 group-hover:text-brand-blue">
                  {partner.name}
                </span>
                {/* Descrição sutil abaixo */}
                <span className="text-[10px] font-semibold tracking-wider text-navy-base/40 uppercase mt-2 group-hover:text-navy-base/60 transition-colors duration-200">
                  {partner.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
