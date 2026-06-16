'use client';

import React from 'react';
import { handleCtaRedirect } from '@/utils/navigation';

export default function CtaFinal() {
  return (
    <section id="cta-analista" className="cta-final-section">
      <div className="container">
        <div className="cta-final-card">
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
              Acelere seu projeto
            </span>
          </div>
          <h2>Pronto para colocar sua ideia no ar em 10 dias?</h2>
          <p className="cta-final-desc">
            Fale com nosso analista em 10 minutos, gere seu briefing e receba seu escopo completo com proposta comercial em até 24 horas. Sem compromisso e sem reuniões improdutivas.
          </p>
          <div className="cta-final-actions">
            <button 
              onClick={() => handleCtaRedirect('final_cta')} 
              className="btn-primary cursor-pointer"
            >
              FALAR COM UM ANALISTA AGORA
            </button>
            <p className="microcopy">
              Conversa de 10 minutos · Briefing automático · Proposta em até 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
