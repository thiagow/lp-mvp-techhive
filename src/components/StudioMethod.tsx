'use client';

import React from 'react';

/* ── Ícones inline simples ─────────────────────────────────────── */
const IconClock = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconStar = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconUsers = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconLock = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconGear = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/* ── Dados dos passos ─────────────────────────────────────────── */
const steps = [
  {
    number: '01',
    name: 'PITCH',
    nameBg: 'rgba(34,197,94,0.12)',
    nameColor: '#16A34A',
    timeline: 'Hoje',
    resp: 'A Tech Hive faz isso',
    respIcon: <IconStar />,
    respBg: 'rgba(100,116,139,0.08)',
    respColor: '#64748B',
    topIcon: <IconPlus />,
    topIconColor: '#94A3B8',
    title: 'Conversa com analista + proposta em 24h',
    desc: 'Você descreve a ideia em 10 minutos. Nosso analista faz as perguntas certas, o briefing é gerado automaticamente e você recebe escopo técnico + proposta comercial em até 24h.',
    highlight: false,
  },
  {
    number: '02',
    name: 'ALINHAMENTO',
    nameBg: 'rgba(37,99,235,0.10)',
    nameColor: '#2563EB',
    timeline: 'Dia 1',
    resp: 'Decidimos juntos',
    respIcon: <IconUsers />,
    respBg: 'rgba(16,185,129,0.10)',
    respColor: '#059669',
    topIcon: <IconGear />,
    topIconColor: '#94A3B8',
    title: 'Apresentação, aprovação e contrato',
    desc: 'Apresentamos o plano. Você aprova o que vai ser construído. Escopo travado em contrato — sem surpresa de custo ou prazo depois.',
    highlight: false,
  },
  {
    number: '03',
    name: 'ROTEIRO',
    nameBg: 'rgba(37,99,235,0.10)',
    nameColor: '#2563EB',
    timeline: 'Dias 1–2',
    resp: 'A Tech Hive faz isso',
    respIcon: <IconStar />,
    respBg: 'rgba(100,116,139,0.08)',
    respColor: '#64748B',
    topIcon: <IconGear />,
    topIconColor: '#94A3B8',
    title: 'O mapa completo do seu produto',
    desc: 'Definimos o que vai existir, como cada funcionalidade vai funcionar e em que ordem será construída. É o documento que guia todo o desenvolvimento — sem ambiguidade.',
    highlight: false,
  },
  {
    number: '04',
    name: 'PILOTO',
    nameBg: 'rgba(37,99,235,0.10)',
    nameColor: '#2563EB',
    timeline: 'Dias 3–4',
    resp: 'Lock utilita',
    respIcon: <IconLock />,
    respBg: 'rgba(37,99,235,0.08)',
    respColor: '#2563EB',
    topIcon: <IconPlus />,
    topIconColor: '#94A3B8',
    title: 'Você navega as telas antes de uma linha de código ser escrita',
    desc: 'Entregamos um protótipo navegável do seu produto. Você valida fluxos, telas e experiência. Ajustes acontecem aqui — não no meio do desenvolvimento.',
    highlight: false,
  },
  {
    number: '05',
    name: 'PRODUÇÃO',
    nameBg: 'rgba(34,197,94,0.12)',
    nameColor: '#16A34A',
    timeline: 'Dias 5–9',
    resp: 'A Tech Hive faz isso',
    respIcon: <IconStar />,
    respBg: 'rgba(100,116,139,0.08)',
    respColor: '#64748B',
    topIcon: <IconPlus />,
    topIconColor: '#94A3B8',
    title: 'Desenvolvimento acelerado com IA e arquitetura sênior',
    desc: 'Construção acelerada por inteligência artificial com revisão humana em cada entrega. Você recebe atualizações parciais a cada 2 dias para acompanhar o progresso.',
    highlight: false,
  },
  {
    number: '06',
    name: 'ESTREIA',
    nameBg: 'rgba(245,158,11,0.15)',
    nameColor: '#B45309',
    timeline: 'Dia 10',
    resp: 'Entregamos Juntos',
    respIcon: <IconUsers />,
    respBg: 'rgba(16,185,129,0.10)',
    respColor: '#059669',
    topIcon: <IconCheck />,
    topIconColor: '#16A34A',
    title: 'Testes finais, publicação, chaves na sua mão',
    desc: 'Homologação completa, correções finais e deploy em produção. Código-fonte, domínio e todos os acessos passam para você. Seu produto no ar.',
    highlight: true,
  },
];

/* ── Componente ───────────────────────────────────────────────── */
export default function StudioMethod() {
  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '80px 0 96px',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
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
              Como Funciona
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#0F172A',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Método{' '}
            <span style={{ fontWeight: 900 }}>STUDIO</span>
            <sup style={{ fontSize: '0.45em', fontWeight: 700, verticalAlign: 'super', letterSpacing: 0 }}>™</sup>
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#64748B',
              lineHeight: 1.65,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Do conceito ao produto em produção — 6 passos, 10 dias úteis.<br />
            Cada passo tem um entregável claro. Você sempre sabe onde está e o que vem a seguir.
          </p>
        </div>

        {/* Grid 3×2 */}
        <div
          style={{ gap: '16px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                background: step.highlight
                  ? 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)'
                  : '#F8FAFC',
                border: step.highlight
                  ? '1px solid rgba(245,158,11,0.30)'
                  : '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '20px 20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                boxShadow: step.highlight
                  ? '0 4px 20px rgba(245,158,11,0.08)'
                  : '0 1px 6px rgba(0,0,0,0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = step.highlight
                  ? '0 8px 28px rgba(245,158,11,0.14)'
                  : '0 8px 28px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = step.highlight
                  ? '0 4px 20px rgba(245,158,11,0.08)'
                  : '0 1px 6px rgba(0,0,0,0.04)';
              }}
            >
              {/* Linha topo: número + ícone de ação */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#CBD5E1',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.number}
                </span>
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '6px',
                    background: step.highlight ? 'rgba(16,185,129,0.12)' : 'rgba(100,116,139,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step.topIconColor,
                  }}
                >
                  {step.topIcon}
                </span>
              </div>

              {/* Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {/* Badge nome do passo */}
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    background: step.nameBg,
                    color: step.nameColor,
                    textTransform: 'uppercase',
                  }}
                >
                  {step.name}
                </span>

                {/* Badge timeline */}
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    padding: '3px 8px',
                    borderRadius: '999px',
                    background: 'rgba(100,116,139,0.08)',
                    color: '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <IconClock />
                  {step.timeline}
                </span>

                {/* Badge responsabilidade */}
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    padding: '3px 8px',
                    borderRadius: '999px',
                    background: step.respBg,
                    color: step.respColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {step.respIcon}
                  {step.resp}
                </span>
              </div>

              {/* Título */}
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#0F172A',
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {step.title}
              </h4>

              {/* Descrição */}
              <p
                style={{
                  fontSize: '13px',
                  color: '#64748B',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
