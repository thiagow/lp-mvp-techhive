'use client';

import React from 'react';

export default function Solution() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Lado Esquerdo: Texto Explicativo */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold tracking-wider text-brand-blue uppercase mb-6">
              MÉTODO VELOCITY™
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-base sm:text-4xl">
              Por que a gente entrega em 10 dias o que leva 3 meses
            </h2>
            
            <div className="mt-6 space-y-6 text-base text-navy-base/80 leading-relaxed font-normal">
              <p>
                A maioria das agências gasta <strong>70% do tempo</strong> escrevendo o mesmo código repetitivo — login, cadastros, banco de dados padrão e integrações básicas.
              </p>
              <p>
                O <strong>Método Velocity™</strong> usa IA para gerar toda essa camada estrutural em horas, não semanas.
              </p>
              <p>
                Com isso, focamos 100% do tempo humano no que realmente importa: <strong>a parte do seu produto que é única</strong>. E para garantir a segurança, cada linha gerada passa pela revisão rigorosa de um arquiteto sênior.
              </p>
              
              <div className="mt-8 border-l-4 border-brand-blue pl-4 italic text-navy-base font-medium">
                "Você recebe a velocidade de uma startup com a robustez e arquitetura de quem constrói sistemas há 24 anos."
              </div>
            </div>
          </div>
          
          {/* Lado Direito: Infográfico Comparativo de Prazos */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-navy-base mb-6">
                Comparativo de Execução
              </h3>
              
              <div className="space-y-8">
                {/* Abordagem Tradicional */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-navy-base/60 uppercase">Agência Tradicional</span>
                    <span className="text-xs font-semibold text-red-500">~ 90 dias úteis</span>
                  </div>
                  <div className="h-6 w-full rounded-full bg-slate-200 overflow-hidden flex text-[10px] font-bold text-white text-center">
                    <div className="bg-slate-400 h-full flex items-center justify-center px-1" style={{ width: '40%' }} title="Login, Configurações e Setup">
                      Setup (40%)
                    </div>
                    <div className="bg-slate-500 h-full flex items-center justify-center px-1" style={{ width: '35%' }} title="Layouts e Telas Padrão">
                      Telas (35%)
                    </div>
                    <div className="bg-slate-600 h-full flex items-center justify-center px-1" style={{ width: '25%' }} title="Regra de Negócio">
                      Core (25%)
                    </div>
                  </div>
                  <span className="text-[10px] text-navy-base/50 mt-1 block">
                    Gargalo: Desenvolvimento manual de blocos repetitivos.
                  </span>
                </div>
                
                {/* Tech Hive - Velocity */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-brand-blue uppercase flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-brand-blue animate-ping" />
                      Tech Hive
                    </span>
                    <span className="text-xs font-bold text-brand-blue">Até 10 dias úteis</span>
                  </div>
                  <div className="h-6 w-full rounded-full bg-slate-200 overflow-hidden flex text-[10px] font-bold text-white text-center">
                    <div className="bg-brand-blue/60 h-full flex items-center justify-center px-1" style={{ width: '20%' }} title="Infra e Boilerplate (Gerados por IA em horas)">
                      IA (20%)
                    </div>
                    <div className="bg-brand-blue h-full flex items-center justify-center px-1" style={{ width: '80%' }} title="Foco total nas suas Regras de Negócio e UX único">
                      Seu Core Customizado (80%)
                    </div>
                  </div>
                  <span className="text-[10px] text-brand-blue mt-1 block font-medium">
                    Eficiência: Boilerplate automatizado, foco no core do seu negócio.
                  </span>
                </div>
              </div>
              
              {/* Features Rápidas do Método */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                <div>
                  <div className="text-2xl font-black text-brand-blue">10x</div>
                  <div className="text-xs text-navy-base/70 font-medium">Mais rápido que agências tradicionais</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-blue">100%</div>
                  <div className="text-xs text-navy-base/70 font-medium">Código revisado por Devs Seniores</div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
