'use client';

import React from 'react';
import Image from 'next/image';

export default function Solution() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          {/* Lado Esquerdo: Ilustração do Braço Robótico */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl border border-slate-100 bg-white p-4 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 via-transparent to-brand-cyan/5 pointer-events-none" />
              <Image 
                src="/images/robotic_arm_dev.png" 
                alt="Ilustração 3D de braço robótico desenvolvendo software" 
                width={800} 
                height={600} 
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Lado Direito: Texto Explicativo e Comparativo */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Eyebrow */}
            <span className="text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-4 block">
              AI-ACCELERATED DEVELOPMENT
            </span>
            
            {/* Título */}
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6 leading-tight text-balance">
              Por que a gente entrega em 10 dias o que outros levam 3 meses
            </h2>
            
            {/* Descrição */}
            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal max-w-[62ch]">
              <p>
                A maioria das agências gasta <strong className="text-slate-900 font-bold">70% do tempo</strong> escrevendo o mesmo código repetitivo - login, cadastros, banco de dados padrão e integrações básicas.
              </p>
              <p>
                O <strong className="text-slate-900 font-bold">Método Velocity™</strong> + IA no tempo foca no que realmente importa: <strong className="text-slate-900 font-bold">a parte do seu produto que é única</strong>. E para garantir a segurança, cada linha gerada passa pela revisão rigorosa de um arquiteto sênior.
              </p>
            </div>

            {/* Comparativo de Execução */}
            <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 md:p-8 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
                Comparativo de Execução
              </h3>
              
              <div className="space-y-6">
                {/* Abordagem Tradicional */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Agência Tradicional</span>
                    <span className="text-xs font-bold text-red-500">- 90 dias úteis</span>
                  </div>
                  <div className="h-7 w-full rounded-lg bg-slate-200 overflow-hidden flex text-[10px] font-bold text-white text-center border border-slate-200">
                    <div className="bg-slate-400 h-full flex items-center justify-center px-1" style={{ width: '35%' }}>
                      Alinhamento (35%)
                    </div>
                    <div className="bg-slate-500 h-full flex items-center justify-center px-1" style={{ width: '35%' }}>
                      Telas (35%)
                    </div>
                    <div className="bg-slate-650 bg-slate-600 h-full flex items-center justify-center px-1" style={{ width: '30%' }}>
                      Core (30%)
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 block">
                    Gargalo: Desenvolvimento manual de blocos repetitivos.
                  </span>
                </div>
                
                {/* Tech Hive - Velocity */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-brand-blue uppercase flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-ping" />
                      Tech Hive
                    </span>
                    <span className="text-xs font-bold text-brand-blue">Até 10 dias úteis</span>
                  </div>
                  <div className="h-7 w-full rounded-lg bg-slate-200 overflow-hidden flex text-[10px] font-bold text-white text-center border border-slate-100 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <div className="bg-brand-blue h-full flex items-center justify-center px-1" style={{ width: '100%' }}>
                      Velocity + Seu Core Customizado (100%)
                    </div>
                  </div>
                  <span className="text-[10px] text-brand-blue mt-1.5 block font-semibold">
                    Eficiência: Boilerplate automatizado, foco 100% na regra de negócio.
                  </span>
                </div>
              </div>
              
              {/* Métricas do comparativo */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200/60 pt-6">
                <div>
                  <div className="text-3xl font-black text-brand-blue">10x</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Mais rápido que agências</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-brand-blue">100%</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Código revisado por Devs Seniores</div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
