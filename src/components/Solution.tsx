'use client';

import React from 'react';
import Image from 'next/image';

export default function Solution() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">

      {/* ── Background: light blue-ice gradient ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #F2F6FD 0%, #EEF3FA 50%, #F5F8FF 100%)',
        }}
      />

      {/* ── Grid de linhas tênues ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* ── Glow radial: canto esquerdo ── */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          inset: 0,
          background:
            'radial-gradient(ellipse 55% 50% at 5% 65%, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
      />

      {/* ── Glow radial: canto direito ── */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          inset: 0,
          background:
            'radial-gradient(ellipse 40% 40% at 95% 25%, rgba(0,160,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── Conteúdo ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* Lado Esquerdo: Ilustração do Braço Robótico */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(37,99,235,0.12)',
                background: '#FFFFFF',
                boxShadow: '0 20px 60px rgba(37,99,235,0.08), 0 4px 16px rgba(0,0,0,0.04)',
                padding: '1rem',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 60%)',
                }}
              />
              <Image
                src="/images/robotic_arm_dev.png"
                alt="Ilustração 3D de braço robótico desenvolvendo software"
                width={800}
                height={600}
                className="rounded-xl object-cover w-full h-auto relative z-10"
              />
            </div>
          </div>

          {/* Lado Direito: Texto e Comparativo */}
          <div className="lg:col-span-7 order-1 lg:order-2">

            {/* Eyebrow */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '1.4px',
                  textTransform: 'uppercase',
                  color: '#00A0FF',
                  background: 'rgba(0,160,255,0.10)',
                  border: '1px solid rgba(0,160,255,0.25)',
                  borderRadius: '999px',
                  padding: '5px 14px',
                }}
              >
                AI-ACCELERATED DEVELOPMENT
              </span>
            </div>

            {/* Título */}
            <h2
              className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 leading-tight text-balance"
              style={{ color: '#0F172A' }}
            >
              Por que entregamos em 10 dias enquanto outros levam 90?
            </h2>

            {/* Descrição */}
            <div
              className="space-y-4 text-base leading-relaxed font-normal max-w-[62ch]"
              style={{ color: '#475569' }}
            >
              <p>
                A maioria das agências gasta{' '}
                <strong style={{ color: '#0F172A', fontWeight: 700 }}>70% do tempo</strong>{' '}
                escrevendo o mesmo código repetitivo — login, cadastros, banco de dados padrão e integrações básicas.
              </p>
              <p>
                O{' '}
                <strong style={{ color: '#0F172A', fontWeight: 700 }}>Método Velocity™</strong>{' '}
                + IA no tempo foca no que realmente importa:{' '}
                <strong style={{ color: '#0F172A', fontWeight: 700 }}>a parte do seu produto que é única</strong>. E para garantir a segurança, cada linha gerada passa pela revisão rigorosa de um arquiteto sênior.
              </p>
            </div>

            {/* Comparativo de Execução */}
            <div
              className="mt-10 rounded-2xl p-6 md:p-8"
              style={{
                border: '1px solid rgba(37,99,235,0.12)',
                background: '#FFFFFF',
                boxShadow: '0 4px 24px rgba(37,99,235,0.06), 0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <h3
                className="text-sm font-bold uppercase tracking-wider mb-6"
                style={{ color: '#64748B' }}
              >
                Comparativo de Execução
              </h3>

              <div className="space-y-6">
                {/* Agência Tradicional */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold uppercase" style={{ color: '#94A3B8' }}>
                      Agência Tradicional
                    </span>
                    <span className="text-xs font-bold text-red-500">- 90 dias úteis</span>
                  </div>
                  <div
                    className="h-7 w-full rounded-lg overflow-hidden flex text-[10px] font-bold text-white text-center"
                    style={{
                      background: '#F1F5F9',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <div
                      className="h-full flex items-center justify-center px-1"
                      style={{ width: '35%', background: '#94A3B8' }}
                    >
                      Alinhamento (35%)
                    </div>
                    <div
                      className="h-full flex items-center justify-center px-1"
                      style={{ width: '35%', background: '#7B8FA8' }}
                    >
                      Telas (35%)
                    </div>
                    <div
                      className="h-full flex items-center justify-center px-1"
                      style={{ width: '30%', background: '#64748B' }}
                    >
                      Core (30%)
                    </div>
                  </div>
                  <span className="text-[10px] mt-1.5 block" style={{ color: '#94A3B8' }}>
                    Gargalo: 70% do tempo da agência vai em código genérico. Sua regra de negócio fica para o fim — e costuma atrasar.
                  </span>
                </div>

                {/* Tech Hive - Velocity */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className="text-[11px] font-bold uppercase flex items-center gap-1"
                      style={{ color: '#2563EB' }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-ping"
                        style={{ background: '#2563EB', display: 'inline-block' }}
                      />
                      Tech Hive
                    </span>
                    <span className="text-xs font-bold" style={{ color: '#2563EB' }}>
                      Até 10 dias úteis
                    </span>
                  </div>
                  <div
                    className="h-7 w-full rounded-lg overflow-hidden flex text-[10px] font-bold text-white text-center"
                    style={{
                      border: '1px solid rgba(37,99,235,0.20)',
                      boxShadow: '0 0 16px rgba(37,99,235,0.10)',
                    }}
                  >
                    <div
                      className="h-full flex items-center justify-center px-1"
                      style={{
                        width: '100%',
                        background: 'linear-gradient(90deg, #1D4ED8 0%, #2563EB 60%, #00A0FF 100%)',
                      }}
                    >
                      Velocity + Seu Core Customizado (100%)
                    </div>
                  </div>
                  <span
                    className="text-[10px] mt-1.5 block font-semibold"
                    style={{ color: '#2563EB' }}
                  >
                    Eficiência: IA gera o código repetitivo em horas. Nosso arquiteto sênior foca 100% na sua lógica de negócio.
                  </span>
                </div>
              </div>

              {/* Métricas */}
              <div
                className="mt-8 grid grid-cols-2 gap-4 pt-6"
                style={{ borderTop: '1px solid #E2E8F0' }}
              >
                <div>
                  <div className="text-3xl font-black" style={{ color: '#2563EB' }}>10x</div>
                  <div className="text-xs font-bold mt-1" style={{ color: '#64748B' }}>
                    Mais rápido que agências
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black" style={{ color: '#2563EB' }}>100%</div>
                  <div className="text-xs font-bold mt-1" style={{ color: '#64748B' }}>
                    Código revisado por Devs Seniores
                  </div>
                </div>
              </div>

              {/* Rodapé */}
              <p
                className="text-center text-xs font-semibold italic mt-6 pt-4"
                style={{
                  borderTop: '1px solid #F1F5F9',
                  color: '#94A3B8',
                }}
              >
                Velocidade de startup. Rigor de empresa com 24 anos de sistemas críticos.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
