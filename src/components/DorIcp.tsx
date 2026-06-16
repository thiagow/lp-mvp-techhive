'use client';

import React from 'react';

const cards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Você tem a ideia. Falta quem execute sem travar sua operação.',
    body: 'Contratar dev leva 3 meses. Agência leva 6. Freelancer some na metade. Sua ideia espera.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <path d="M9 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9" y1="14" x2="15" y2="14" />
        <line x1="9" y1="18" x2="12" y2="18" />
      </svg>
    ),
    title: 'Pagou adiantado. Esperou 3 meses. O freelancer sumiu na metade.',
    body: 'Voltou à estaca zero — sem código utilizável, sem documentação, sem prazo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
    title: 'A agência pediu R$ 30.000 e 3 meses para validar uma hipótese.',
    body: 'Você ainda nem sabe se o mercado quer isso. Gastar R$ 30k antes de ter a primeira venda não é investimento — é aposta.',
  },
];

export default function DorIcp() {
  return (
    <section className="pain-section">
      <div className="container">

        {/* Eyebrow badge */}
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
            Você se identifica?
          </span>
        </div>

        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>
          Essas situações parecem familiares?
        </h2>

        {/* Cards */}
        <div className="pain-grid">
          {cards.map((card, i) => (
            <div key={i} className="pain-card">
              <div
                className="pain-card__icon"
                style={{ color: '#4A5568' }}
              >
                {card.icon}
              </div>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>

        {/* Texto de transição — grande e bold conforme print */}
        <p className="pain-transition">
          Você não tem problema de ideia.<br />
          Tem problema de execução confiável em prazo real.
        </p>

      </div>
    </section>
  );
}
