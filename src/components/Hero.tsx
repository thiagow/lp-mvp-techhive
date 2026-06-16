'use client';

import React from 'react';
import { handleCtaRedirect } from '@/utils/navigation';

export default function Hero() {
  return (
    <section
      className="hero relative overflow-hidden"
      style={{
        backgroundColor: '#0B0F19',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '64px', /* Altura do Navbar */
      }}
    >
      {/* Background image — background-header.jpg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background-header.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.72,
        }}
      />

      {/* Overlay escuro para legibilidade */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,15,25,0.55) 0%, rgba(11,15,25,0.18) 40%, rgba(11,15,25,0.45) 100%)',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{
              borderRadius: '999px',
              border: '1px solid rgba(0,160,255,0.35)',
              backgroundColor: 'rgba(0,160,255,0.08)',
              color: 'rgba(0,200,255,0.90)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#00A0FF',
                display: 'inline-block',
                boxShadow: '0 0 6px #00A0FF',
              }}
            />
            VIBE CODING STUDIO | TECH HIVE
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#00A0FF',
                display: 'inline-block',
                boxShadow: '0 0 6px #00A0FF',
              }}
            />
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold tracking-tight text-white text-balance"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.18, marginBottom: '1.25rem' }}
          >
            Sua{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB 0%, #00A0FF 55%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ideia
            </span>{' '}
            vira um produto digital em até{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #2563EB 0%, #00A0FF 55%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              10 dias úteis
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p
            className="font-normal leading-relaxed"
            style={{
              fontSize: '1.05rem',
              color: 'rgba(220,230,255,0.85)',
              maxWidth: '560px',
              margin: '0 auto 2rem',
            }}
          >
            Receba uma proposta detalhada em até 24 horas, sem reuniões intermináveis.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-10">
            <button
              onClick={() => handleCtaRedirect('hero_primary_cta')}
              className="group inline-flex items-center justify-center gap-2 cursor-pointer"
              style={{
                backgroundColor: '#00A0FF',
                color: '#FFFFFF',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.3px',
                border: 'none',
                transition: 'background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.backgroundColor = '#0087D4';
                btn.style.transform = 'translateY(-2px)';
                btn.style.boxShadow = '0 8px 24px rgba(0,160,255,0.4)';
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.backgroundColor = '#00A0FF';
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = 'none';
              }}
            >
              Quero Receber Proposta em 24h
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust Items — 3 colunas com ícones */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
            style={{ color: 'rgba(190,210,240,0.80)', fontSize: '0.82rem' }}
          >
            {/* Item 1 — 24 anos */}
            <div className="flex items-center gap-3 text-left">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0,160,255,0.4)',
                  backgroundColor: 'rgba(0,160,255,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A0FF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'rgba(220,235,255,0.95)', lineHeight: 1.35 }}>24 anos entregando</div>
                <div style={{ lineHeight: 1.35 }}>sistemas críticos</div>
              </div>
            </div>

            {/* Item 2 — Arquitetura */}
            <div className="flex items-center gap-3 text-left">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0,160,255,0.4)',
                  backgroundColor: 'rgba(0,160,255,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A0FF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'rgba(220,235,255,0.95)', lineHeight: 1.35 }}>Arquitetura sênior</div>
                <div style={{ lineHeight: 1.35 }}>em cada projeto</div>
              </div>
            </div>

            {/* Item 3 — Código */}
            <div className="flex items-center gap-3 text-left">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0,160,255,0.4)',
                  backgroundColor: 'rgba(0,160,255,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A0FF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'rgba(220,235,255,0.95)', lineHeight: 1.35 }}>Código 100% seu</div>
                <div style={{ lineHeight: 1.35 }}>na entrega</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
